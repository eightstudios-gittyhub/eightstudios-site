import CollectionPage from "../components/CollectionPage";
import { collections, getProductsForCollection } from "../../lib/products";

export default function CollectionLanding({ slug }) {
  const collection = collections[slug];

  return (
    <CollectionPage
      {...collection}
      products={getProductsForCollection(slug)}
    />
  );
}
