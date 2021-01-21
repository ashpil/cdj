<script>
    import { metatags } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';
    import PieChart from './_components/about/PieChart.svelte';
    import Person from './_components/about/Person.svelte';

    const blurb = 'offering data-driven perspectives on current events, academics, politics, and beyond.';

    metatags.title = 'About Us | CDJ';
    metatags.description = blurb;

    const team = [
      { name: 'Andrei Shpilenok', year: 23, position: 'Something', desc: 'HI! I am a person with a description' },
      { name: 'Andrei Shpilenok', year: 23, position: 'Something', desc: 'HI! I am a person with a description' },
      { name: 'Andrei Shpilenok', year: 23, position: 'Something', desc: 'HI! I am a person with a description' },
      { name: 'Andrei Shpilenok', year: 23, position: 'Something', desc: 'HI! I am a person with a description' },
      { name: 'Andrei Shpilenok', year: 23, position: 'Something', desc: 'HI! I am a person with a description' },
    ];

    const colors = ['#A5BDDA', '#2D2D94', '#EAC428', '#672893'];
</script>

<style>
  main {
    max-width: $max-width;
    margin: 0 auto;
    padding: 1rem;
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
    p {
      margin-bottom: 4rem;
    }
  }
  #team {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media only screen and (max-width: $mobile-cutoff) {
    main {
      .grid {
        display: block;
      }
    }
  }
</style>

<Intro {blurb} />

<main>
  <h2>Who are we?</h2>
  <div class="grid">
    <p><b>Cornell Data Journal</b> was founded in Fall of 2020 by a group of Cornell students seeking to foster a data journalism community on campus. Serving as a multifaceted platform for publishing creative projects, providing educational workshops, and networking with industry professionals, the club is a space for data-driven student developers and writers to grow. We're currently accepting new members for spring 2021. Coders, designers, writers, or students interested in data journalism are welcome to apply using <a href="https://forms.gle/PszDVR3h1pznsNGu9">this link</a>.</p>
    <div>
      <PieChart />
    </div>
  </div>
  <h2>Meet the Team!</h2>
  <div id="team">
    {#each team as { name, year, position, desc }, i}
      <Person {name} {year} {position} {desc} color={colors[i % colors.length]}/>
    {/each}
  </div>
</main>

