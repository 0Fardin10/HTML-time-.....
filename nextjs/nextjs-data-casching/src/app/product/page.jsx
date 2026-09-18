import react from "react";
import ProductsCard from "../components/ProductsCard";
const GetProducts = async () => {
    const res = await fetch("http://localhost:500/products",{cache:"force-cache"});
    return res.json();
}
const ProductsPages = async () => {
    const products = await GetProducts();
    return (
        <>  <div>
            <h2>Product page {products.length}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <ProductsCard key={product.id} product={product} />
            ))
            }
        </div>
        </>
    );
};
export default ProductsPages;