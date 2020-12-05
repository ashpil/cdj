<script>
    import { metatags } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';

    const blurb = 'learn how to get involved with our club and what that entails.';

    metatags.title = 'CDJ | About Us';
    metatags.description = blurb;
</script>

<Intro {blurb} />

