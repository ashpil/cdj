<!-- routify:options frontmatter= { 
  "title": "Visualizing books and media assigned by the Cornell English Department",
  "description": "In the Spring of 2021, the department of Trustees at Cornell University approved a name change the English department.",
  "authors": [ "Megan Rochlin" ],
  "date": "May 14, 2021"
} -->

<script>
  import Header from '../_components/Header.svelte';
  import Footer from '../../_components/Footer.svelte';

  import Viz from './_components/Viz.svelte';
</script>

<style>
  @font-face {
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/ptserif/v12/EJRVQgYoZZY2vCFuvAFWzr8.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  div {
    background-color: #FBE9D8;
  }
  main {
    width: 800px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 0 0.5rem;
    max-width: calc(100% - 1rem);
    color: #505050;
    font-family: "PT Serif";
    font-weight: 400;
    h1 {
      text-align: center;
      font-size: 40px;
      margin: 3rem 0;
    }
    p {
      line-height: 32px;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-size: 20px;
    }
    #checkboxes {
      font-weight: bold;
      display: flex;
      justify-content: space-evenly;
      label {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        span {
          font-size: 20px;
        }
        input {
          cursor: pointer;
        }
      }
    }
  }
</style>

<div>
  <Header />
  <main>
    <h1>Visualizing books and media assigned by the Cornell English Department</h1>
    <p>In the Spring of 2021, the department of Trustees at Cornell University approved a name change the English department. The board voted to change the name from the department of English to the Department of Literatures in English, citing a desire to better reflect the department’s diverse fields of study.</p>
    <p>Students reacted positively to the change. Concern persisted, however, about whether renaming would be part of a broader effort to decolonize English education, an effort that is taking place in departments across the country, or whether it would merely be another performative gesture. I am an English major, and although I have taken many amazing and inspiring courses during my time here, I can count on one hand the number of works I have read by author’s from outside the United Kingdom or USA.</p>
    <p>We wanted to look at the books and media being assigned by English professors at Cornell. To do this, we emailed every Professor teaching a course in Spring 2021, and we asked them to send us a copy of their syllabus.  We received over 30 syllabi with over 150 works between them.</p>
    <h2>Contemporary Literature in the English Department</h2>
    <p>One of the major criticisms of Cornell’s English department is the pre-1800s requirement. It was my own decision to take mostly courses covering pre-1800s literature during my time at Cornell, and I still treasure my Norton Shakespeare Anthology and copy of the Lais of Marie De France. Most students, however, dread the requirement and criticize it for placing limits on the amount of diversity of works in the department. </p>
    <p>This graph shows when the books taught by the English department were published.</p>
    <Viz/>
    <div id="checkboxes">
      <label>
        <input type="checkbox" class="continent" value="1000" checked />
        1000 Level
        <span style="color: #C39B82;">&#9679;&nbsp;&nbsp;</span>
      </label>
      <label>
        <input type="checkbox" class="continent" value="2000" checked />
        2000 Level
        <span style="color: #D8BFAC;">&#9679;&nbsp;&nbsp;</span>
      </label>
      <label>
        <input type="checkbox" class="continent" value="3000" checked />
        3000 Level
        <span style="color: #A5A58F;">&#9679;&nbsp;&nbsp;</span>
      </label>
      <label>
        <input type="checkbox" class="continent" value="4000" checked />
        4000 Level
        <span style="color: #6C705E;">&#9679;&nbsp;&nbsp;</span>
      </label>
  </div>
  </main>
  <Footer />
</div>
