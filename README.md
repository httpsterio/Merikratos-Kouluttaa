# Eleventy site

An Eleventy site for product and order information.

## Running

1. Clone this repository and enter the directory.
2. Run <kbd>npm install</kbd>.
3. Run <kbd>npm start</kbd>.

## Building

Run <kbd>npm run build</kbd>. This will build in `production` mode and delete any existing output. The result will be placed under `_site/`.

## Authoring

### Product pages

These are found under `src/products/`. The file stem (e.g. `product-a` if the path is `src/products/product-a.md`) is used as the ID of the product. Any Eleventy-compatible templates can be used. The front matter should specify the name of the product as the `title` and *either* `embedHtml` (arbitrary HTML to be embedded) *or* `targetUrl` (a URL to link to). The content of the page will be displayed on the product page (e.g. `/products/product-a/`).

## Customer/order pages

These are found under `src/customers/`. The file stem (see above), which must be numeric, is used as the order ID. This is passed through [the hashids package](https://www.npmjs.com/package/hashids). A fixed salt is specified in `customerPermalinkSalt` in [`src/_data/metadata.json`](./src/_data/metadata.json). Changing this will change *all* order permalinks. The front matter must specify an `expires` value, which will be parsed and used as the cutoff for expiring the order. (This expiration process occurs when the site is built.)
