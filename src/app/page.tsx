/*eslint-disable*/
// Importing necessary components and types
import ListA from "./components/ListA";
import ListB from "./components/ListB";
import { Product } from "./types";
import { getProduct, listProduct } from "./utils/fetchPokemon";

// Home component
export default async function Home() {
    try {
        // Fetching a single product by id
        const productByid: Product = await getProduct(1);
        // Fetching a list of products
        const productList: Product[] = await listProduct(10);

        // Rendering the components with fetched data and customization props
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
                <h1 className="text-3xl font-bold mb-6">Customizable Lists</h1>
                
                {/* Rendering ListA component with product list data */}
                <ListA
                    data={productList}
                    fontFamily="Inter"
                    headerSize="2xl"
                    paragraphSize="xs"
                    backgroundColor="#ffffff"
                    fontColor="#333333"
                    fontGray="gray-500"
                />
                
                {/* Rendering ListB component with single product data */}
                <div className="pt-4 w-full">
                    {productByid && (
                        <ListB
                            item={productByid}
                            fontFamily="Inter"
                            headerSize="xl"
                            paragraphSize="md"
                            backgroundColor="#f0f0f0"
                            fontColor="#666666"
                        />
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error occurred while fetching data. Please try again later.</div>;
    }
}
