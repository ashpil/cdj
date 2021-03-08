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
    b {
      font-family: $font-secondary;
      font-weight: 100;
    }
    h2 {
      color: $blue;
      margin: 1em 0;
    }
    iframe {
      width: 100%;
      border: 0;
    }
  }
</style>

<Intro {blurb} />

<div>
  <h2>Who are we?</h2>
  <p><b>Cornell Data Journal</b> was founded in Fall of 2020 by a group of Cornell students seeking to foster a data journalism community on campus. Serving as a multifaceted platform for publishing creative projects, providing educational workshops, and networking with industry professionals, the club is a space for data-driven student developers and writers to grow. We're currently accepting new members for spring 2021. Coders, designers, writers, or students interested in data journalism are welcome to apply using <a href="https://forms.gle/PszDVR3h1pznsNGu9">this link</a>.</p>
  <h2>Events</h2>
  <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y29ybmVsbGRhdGFqb3VybmFsQGdtYWlsLmNvbQ&amp;color=%237CB342&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showTitle=0" height="600" scrolling="no" title="CDJ Event Calendar"></iframe>
</div>

