<script>
  import { onMount } from 'svelte';

  import raw_data from '../_data/english_department_books.csv';

  let svgClass;

  const darkTextColor = '#505050';
  const lightGreyColor = '#cdcdcd';

  if (routify.inBrowser) {
    onMount(() => {
      import('d3').then((d3) => (async () => {
        let books = await d3.csv(raw_data);
        const height = 450;
        const width = 800;
        const margin = ({ top: 0, right: 120, bottom: 34, left: 120 });

        const svg = d3.select(svgClass).attr('viewBox', '0 0 900 550');

        books = books.filter(d => d.year != '');
        books = congregate_duplicates(books);

        // Data structure describing chart scales
        const Scales = {
          lin: 'scaleLinear',
          log: 'scaleLog',
        };

        // Data structure describing volume of displayed data
        const Count = {
          total: 'year',
          perCap: 'perCapita',
        };

        // Data structure describing legend fields value
        const Legend = {
          year: 'year published',
        };

        const chartState = {
          measure: Count.total,
          scale: Count.total,
          legend: Legend.year,
        };

        // Colors used for circles depending on course level
        const colors = d3.scaleOrdinal()
          .domain(['1000', '2000', '3000', '4000'])
          .range(['#C39B82', '#D8BFAC', '#A5A58F', '#6C705E']);

        // different ways to filter data - currently only gender is an option
        const allGroup = ['gender'];

        d3.select('#selectButton')
          .selectAll('myOptions')
          .data(allGroup)
          .enter()
          .append('option')
          .text(d => d) // text showed in the menu
          .attr('value', d => d); // corresponding value returned by the button

        let xScale = d3.scaleLinear()
          .range([margin.left, width - margin.right]);

        svg.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + (height - margin.bottom) + ')');

        // Create line that connects circle and X axis
        const xLine = svg.append('line')
          .attr('stroke', 'rgb(96,125,139)')
          .attr('stroke-dasharray', '1,2');

        // create display legend
        const genders = ['male', 'female', 'all'];

        const legend = genders;

        d3.select(svgClass).append('g')
          .selectAll('.key')
          .data(legend)
          .enter()
          .append('circle')
          .attr('class', 'gender_options')
          .attr('id', (d, i) => 'key_' + d)
          .attr('cx', (d, i) => width - (margin.right / 2))
          .attr('cy', (d, i) => 90 + i * 25)
          .attr('r', 8)
          .style('fill', '#f8f8f8')
          .style('stroke', darkTextColor)
          .style('cursor', 'pointer')
          .style('stroke-width', 2)
          .on('click', (event, d) => {
            handleBarLegendChange(d, '.gender_options');
            svg.selectAll('.books').remove();
            if (d == 'female') {
              filter_value = 'female';
              redraw(false);
            } else if (d == 'male') {
              filter_value = 'male';
              redraw(false);
            } else {
              filter_value = null;
              redraw(false);
            }
          });

        const filter_field = 'gender';
        let filter_value = 'female';

        handleBarLegendChange('female', '.gender_options');

        d3.select(svgClass).append('g')
          .selectAll('.key_labels')
          .data(legend)
          .enter()
          .append('text')
          .attr('x', (d, i) => width - (margin.right / 2) + 15)
          .attr('y', (d, i) => 92 + i * 25)
          .text(d => d)
          .style('fill', darkTextColor)
          .style('font-weight', 'bold')
          .style('font-family', 'Inconsolata')
          .style('font-size', '12px');

        // Create tooltip
        const tooltip = addTooltipToVis('heightSvg_tooltip');

        let dataSet = books;

        // Set chart domain max value to the highest total value in data set
        xScale.domain(d3.extent(dataSet, d => d.year));

        redraw();

        // Trigger filter function whenever checkbox is ticked/unticked
        d3.selectAll('input').on('change', filter);

        function redraw(transition = true) {
          let duration;
          if (transition) {
            duration = 1000;
          } else {
            duration = 0;
          }

          // Set scale type based on button clicked
          if (chartState.scale === Scales.lin) {
            xScale = d3.scaleLinear().range([margin.left, width - margin.right]);
          }

          if (chartState.scale === Scales.log) {
            xScale = d3.scaleLog().range([margin.left, width - margin.right]);
          }

          xScale.domain(d3.extent(dataSet, d => d[chartState.measure]));

          let xAxis;
          // Set X axis based on new scale.
          if (chartState.measure === Count.perCap) {
            xAxis = d3.axisBottom(xScale)
              .ticks(10, '.1f')
              .tickSizeOuter(0);
          } else {
            xAxis = d3.axisBottom(xScale)
              .ticks(10)
              .tickSizeOuter(0);
          }

          d3.transition(svg).select('.x.axis')
            .transition()
            .duration(duration)
            .call(xAxis);

          // Create simulation with specified dataset
          const simulation = d3.forceSimulation(dataSet)
            // Apply positioning force to push nodes towards desired position along X axis
            // This is the desired position Mapping of values from total/perCapita column of dataset to range of SVG chart (<margin.left, margin.right>)
            .force('x', d3.forceX(d => xScale(d[chartState.measure])).strength(2)) // Increase velocity
            .force('y', d3.forceY((height / 2) - margin.bottom / 2)) // Apply positioning force to push nodes towards center along Y axis
            .force('collide', d3.forceCollide(d => 9 + (9 * 0.5 * (d.count - 1)))) // Apply collision force with radius of 9 - keeps nodes centers 9 pixels apart
            .stop(); // Stop simulation from starting automatically

          // Manually run simulation
          for (let i = 0; i < dataSet.length; ++i) {
            simulation.tick(10);
          }

          // Create circles for books
          const bookCircles = svg.selectAll('.books')
            .data(dataSet, d => d.title);

          bookCircles.exit()
            .transition()
            .duration(duration)
            .attr('cx', 0)
            .attr('cy', (height / 2) - margin.bottom / 2)
            .remove();

          bookCircles.enter()
            .append('circle')
            .attr('class', 'books')
            .attr('cx', 0)
            .attr('cy', (height / 2) - margin.bottom / 2)
            .attr('r', d => 6 * d.count)
            .attr('fill', (d) => {
              if (filter_value != null) {
                if (d[filter_field] != filter_value) {
                  return lightGreyColor;
                }
                let class_level = d.course_number.substring(d.course_number.indexOf(' '));
                class_level = class_level.substring(1, 2) + '000';
                return colors(class_level);
              }
              let class_level = d.course_number.substring(d.course_number.indexOf(' '));
              class_level = class_level.substring(1, 2) + '000';
              return colors(class_level);
            })
            .merge(bookCircles)
            .transition()
            .duration(duration * 2)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);

          // Show tooltip when hovering over circle (data for book)
          d3.selectAll('.books').on('mousemove', function (event, d) {
            const tooltipText = '<i><b>' + d.title + '</b></i><br />'
              + 'author: <b>' + d.author + '</b><br />'
              + 'course: <b>' + d.course_number + '</b><br />'
              + 'year published: <b>' + d.year + '</b>';

            updateToolTipText(tooltip, tooltipText, -20, 110);

            xLine.attr('x1', d3.select(this).attr('cx'))
              .attr('y1', d3.select(this).attr('cy'))
              .attr('y2', (height - margin.bottom))
              .attr('x2', d3.select(this).attr('cx'))
              .attr('opacity', 1);
          }).on('mouseout', () => {
            hideTooltip(tooltip, 'testing');
            xLine.attr('opacity', 0);
          });
        }

        // Filter data based on which checkboxes are ticked
        function filter() {
          function getCheckedBoxes(checkboxName) {
            const checkboxes = d3.selectAll(checkboxName).nodes();
            const checkboxesChecked = [];
            for (let i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].checked) {
                checkboxesChecked.push(checkboxes[i].defaultValue);
              }
            }
            return checkboxesChecked.length > 0 ? checkboxesChecked : null;
          }

          const checkedBoxes = getCheckedBoxes('.continent');

          const newData = [];

          if (checkedBoxes == null) {
            dataSet = newData;
            redraw();
            return;
          }

          for (let i = 0; i < checkedBoxes.length; i++) {
            const newArray = books.filter(d => {
              let class_level = d.course_number.substring(d.course_number.indexOf(' '));
              class_level = class_level.substring(1, 2) + '000';
              return class_level == checkedBoxes[i];
            });
            Array.prototype.push.apply(newData, newArray);
          }

          dataSet = newData;
          redraw();
        }

        // for books that are tuught by more than one class, merge entries and increase count
        function congregate_duplicates(books) {
          const non_duplicated_list = [];
          const book_count = {};
          const title_to_index = {};
          for (let i = 0; i < books.length; i++) {
            if (!(books[i].title in book_count)) {
              book_count[books[i].title] = 1;
              non_duplicated_list.push(books[i]);
              title_to_index[books[i].title] = non_duplicated_list.length - 1;
            } else {
              book_count[books[i].title] += 1;
              non_duplicated_list[title_to_index[books[i].title]].course_number = non_duplicated_list[title_to_index[books[i].title]].course_number + ' & ' + books[i].course_number;
            }
          }
          for (let i = 0; i < non_duplicated_list.length; i++) {
            non_duplicated_list[i].count = book_count[non_duplicated_list[i].title];
          }
          return non_duplicated_list;
        }

        function addTooltipToVis(className) {
          return d3.select('main')
            .append('div')
            .attr('class', className)
            .style('padding', '10px')
            .style('position', 'absolute')
            .style('z-index', '10')
            .style('visibility', 'hidden')
            .attr('white-space', 'pre-line')
            .style('background-color', '#fbfbfb')
            .style('border-radius', '5px')
            .style('border', '1px solid #cdcdcd');
        }

        function updateToolTipText(tooltip, tooltipText, topOffset, leftOffset) {
          tooltip
            .html(tooltipText)
            .style('font-family', 'Montserrat')
            .style('font-size', '12px')
            .style('visibility', 'visible')
            .style('max-width', '150px')
            .style('top', window.event.pageY - topOffset + 'px')
            .style('left', window.event.pageX - leftOffset + 'px');
        }

        function hideTooltip(tooltip, className) {
          tooltip.style('visibility', 'hidden');
          d3.selectAll(className).remove();
        }

        function handleBarLegendChange(d, circle_id) {
          d3.selectAll(circle_id)
            .transition()
            .duration(500)
            .style('fill', '#f8f8f8');

          d3.select('#key_' + d)
            .transition()
            .duration(500)
            .style('fill', darkTextColor);
        }
      })());
    });
  }
</script>

<svg bind:this={svgClass}></svg>
