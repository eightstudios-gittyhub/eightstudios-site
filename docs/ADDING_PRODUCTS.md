# Adding a product

Standard products live in [`lib/products.js`](../lib/products.js). Collection
pages and product detail routes are generated from those records.

## Add a standard product

1. Add an object to the `products` array in `lib/products.js`.
2. Set `slug` to a unique, lowercase URL-friendly value. It becomes part of the
   product URL.
3. Set `collection` to one of `beanies`, `phone-cases`, `hoodies`, `jeans`,
   `pants`, `shorts`, or `hats`.
4. Add a `title`, `price`, and `images` array. The first image is used on the
   collection card.
5. Add a `description`, `size` (when applicable), and either `stripe` or
   `stripeLink` when the product is ready to purchase.

Example:

```js
{
  slug: "sample-cap",
  collection: "hats",
  title: "Sample Cap",
  subtitle: "One of one",
  size: "One Size",
  price: "$40",
  description: "A short product description.",
  images: ["/products/sample-cap-front.jpg"],
  stripeLink: "https://buy.stripe.com/your-checkout-link",
}
```

Put local product images in `public/products/` and use paths beginning with
`/products/`. External image URLs also work.

The detail page URL is generated as
`/products/<collection>/<slug>`. No route file is needed for standard products.
The existing long beanie and heavyweight zip-up pages have custom option
controls, so their routes remain bespoke; for a product that needs custom
controls, its catalog record should set `detailRoute: true` and a matching
product page should be created by copying the closest existing custom page.

After adding a product, run `npm run build` to confirm that its route and data
are valid.

The project requires Node.js 20.9.0 or newer.
