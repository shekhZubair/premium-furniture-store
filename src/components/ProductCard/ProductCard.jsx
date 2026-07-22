import "./ProductCard.css";

function ProductCard({ product }) {

    return (

        <article className="product-card">

            <div className="product-image">

                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />

            </div>

            <div className="product-info">

                <span>{product.category}</span>

                <h3>{product.name}</h3>

                <p className="price">
                    ${product.price}
                </p>

                <button>
                    View Details
                </button>

            </div>

        </article>

    );

}

export default ProductCard;