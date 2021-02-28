<style>
  header {
    margin: 1rem 0 3rem;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-height: 2.5rem;
      }
      h1 {
        display: inline;
        color: initial;
        margin: 0.5rem;
        font-size: 35px;
        font-family: $font-secondary;
        line-height: initial;
      }
      
      &:hover {
        text-decoration: none;
      }
    }
  }
  @media only screen and (max-width: $mobile-cutoff) {
    header {
      margin: 0.5rem 0;
    }
  }
</style>

<header>
  <a href="/">
    <img src="/favicon.svg" alt="CDJ Logo">
    <h1>cdj</h1>
  </a>
</header>

