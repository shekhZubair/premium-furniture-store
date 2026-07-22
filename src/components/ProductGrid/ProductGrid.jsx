import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

function ProductGrid() {
    return (
        <section className="product-grid-section">

            <div className="section-heading">

                <p>Featured Collection</p>

                <h2>
                    Discover Premium Furniture
                </h2>

            </div>

            <div className="product-grid">

                {products.map((product) => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>
    );
}

export default ProductGrid;