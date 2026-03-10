import { useState } from 'react';
import '../../styles/ProductForm.css';

export default function ProductForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    price: '',
    originalPrice: '',
    colors: '',
    image: null,
    imageUrl: '',
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formDataToSend = new FormData();
    formDataToSend.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success) {
        setFormData(prev => ({
          ...prev,
          imageUrl: data.url,
          image: file.name,
        }));
        setUploadProgress(100);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.imageUrl) {
      alert('Please fill all required fields');
      return;
    }
    onSubmit(formData);
    setFormData({
      name: '',
      price: '',
      originalPrice: '',
      colors: '',
      image: null,
      imageUrl: '',
    });
  };

  return (
    <div className="product-form-container">
      <h3>{initialData ? 'Edit Product' : 'Add New Product'}</h3>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="0.00"
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <label>Original Price</label>
            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleInputChange}
              placeholder="0.00"
              step="0.01"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Available Colors</label>
          <input
            type="text"
            name="colors"
            value={formData.colors}
            onChange={handleInputChange}
            placeholder="e.g., Red, Blue, Black"
          />
        </div>

        <div className="form-group">
          <label>Product Image *</label>
          <div className="image-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              id="image-input"
            />
            <label htmlFor="image-input" className="upload-label">
              {uploading ? `Uploading... ${uploadProgress}%` : 'Click to upload image'}
            </label>
          </div>
          {formData.imageUrl && (
            <div className="image-preview">
              <img src={formData.imageUrl} alt="Preview" />
              <p>{formData.image}</p>
            </div>
          )}
        </div>

        <button type="submit" className="btn-submit" disabled={uploading}>
          {initialData ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}
