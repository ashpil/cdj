<script>
    import { metatags } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';
    import InProgress from './_components/InProgress.svelte';

    const blurb = 'offering data-driven perspectives on current events, academics, politics, and beyond.';

    metatags.title = 'CDJ | About Us';
    metatags.description = blurb;
</script>

<Intro {blurb} />

<InProgress />

