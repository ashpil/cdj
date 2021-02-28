<style>
  footer {
    margin-top: 5rem;
    height: 7rem;
    background-color: $yellow;
  }

  #socials {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    a {
      width: 3rem;
      margin: 1.5rem;
      transition: filter 100ms;
      &:hover {
        filter: invert(14%) sepia(45%) saturate(5583%) hue-rotate(237deg) brightness(85%) contrast(90%);
      }
    }
  }

  @media only screen and (max-width: $mobile-cutoff) {
    #socials {
      a {
        width: 2.5rem;
        margin: 1rem;
      }
    }
  }
</style>

<footer>
  <div id="socials">
    <a href="https://www.instagram.com/cornelldatajournal/">
      <img src="/socials/instagram.svg" alt="Instagram">
    </a>
    <a href="https://www.facebook.com/cornelldatajournal/">
      <img src="/socials/facebook.svg" alt="Facebook">
    </a>
    <a href="https://join.slack.com/t/cornell-data-journal/shared_invite/zt-mb391cgl-yqsPnKf6IptzobNInf~y0Q">
      <img src="/socials/slack.svg" alt="Slack">
    </a>
    <a href="https://www.linkedin.com/company/cornell-data-journal/">
      <img src="/socials/linkedin.svg" alt="LinkedIn">
    </a>
  </div>
</footer>

