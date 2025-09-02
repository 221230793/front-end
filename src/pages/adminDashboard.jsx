import { Link } from "react-router-dom";

function AdminDashboard() {
    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">📊 Admin Dashboard</h2>

            {/* Overview Cards */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <h5>Total Sales</h5>
                            <p className="fw-bold text-success">R 12,450</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <h5>Orders</h5>
                            <p className="fw-bold">245</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <h5>Customers</h5>
                            <p className="fw-bold">89</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                            <h5>Revenue</h5>
                            <p className="fw-bold text-primary">R 48,000</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="list-group">
                <Link to="/admin/products" className="list-group-item list-group-item-action">
                    📦 Manage Products
                </Link>
                <Link to="/admin/orders" className="list-group-item list-group-item-action">
                    🧾 View Orders
                </Link>
                <Link to="/admin/customers" className="list-group-item list-group-item-action">
                    👥 Manage Customers
                </Link>
            </div>
        </div>
    );
}

export default AdminDashboard;
