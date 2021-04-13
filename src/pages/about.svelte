<script>
    import { metatags } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';
    import Person from './_components/about/Person.svelte';

    const blurb = 'offering data-driven perspectives on current events, academics, politics, and beyond.';

    metatags.title = 'About Us | CDJ';
    metatags.description = blurb;

    const team = [
      { name: 'Annie Fu', year: 21, role: 'Co-Editor in Chief', major: ['Information Science'], minor: ['English'], desc: 'Some sort of description', },
      { name: 'Dana Gong', year: 22, role: 'Co-Editor in Chief', major: ['Information Science'], minor: ['PAM'], desc: 'Some sort of description', },
      { name: 'Megan Rochlin', year: 21, role: 'Deputy Editor', major: ['Computer Science', 'English'], minor: ['Creative Writing', 'Medieval Studies'], desc: 'Some sort of description' },
      { name: 'Andrei Shpilenok', year: 23, role: 'Web Developer', major: ['Computer Science'], minor: [], desc: 'Some sort of description' },
      { name: 'Liying Wang', year: 22, role: 'Marketing/Graphics Editor', major: ['Information Science'], minor: ['Visual Studies', 'Business'], desc: 'Some sort of description' },
      { name: 'Yun Mi Koh', year: 21, role: 'Marketing Lead', major: ['DEA'], minor: ['UX'], desc: 'Some sort of description' },
    ];

    const colors = ['#A4BCD5', '#2C358B', '#F8C82D', '#642D89'];
</script>

<style>
  #main {
    max-width: $max-width;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 55% 45%;
  }
  b {
    font-family: $font-secondary;
    font-weight: 100;
  }
  h2 {
    color: $blue;
  }
  #team {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 3rem;
  }
  li{
    margin-left: 3rem;
    font-size: 20px;
  }
  h2 {
    color: $blue;
    margin: 1em 0;
  }
</style>

<Intro {blurb} />

<div id="main">
  <h2>What is Cornell Data Journal?</h2>
  <p>Founded in Fall 2020, <b>Cornell Data Journal</b> is an online investigative journalism publication featuring data visualization, data communication, and interdisciplinary research pieces.</p>
  <ul>
    <li> Individuals or teams collaborating on articles</li>
     <li>Published on a rolling basis</li>
     <li>Skillbuilding workshops & seminars </li>
     <li>Building data journalism presence on campus</li>
   </ul>
  <p>We're a group of Cornell students seeking to foster a data journalism community on campus. Coders, designers, writers, or students interested in data journalism are welcome to join our community.</p>
  <h2>What is data journalism?</h2>
  <p><b>Data journalism</b> is an emerging subfield of journalism, and often combines data, visual, and narrative reporting into digital stories. Examples include <a href="./articles/elegant-geometry" target="_blank">isometric illustrations</a>, <a href="./articles/familiar-strangers" target="_blank">statistical explorations, </a> and <a href="./articles/wings-of-change" target="_blank">interactive essays</a>.  Think <a href="https://www.propublica.org/newsapps" target="_blank">Propublica Data</a>, <a href="https://www.nytimes.com/interactive/2020/12/30/us/2020-year-in-graphics.html " target="_blank">New York Times Interactive, </a> or <a href="https://pudding.cool/" target="_blank">The Pudding</a>.</p>
  <p>If you're interested in learning more, see how you can <a href="./get_involved.svelte">get involved</a> with us!</p>
  <h2>Meet the Team!</h2>
  <div id="team">
    {#each team as { name, year, role, minor, major, desc }, i}
      <Person {name} {year} {role} {minor} {major} {desc} color={colors[i % colors.length]}/>
    {/each}
  </div>
</div>
