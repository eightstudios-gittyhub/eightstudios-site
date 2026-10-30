 import CollectionPage from "../components/CollectionPage";
 import { getProductsForCollection } from "../../lib/products";

 export default function ProductsPage() {
   return (
     <CollectionPage
       title="Products"
       description="Explore handcrafted pieces from Eight Studios."
       products={[
         ...getProductsForCollection("beanies"),
         ...getProductsForCollection("phone-cases"),
         ...getProductsForCollection("hoodies"),
         ...getProductsForCollection("jeans"),
         ...getProductsForCollection("shorts"),
       ]}
       emptyMessage="Select a category to view available drops."
     />
   );
 }
