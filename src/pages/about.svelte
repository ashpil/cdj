<script>
    import { metatags } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';

    const blurb = 'offering data-driven perspectives on current events, academics, politics, and beyond.';

    metatags.title = 'About Us | CDJ';
    metatags.description = blurb;
</script>

<style>
  div {
    max-width: $max-width;
    margin: 0 auto;
    padding: 0 1rem;
  }
  b {
    font-family: $font-secondary;
    font-weight: 100;
  }
  li {
    font-size: 20px;
  }
  h2 {
    color: $blue;
    margin: 1em 0;
  }
</style>

<Intro {blurb} />

<div>
  <h2>What is Cornell Data Journal?</h2>
  <p>An online investigative journalism publication featuring data visualization, data communication, and interdisciplinary research pieces.</p>
  <ul>
    <li> Individuals or teams collaborating on articles</li>
     <li>Published on a rolling basis</li>
     <li>Skillbuilding workshops &amp; seminars</li>
     <li>Building data journalism presence on campus</li>
   </ul>
  <h2>Who are we?</h2>
  <p><b>Cornell Data Journal</b> was founded in Fall of 2020 by a group of Cornell students seeking to foster a data journalism community on campus. Serving as a multifaceted platform for publishing creative projects, providing educational workshops, and networking with industry professionals, the club is a space for data-driven student developers and writers to grow. We're currently accepting new members for spring 2021. Coders, designers, writers, or students interested in data journalism are welcome to apply using <a href="https://forms.gle/PszDVR3h1pznsNGu9">this link</a>.</p>
  <h2>What is data journalism?</h2>
  <p><b>Data journalism</b> is an emerging subfield of journalism, and often combines data, visual, and narrative reporting into digital stories. Examples include <a href="./articles/elegant-geometry" target="_blank">isometric illustrations</a>, <a href="./articles/familiar-strangers" target="_blank">statistical explorations, </a> and <a href="./articles/wings-of-change" target="_blank">interactive essays</a>. Think <a href="https://www.propublica.org/newsapps" target="_blank">Propublica Data</a>, <a href="https://www.nytimes.com/interactive/2020/12/30/us/2020-year-in-graphics.html " target="_blank">New York Times Interactive, </a> or <a href="https://pudding.cool/" target="_blank">The Pudding</a>. If you're interested in learning more, see how you can <a href="./get_involved.svelte">get involved</a> with us!</p>
</div>

