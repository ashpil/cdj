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
      margin: 0.5em 0;
    }
    p {
      margin-bottom: 4rem;
    }
  }
</style>

<Intro {blurb} />

<div>
  <h2>Who are we?</h2>
  <p><b>Cornell Data Journal</b> was founded in Fall of 2020 by a group of Cornell students seeking to foster a data journalism community on campus. Serving as multifaceted platform for publishing creative projects, providing educational workshops, and networking with industry professionals, the club is a space for data-driven student developers and writers to grow. We're currently accepting new members for spring 2021. Coders, designers, writers, or students interested in data journalism are welcome to apply using <a href="https://forms.gle/PszDVR3h1pznsNGu9">this link</a>.</p>
</div>

