<script>
    import { metatags } from '@roxi/routify';
    import Intro from './_components/Intro.svelte';

    const blurb = 'wow some stuff about us, thats kinda crazy like were doing things.'; // TODO: fix this

    metatags.title = 'CDJ | About Us';
    metatags.description = blurb;
</script>

<Intro {blurb} />

