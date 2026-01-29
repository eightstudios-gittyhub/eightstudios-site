 import CollectionPage from "../components/CollectionPage";

export default function ProductsPage() {
  return (
    <CollectionPage
      title="Products"
      description="Explore handcrafted pieces from Eight Studios."
      products={[]}
      emptyMessage="Select a category to view available drops."
    />
  );
 }
