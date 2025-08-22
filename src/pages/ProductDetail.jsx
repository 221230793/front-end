import { useParams, Link } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();

    // Temporary product data (could come from API or context later)
    const products = [
        { id: 1, name: "Naruto Hoodie", price: 49.99, img: "/img/naruto-hoodie.png", desc: "Cozy Naruto hoodie made from premium cotton. Perfect for anime marathons." },
        { id: 2, name: "One Piece Tee", price: 24.99, img: "/img/onepiece-tee.webp", desc: "One Piece inspired T-shirt for everyday wear. Soft & durable." },
        { id: 3, name: "Attack on Titan Beanie", price: 19.99, img: "/img/aot-beanie.jpg", desc: "Keep warm while representing Survey Corps style with this beanie." },
        // You can add the rest here...
    ];

    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h2>Product not found</h2>
                <Link to="/catalog" className="btn btn-warning mt-3">Back to Catalog</Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="row g-4 align-items-center">
                {/* Product Image */}
                <div className="col-md-6 text-center">
                    <img src={product.img} alt={product.name} className="img-fluid rounded shadow" />
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h2 className="fw-bold">{product.name}</h2>
                    <h4 className="text-muted mb-3">${product.price}</h4>
                    <p>{product.desc}</p>

                    <button className="btn btn-dark btn-lg me-3">
                        <i className="bi bi-cart"></i> Add to Cart
                    </button>
                    <Link to="/catalog" className="btn btn-outline-secondary btn-lg">
                        Back to Catalog
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
