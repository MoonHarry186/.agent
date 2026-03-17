import React, { useEffect, useState } from 'react';
import { productApi } from '../../apis/product';
import { categoryApi } from '../../apis/category';
import { Plus, Pencil, Trash2, X, Package } from 'lucide-react';

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', price: '', stock: '', categoryId: '' });
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [prodRes, catRes] = await Promise.all([
        productApi.getAll(),
        categoryApi.getAll()
      ]);
      setProducts(prodRes.data.data);
      setCategories(catRes.data.data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const payload = {
        name: formData.name,
        price: Number(formData.price),
        stock: Number(formData.stock),
        categoryId: formData.categoryId
      };

      if (editingProduct) {
        await productApi.update(editingProduct._id, payload);
      } else {
        await productApi.create(payload);
      }
      setShowModal(false);
      resetForm();
      fetchData();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', price: '', stock: '', categoryId: '' });
    setEditingProduct(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await productApi.delete(id);
      fetchData();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Cannot delete product');
    }
  };

  const openEdit = (prod: any) => {
    setEditingProduct(prod);
    setFormData({ 
      name: prod.name, 
      price: prod.price.toString(), 
      stock: prod.stock.toString(), 
      categoryId: prod.categoryId?._id || '' 
    });
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-slate-500 text-sm">Manage your inventory and pricing.</p>
        </div>
        <button 
          onClick={() => { setShowModal(true); resetForm(); }}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-12 text-center text-slate-400">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="col-span-full py-12 text-center text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
            <Package size={48} className="mx-auto mb-4 opacity-20" />
            No products found. Start adding some!
          </div>
        ) : products.map((prod) => (
          <div key={prod._id} className="card group">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded tracking-wider">
                  {prod.categoryId?.name || 'Uncategorized'}
                </span>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openEdit(prod)} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => handleDelete(prod._id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 line-clamp-1">{prod.name}</h3>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Price</div>
                  <div className="text-xl font-bold text-blue-600">${prod.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-medium">Stock</div>
                  <div className={`text-sm font-semibold ${prod.stock < 10 ? 'text-orange-500' : 'text-slate-600'}`}>
                    {prod.stock} units
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="card w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold">{editingProduct ? 'Edit Product' : 'New Product'}</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">{error}</div>}
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-700">Product Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. iPhone 15 Pro"
                  className="input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-slate-700">Price ($)</label>
                  <input 
                    type="number" 
                    required
                    min="0.01"
                    step="0.01"
                    className="input"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-slate-700">Stock</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    className="input"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-700">Category</label>
                <select 
                  required
                  className="input appearance-none bg-white"
                  value={formData.categoryId}
                  onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="mt-4 flex gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="btn bg-slate-100 text-slate-600 flex-1 hover:bg-slate-200">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary flex-1">
                  {editingProduct ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
