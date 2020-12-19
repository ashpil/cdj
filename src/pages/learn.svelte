<script>
    import { metatags } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';
    import InProgress from './_components/InProgress.svelte';

    const blurb = 'keep up to date on our future events, and arm yourself with resources to make your own data visualizations!';

    metatags.title = 'CDJ | Learn';
    metatags.description = blurb;
</script>

<Intro {blurb} />

<InProgress />
