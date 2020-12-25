<script>
    import { metatags } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';
    import InProgress from './_components/InProgress.svelte';

    const blurb = 'learn how to get involved with our club and what that entails.';

    metatags.title = 'Get Involved | CDJ';
    metatags.description = blurb;
</script>

<Intro {blurb} />

<InProgress />
