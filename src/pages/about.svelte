<script>
    import { metatags } from '@roxi/routify';

    metatags.title = 'About Us';
    metatags.description = 'Description coming soon...';

    let content = 'Hello there!';
    let red = 'red';

    function handleMouseOver() {
      content = 'General Kenobi!';
      red = 'blue';
    }

    function handleMouseOut() {
      content = 'Hello there!';
      red = 'red';
    }
</script>

<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill={red}
					on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} />
</svg>

<h1>{content}</h1>
