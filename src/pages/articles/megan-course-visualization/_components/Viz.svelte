<script>
  import { onMount } from 'svelte';

  import raw_csv from '../_data/courses.csv';

  const darkTextColor = '#505050';
  const lightGreyColor = '#cdcdcd';

  let svgClass;

  if (routify.inBrowser) {
    onMount(() => {
      import('d3').then((d3) => (async () => {
        function findYearDivisions(data) {
          const term_list = [];
          let courses_taken = 0;
          let term = '';
          for (let i = 0; i < data.length; i++) {
            const current_term = data[i].term;
            if (current_term != term || i == (data.length - 1)) {
              if (courses_taken > 0) {
                term_list.push({
                  key: term,
                  value: courses_taken,
                });
              }
              courses_taken = 0;
              term = current_term;
            }
            courses_taken += 1;
          }
          return term_list;
        }

        function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }

        /* FUNCTIONS TO HANDLE TOOLTIP FUNCTIONALITY */
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
            .style('top', () => window.event.pageY - topOffset + 'px')
            .style('left', () => window.event.pageX - leftOffset + 'px');
        }

        function hideTooltip(tooltip, className) {
          tooltip.style('visibility', 'hidden');
          d3.selectAll(className).remove();
        }

        const classes_data = await d3.csv(raw_csv);

        const innerRadius = 150;
        const outerRadius = 250;
        const svg = d3.select(svgClass).attr('viewBox', '0 0 900 550');
        const pieClass = 'path_courses';
        const yearDivisions = findYearDivisions(classes_data);

        const xOffset = 450;
        const yOffset = 280;

        const data = classes_data;

        const tooltip = addTooltipToVis('heightSvg_tooltip');

        const colors = ['#F2A65A', '#F58549', '#EEC170', '#D496A7', '#8DF7BB', '#78E0DC', '#8EEDF7', '#A1CDF1'];
        colors.reverse();

        const pie = d3.pie()
          .value(d => d.value)
          .sort(null);

        const pie2 = d3.pie()
          .value(d => d.value)
          .padAngle(0.02)
          .sort(null);

        const radiusScale = d3.scaleSqrt()
          .domain([0, 4])
          .range([innerRadius, outerRadius]);

        const creditsScale = d3.scaleLinear()
          .domain([0, 4])
          .range([30, 5]);

        const newArc = d3.arc()
          .innerRadius(innerRadius + 7.5)
          .outerRadius(d => {
            let class_number = d.data.Number;
            class_number = parseInt(class_number.substring(0, 1));
            return radiusScale(class_number) + 10;
          });

        const arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(d => {
            let class_number = d.data.Number;
            class_number = parseInt(class_number.substring(0, 1));
            return radiusScale(class_number);
          });

        const innerArc = d3.arc()
          .innerRadius(innerRadius - 50)
          .outerRadius(innerRadius - 20);

        const term_arc = d3.arc()
          .innerRadius(innerRadius - 40)
          .outerRadius(innerRadius - 45);

        // draw pie segments
        svg.datum(data).selectAll('.' + pieClass)
          .data(pie)
          .enter()
          .append('path')
          .attr('class', pieClass)
          .attr('id', d => pieClass + '_' + parseInt(d.data.key))
          .attr('fill', d => {
            if (d.data.Category == 'Engineering Distribution') {
              return colors[0];
            } else if (d.data.Category == 'CS') {
              return colors[1];
            } else if (d.data.Category == 'CS distribution') {
              return colors[2];
            } else if (d.data.Category == 'Liberal Arts Distribution') {
              return colors[3];
            } else if (d.data.Category == 'PE') {
              return colors[4];
            } else if (d.data.Category == 'Arts distribution') {
              return colors[5];
            } else if (d.data.Category == 'English') {
              return colors[6];
            } else if (d.data.Category == 'Language') {
              return colors[7];
            }
          })
          .attr('d', arc)
          .attr('transform', 'translate(' + xOffset + ',' + yOffset + ')')
          .on('mouseover', (e, d) => {
            const name = d.data.Name;
            d3.select(e.currentTarget)
              .transition()
              .duration(300)
              .attr('d', newArc);
            const tooltipText = '<b>' + d.data.Prefix + ' ' + d.data.Number + '  </br>' + name;

            updateToolTipText(tooltip, tooltipText, -20, 110);
          })
          .on('mouseout', (e) => {
            hideTooltip(tooltip, 'testing');

            svg.select('.' + pieClass + '_text')
              .text('');

            svg.select('.' + pieClass + '_activity_text')
              .text('');

            d3.select(e.currentTarget)
              .transition()
              .duration(250)
              .attr('d', arc);
          });

        // draw year divisions
        svg.datum(yearDivisions)
          .selectAll('.yearDivisions')
          .data(pie2)
          .enter()
          .append('path')
          .attr('class', pieClass)
          .attr('id', d => 'yearDivisions_' + parseInt(d.data.key))
          .attr('transform', 'translate(' + xOffset + ',' + yOffset + ')')
          .attr('fill', lightGreyColor)
          .attr('d', term_arc);

        // add year division labels
        svg.datum(yearDivisions)
          .selectAll('#yearDivisions_label')
          .data(pie).enter()
          .append('text')
          .attr('dy', '.35em')
          .text(d => d.data.key)
          .attr('transform', d => {
            const pos = term_arc.centroid(d);
            const x = pos[0];
            const y = pos[1];
            const hyp = Math.sqrt(x * x + y * y);
            return 'translate(' + (xOffset + x / hyp * (innerRadius - 50)) + ',' + (yOffset + y / hyp * (innerRadius - 50)) + ')';
          })
          .style('text-anchor', d => (midAngle(d) < Math.PI ? 'end' : 'start'))
          .style('font-family', 'Inconsolata')
          .style('font-weight', 'bold')
          .style('font-size', '8px');

        // add radial lines
        svg.datum(data).selectAll('#' + pieClass + '_label')
          .data(pie).enter()
          .append('path')
          .attr('d', d => {
            const pos = innerArc.centroid(d);
            const x = pos[0];
            const y = pos[1];
            const hyp = Math.sqrt(x * x + y * y);
            const startx = Math.round(xOffset + x / hyp * (innerRadius - 5));
            const starty = Math.round(yOffset + y / hyp * (innerRadius - 5));
            const endx = Math.round(xOffset + x / hyp * (innerRadius - 30));
            const endy = Math.round(yOffset + y / hyp * (innerRadius - 30));
            return ('M ' + startx + ' ' + starty + 'L ' + endx + ' ' + endy);
          })
          .style('stroke', lightGreyColor)
          .style('stroke-width', 2)
          .style('fill', 'none');

        // add circles
        svg.datum(data).selectAll('#' + pieClass + '_label')
          .data(pie).enter()
          .append('circle')
          .attr('cx', d => {
            const pos = innerArc.centroid(d);
            const x = pos[0];
            const y = pos[1];
            const hyp = Math.sqrt(x * x + y * y);
            const n = Math.round(xOffset + x / hyp * (innerRadius - creditsScale(parseInt(d.data.credits))));
            return Math.round(xOffset + x / hyp * (innerRadius - creditsScale(parseInt(d.data.credits))));
          })
          .attr('cy', d => {
            const pos = innerArc.centroid(d);
            const x = pos[0];
            const y = pos[1];
            const hyp = Math.sqrt(x * x + y * y);
            return Math.round(yOffset + y / hyp * (innerRadius - creditsScale(parseInt(d.data.credits))));
          })
          .attr('r', '3')
          .attr('fill', d => {
            if (d.data.Category == 'Engineering Distribution') {
              return colors[0];
            } else if (d.data.Category == 'CS') {
              return colors[1];
            } else if (d.data.Category == 'CS distribution') {
              return colors[2];
            } else if (d.data.Category == 'Liberal Arts Distribution') {
              return colors[3];
            } else if (d.data.Category == 'PE') {
              return colors[4];
            } else if (d.data.Category == 'Arts distribution') {
              return colors[5];
            } else if (d.data.Category == 'English') {
              return colors[6];
            } else if (d.data.Category == 'Language') {
              return colors[7];
            }
          })
          .style('stroke', darkTextColor)
          .style('stroke-width', 1);

        // add class level labels
        svg.append('text')
          .attr('class', 'political_label')
          .attr('x', xOffset)
          .attr('y', yOffset - outerRadius - 8)
          .text('4000 level')
          .style('font-family', 'Inconsolata')
          .style('alignment-baseline', 'middle')
          .style('font-weight', 'bold')
          .style('font-size', '10px');

        svg.append('text')
          .attr('class', 'political_label')
          .attr('x', xOffset)
          .attr('y', yOffset - outerRadius + 15 - 8)
          .text('3000 level')
          .style('font-family', 'Inconsolata')
          .style('alignment-baseline', 'middle')
          .style('font-weight', 'bold')
          .style('font-size', '10px');

        svg.append('text')
          .attr('class', 'political_label')
          .attr('x', xOffset)
          .attr('y', yOffset - outerRadius + 30 - 8)
          .text('2000 level')
          .style('font-family', 'Inconsolata')
          .style('alignment-baseline', 'middle')
          .style('font-weight', 'bold')
          .style('font-size', '10px');

        svg.append('text')
          .attr('class', 'political_label')
          .attr('x', xOffset)
          .attr('y', yOffset - outerRadius + 50 - 8)
          .text('1000 level')
          .style('font-family', 'Inconsolata')
          .style('alignment-baseline', 'middle')
          .style('font-weight', 'bold')
          .style('font-size', '10px');

        svg.append('circle')
          .attr('cx', xOffset)
          .attr('cy', yOffset)
          .attr('r', outerRadius)
          .attr('stroke', lightGreyColor)
          .style('fill', 'none')
          .style('stroke-width', '3px')
          .style('stroke-dasharray', '3, 3');

        svg.append('circle')
          .attr('cx', xOffset)
          .attr('cy', yOffset)
          .attr('r', outerRadius - 15)
          .attr('stroke', lightGreyColor)
          .style('fill', 'none')
          .style('stroke-width', '3px')
          .style('stroke-dasharray', '3, 3');

        svg.append('circle')
          .attr('cx', xOffset)
          .attr('cy', yOffset)
          .attr('r', outerRadius - 30)
          .attr('stroke', lightGreyColor)
          .style('fill', 'none')
          .style('stroke-width', '3px')
          .style('stroke-dasharray', '3, 3');

        svg.append('circle')
          .attr('cx', xOffset)
          .attr('cy', yOffset)
          .attr('r', outerRadius - 50)
          .attr('stroke', lightGreyColor)
          .style('fill', 'none')
          .style('stroke-width', '3px')
          .style('stroke-dasharray', '3, 3');

        // add legend
        const labels = [
          'Engineering Distribution',
          'Computer Science',
          'CS Distribution',
          'Liberal Studies',
          'Physical Education',
          'A&S Distribution',
          'English',
          'Foreign Language',
        ];

        svg.append('g')
          .selectAll('year_squares')
          .data(labels)
          .enter()
          .append('circle')
          .attr('class', 'year_squares')
          .attr('id', (d, i) => 'key_' + d)
          .attr('cx', xOffset + outerRadius)
          .attr('cy', (d, i) => 40 + i * 15)
          .attr('r', 5)
          .style('fill', (d, i) => colors[i])
          .style('stroke', darkTextColor)
          .style('stroke-width', 1);

        // create legend labels
        d3.select(svgClass).append('g')
          .selectAll('.key_labels')
          .data(labels)
          .enter()
          .append('text')
          .attr('x', xOffset + outerRadius + 20)
          .attr('y', (d, i) => 43 + i * 15)
          .text(d => d)
          .style('fill', darkTextColor)
          .style('font-weight', 'bold')
          .style('font-family', 'Inconsolata')
          .style('font-size', '8px');

        svg.append('text')
          .attr('class', 'political_label')
          .attr('x', 20)
          .attr('y', 20)
          .text('how to read:')
          .style('fill', darkTextColor)
          .style('font-family', 'Inconsolata')
          .style('font-weight', 'bold')
          .style('font-family', 'Inconsolata')
          .style('font-size', '15px');

        svg.append('text')
          .attr('class', 'political_label')
          .attr('x', 0)
          .attr('y', 70)
          .text('# of credits')
          .style('fill', darkTextColor)
          .style('font-family', 'Inconsolata')
          .style('font-weight', 'bold')
          .style('font-family', 'Inconsolata')
          .style('font-size', '15px');

        const credits = [1, 2, 3, 4];
        svg.append('g')
          .selectAll('credits_legend')
          .data(credits)
          .enter()
          .append('path')
          .attr('d', d => {
            const startX = 90 + 15 * d;
            return ('M ' + startX + ' 40 L ' + startX + ' 90');
          })
          .style('stroke', lightGreyColor)
          .style('stroke-width', 2)
          .style('fill', 'none');

        svg.append('g')
          .selectAll('credits_legend')
          .data(credits)
          .enter()
          .append('circle')
          .attr('cx', d => 90 + 15 * d)
          .attr('cy', d => 30 + 2 * creditsScale(d))
          .attr('r', 5)
          .attr('fill', colors[0])
          .style('stroke', darkTextColor)
          .style('stroke-width', 1);

        svg.append('g')
          .selectAll('credits_legend')
          .data(credits)
          .enter()
          .append('text')
          .attr('x', d => 90 + 15 * d)
          .attr('y', 110)
          .text(d => d)
          .style('fill', darkTextColor)
          .style('font-weight', 'bold')
          .style('font-family', 'Inconsolata')
          .style('font-size', '12px');

        svg.append('path')
          .attr('d', 'M 450 510 L 450 540 L 550 540')
          .style('stroke', darkTextColor)
          .style('stroke-width', 2)
          .style('fill', 'none');

        svg.append('text')
          .attr('x', 555)
          .attr('y', 540)
          .text('Studied abroad at the University of Edinburgh')
          .style('font-family', 'Inconsolata')
          .style('font-weight', 'bold')
          .style('alignment-baseline', 'middle')
          .style('font-size', '10px');

        // add annotations
        svg.append('path')
          .attr('d', 'M 330 490 L 330 500 L 230 500')
          .style('stroke', darkTextColor)
          .style('stroke-width', 2)
          .style('fill', 'none');

        svg.append('text')
          .attr('x', 50)
          .attr('y', 505)
          .text('Transfered from Engineering to A&S')
          .style('font-family', 'Inconsolata')
          .style('font-weight', 'bold')
          .style('alignment-baseline', 'left')
          .style('font-size', '10px');

        svg.append('text')
          .attr('x', 50)
          .attr('y', 515)
          .text('and added English major')
          .style('font-family', 'Inconsolata')
          .style('font-weight', 'bold')
          .style('alignment-baseline', 'left')
          .style('font-size', '10px');

        svg.append('text')
          .attr('x', 745)
          .attr('y', 300)
          .text('Declared CS major')
          .style('font-family', 'Inconsolata')
          .style('font-weight', 'bold')
          .style('alignment-baseline', 'middle')
          .style('font-size', '10px');

        svg.append('path')
          .attr('d', 'M 690 300 L 740 300')
          .style('stroke', darkTextColor)
          .style('stroke-width', 2)
          .style('fill', 'none');
      })());
    });
  }
</script>

<svg bind:this={svgClass}></svg>
