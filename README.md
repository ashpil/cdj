# CDJ Website

Currently, this is using the [Svelte frontend framework](https://svelte.dev/) with the
[Routify](https://routify.dev/) scaffolding for it.

The [Svelte tutorial](https://svelte.dev/tutorial/basics) is very good,
and I recommend it to anyone who's interested in figuring out what the syntax/idioms are like.

You can also check out the [Routify guide](https://routify.dev/guide/introduction). 

After going through those two links, you'll be pretty set to understand the structure of the site.

### Installation

As a prerequisite, if you don't have it already, install [node](https://nodejs.org/en/).

To get this site running locally, clone it, run `npm install` in the directory,
and to start it, use `npm run dev:ssr`.

See [`src/pages/`](src/pages/) for some examples of what making pages with Svelte looks like.

Any pages in the [`src/pages/articles/`](src/pages/articles) directory are automatically queried and
put on the main page, if they are properly set up.

### Codebase

Some selected folders from the file structure:

```
.
├── api                        <- just stuff for hosting
├── assets                     <- static files that never change, i.e., author pictures, some styles
├── README.md                  <- you are here
├── rollup.config.js           <- main config file
└── src                        <- where the actual site is, you probably want to look here
   ├── App.svelte              <- main entrypoint for site, don't touch this
   ├── main.js                 <- same as above
   └── pages                   <- where the actual pages are, directories here are 1-to-1 with URLs
      ├── _components          <- `_` means it's not an URL, here are reusable components
      ├── _fallback.svelte     <- fallback/404 page
      ├── _layout.svelte       <- common parts for all pages
      ├── about.svelte         <- about page
      ├── articles             <- pages here are automatically put on index as articles
      │  └── elegant-geometry  <- an individual article
      │     ├── _components    <- reusable components for the article
      │     ├── _data          <- data it uses
      │     ├── _images        <- images it uses
      │     ├── index.svx      <- the actual article
      │     └── Preview_.svelte<- what appears in the preview box in the main index
      ├── get_involved.svelte  <- get involved page
      ├── index.svelte         <- main page, i.e., `/`
      └── learn.svelte         <- learn page
```

