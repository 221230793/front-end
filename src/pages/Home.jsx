import { Link } from "react-router-dom";

function Home() {
    // Sample products (replace images with real ones in /public/img)
    const products = [
        { id: 1, name: "Naruto Hoodie", price: 49.99, img: "/img/naruto-hoodie.png" },
        { id: 2, name: "One Piece Tee", price: 24.99, img: "/img/onepiece-tee.webp" },
        { id: 3, name: "Attack on Titan Beanie", price: 19.99, img: "/img/aot-beanie.jpg" },
        { id: 4, name: "Naruto Hoodie", price: 49.99, img: "/img/naruto-hoodie.webp" },
        { id: 5, name: "One Piece Tee", price: 24.99, img: "/img/-tee.webp" },
        { id: 6, name: "Attack on Titan Beanie", price: 19.99, img: "/img/t-beanie.webp" },
        { id: 7, name: "Naruto Hoodie", price: 49.99, img: "/img/to-hoodie.webp" },
        { id: 8, name: "One Piece Tee", price: 24.99, img: "/img/nepiece-tee.jpeg" },
        { id: 9, name: "Attack on Titan Beanie", price: 19.99, img: "/img/ot-beanie.jpeg" },
        { id: 10, name: "Naruto Hoodie", price: 49.99, img: "/img/o-hoodie.jpeg" },
        { id: 11, name: "One Piece Tee", price: 24.99, img: "/img/ce-tee.webp" },
        { id: 12, name: "Attack on Titan Beanie", price: 19.99, img: "/img/-beanie.png" },
        { id: 13, name: "Naruto Hoodie", price: 49.99, img: "/img/uto-hoodie.avif" },
        { id: 14, name: "One Piece Tee", price: 24.99, img: "/img/ee.avif" },
        { id: 15, name: "Attack on Titan Beanie", price: 19.99, img: "/img/beanie.jpeg" },
        { id: 16, name: "Naruto Hoodie", price: 49.99, img: "/img/ruto.jpg" },
        { id: 17, name: "One Piece Tee", price: 24.99, img: "/img/tee.avif" },
        { id: 18, name: "Attack on Titan Beanie", price: 19.99, img: "/img/eanie.avif" },
    ];

    return (
        <div>
            {/* Hero Banner */}
            <header className="text-white text-center d-flex align-items-center justify-content-center"
                    style={{ height: "70vh", background: "linear-gradient(135deg, #4f46e5, #9333ea)" }}>
                <div>
                    <h1 className="display-3 fw-bold">Unleash Your Anime Style 👘</h1>
                    <p className="lead mt-3">Premium hoodies, tees & beanies inspired by your favorite anime.</p>
                    <Link to="/catalog" className="btn btn-warning btn-lg mt-4 shadow">
                        Shop Now <i className="bi bi-arrow-right-circle ms-2"></i>
                    </Link>
                </div>
            </header>

            {/* Best Sellers */}
            <main className="container py-5">
                <h2 className="text-center mb-5 fw-bold">🔥 Best Sellers</h2>
                <div className="row g-4">
                    {products.map((p) => (
                        <div className="col-md-6 col-lg-4" key={p.id}>
                            <div className="card shadow-lg border-0 h-100 hover-shadow">
                                {/* Clickable product image/title */}
                                <Link to={`/product/${p.id}`}>
                                    <img src={p.img} className="card-img-top" alt={p.name} />
                                </Link>
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        <Link to={`/product/${p.id}`} className="text-decoration-none text-dark">
                                            {p.name}
                                        </Link>
                                    </h5>
                                    <p className="text-muted">${p.price}</p>
                                    <button className="btn btn-dark btn-sm">
                                        <i className="bi bi-cart me-1"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* About Section */}
            <section className="py-5 text-white"
                     style={{
                         backgroundImage: "url('https://wallpaperaccess.com/full/1121731.jpg')",
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                         position: "relative"
                     }}>
                <div className="container text-center"
                     style={{ backgroundColor: "rgba(0,0,0,0.6)", borderRadius: "12px", padding: "40px" }}>
                    <h2 className="display-5 fw-bold mb-4 text-warning">✨ Why Choose AnimeWear? ✨</h2>
                    <p className="lead mb-5">
                        AnimeWear isn’t just clothing — it’s a lifestyle.
                        We combine premium fabrics with legendary anime designs so you can rep your fandom in style.
                    </p>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="p-4 bg-dark rounded h-100 shadow">
                                <i className="bi bi-star-fill text-warning display-6 mb-3"></i>
                                <h5 className="fw-bold">Premium Quality</h5>
                                <p>Soft, durable fabrics designed for all-day comfort — hoodies, tees & more.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 bg-dark rounded h-100 shadow">
                                <i className="bi bi-globe2 text-info display-6 mb-3"></i>
                                <h5 className="fw-bold">Worldwide Shipping</h5>
                                <p>No matter where you live, AnimeWear delivers straight to your door 🌍.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 bg-dark rounded h-100 shadow">
                                <i className="bi bi-heart-fill text-danger display-6 mb-3"></i>
                                <h5 className="fw-bold">For True Fans</h5>
                                <p>Every design is inspired by legendary anime — made by fans, for fans ❤️</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

