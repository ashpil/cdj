<!-- routify:options frontmatter= { 
  "title": "Why you should change your major in college",
  "description": "A piece of arbitrary and probably pretentious advice: you should not trust anyone who did not change their major at least once during college.",
  "authors": [ "Megan Rochlin" ],
  "date": "May 14, 2021",
  "featured": "true"
} -->

<script>
  import Header from '../_components/Header.svelte';
  import Footer from '../../_components/Footer.svelte';

  import Viz from './_components/Viz.svelte';
</script>

<style>
  @font-face {
    font-family: 'Inconsolata';
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inconsolata/v21/QldgNThLqRwH-OJ1UHjlKENVzkWGVkL3GZQmAwLYxYWI2qfdm7Lpp4U8WR32lw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_aZA3gnD_g.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  main {
    width: 900px;
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 100%;
    color: #505050;
    font-family: Montserrat;
    font-weight: bold;
    h1 {
      text-align: center;
      font-size: 40px;
      margin: 3rem 0;
    }
    p {
      font-size: 20px;
    }
  }
</style>

<Header />

<main>
  <h1>Why you should change your major in college</h1>

  <p>A piece of arbitrary and probably pretentious advice: you should not trust anyone who did not change their major at least once during college.</p>

  <p>This might seem biased because I have, at various points during my college career, had six different majors and minors. My first intended major was Mechanical Engineering, which I stuck to for 3-4 weeks during my freshman year. Then I switched my major to Computer Science. For fun, I added a creative writing minor, which became an English minor, which finally became an English major. This is a visualization of all the classes I took during my time at Cornell:</p>

  <Viz />

  <p>I am finishing Cornell this Spring with majors in English and Computer Science and a minor in creative writing (my minors in Portuguese and Medieval studies did not make the cut).</p>

  <p>No one can know what they want to do with their life at 18. I do not even think anyone can really know at 22. I thought I knew exactly what I wanted to do with my life when I was writing my college application essays, but now, at 22, I have less of an idea of what my future looks like than I did at 17.</p>

  <p>And that’s ok. What I do know is that during my time at Cornell I took many interesting classes, spent an amazing semester studying abroad, and somehow even ended up with a job after graduation. So even though picking a major seems like a monumental decision, your major will end up being less important than you think it is.</p>
</main>

<Footer />
