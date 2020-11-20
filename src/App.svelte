<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style global>
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  a {
    color: $blue;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }

  h1 {
    font-size: 40px;
  }

  h3 {
    font-size: 24px;
  }
</style>

<Router {routes} />

