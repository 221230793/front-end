function Cart() {
    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4 text-center">🛒 Your Shopping Cart</h2>
            <p className="text-center text-muted">Review your items before checkout.</p>
            <div className="alert alert-warning text-center mt-4">
                Your cart is empty 😢
            </div>
        </div>
    );
}

export default Cart;
