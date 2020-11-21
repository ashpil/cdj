<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style global>
  @import 'static/styles/typography.scss';

  body {
    margin: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

</style>

<Router {routes} />

