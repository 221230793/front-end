function Checkout() {
    return (
        <div className="container py-5" style={{ maxWidth: "700px" }}>
            <h2 className="fw-bold mb-4 text-center">🛒 Checkout</h2>

            {/* Shipping Info */}
            <h5 className="fw-bold mt-4">Shipping Address</h5>
            <form>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" placeholder="John" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" placeholder="Doe" />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="123 Anime Street" />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" placeholder="Tokyo" />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label className="form-label">Postal Code</label>
                        <input type="text" className="form-control" placeholder="100-0001" />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label className="form-label">Country</label>
                        <input type="text" className="form-control" placeholder="Japan" />
                    </div>
                </div>

                {/* Payment Info */}
                <h5 className="fw-bold mt-4">Payment Details</h5>
                <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Expiry Date</label>
                        <input type="text" className="form-control" placeholder="MM/YY" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">CVC</label>
                        <input type="text" className="form-control" placeholder="123" />
                    </div>
                </div>

                {/* Place Order */}
                <div className="d-grid mt-4">
                    <a href="/success" className="btn btn-warning btn-lg">
                        Place Order <i className="bi bi-check-circle ms-2"></i>
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Checkout;
