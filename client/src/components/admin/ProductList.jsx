import '../../styles/ProductList.css';

export default function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="product-list-container">
      <h3>Products ({products.length})</h3>
      {products.length === 0 ? (
        <div className="empty-state">
          <p>No products added yet. Create your first product!</p>
        </div>
      ) : (
        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Original Price</th>
                <th>Colors</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.imageUrl} alt={product.name} className="product-thumb" />
                  </td>
                  <td>{product.name}</td>
                  <td>${parseFloat(product.price).toFixed(2)}</td>
                  <td>{product.originalPrice ? `$${parseFloat(product.originalPrice).toFixed(2)}` : '-'}</td>
                  <td>{product.colors || '-'}</td>
                  <td>
                    <button 
                      className="btn-edit"
                      onClick={() => onEdit(product)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn-delete"
                      onClick={() => {
                        if (confirm('Are you sure?')) {
                          onDelete(product.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
