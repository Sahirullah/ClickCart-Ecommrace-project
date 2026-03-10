import { useState } from 'react';
import '../styles/AdminDashboard.css';
import ProductForm from '../components/admin/ProductForm';
import ProductList from '../components/admin/ProductList';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...product, id: editingProduct.id } : p));
      setEditingProduct(null);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>Admin Panel</h2>
        </div>
        <nav className="admin-nav">
          <button 
            className={`admin-nav-link ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            📦 Products
          </button>
          <button 
            className={`admin-nav-link ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📊 Analytics
          </button>
          <button 
            className={`admin-nav-link ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Settings
          </button>
        </nav>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <h1>Dashboard</h1>
          <div className="admin-user">
            <span>Admin User</span>
            <button className="logout-btn">Logout</button>
          </div>
        </div>

        {activeTab === 'products' && (
          <div className="admin-section">
            <div className="section-header">
              <h2>Product Management</h2>
              <button 
                className="btn-add-product"
                onClick={() => setEditingProduct(null)}
              >
                + Add New Product
              </button>
            </div>
            <div className="admin-grid">
              <ProductForm 
                onSubmit={handleAddProduct}
                initialData={editingProduct}
              />
              <ProductList 
                products={products}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="admin-section">
            <h2>Analytics</h2>
            <div className="analytics-grid">
              <div className="stat-card">
                <h3>Total Products</h3>
                <p className="stat-value">{products.length}</p>
              </div>
              <div className="stat-card">
                <h3>Total Sales</h3>
                <p className="stat-value">$0</p>
              </div>
              <div className="stat-card">
                <h3>Total Orders</h3>
                <p className="stat-value">0</p>
              </div>
              <div className="stat-card">
                <h3>Active Users</h3>
                <p className="stat-value">0</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="admin-section">
            <h2>Settings</h2>
            <div className="settings-form">
              <div className="form-group">
                <label>Store Name</label>
                <input type="text" placeholder="Click Cart" />
              </div>
              <div className="form-group">
                <label>Store Email</label>
                <input type="email" placeholder="admin@clickcart.com" />
              </div>
              <button className="btn-save">Save Settings</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
