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
      color: rgb(0,100,200);
      text-decoration: none;
  }

  a:hover {
      text-decoration: underline;
  }

  img {
    max-width: 100%;
  }
</style>

<Router {routes} />

