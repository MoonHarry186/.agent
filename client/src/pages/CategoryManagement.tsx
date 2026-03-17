import React, { useEffect, useState } from 'react';
import { categoryApi } from '../../apis/category';
import { Plus, Pencil, Trash2, X } from 'lucide-react';

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const { data } = await categoryApi.getAll();
      setCategories(data.data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      if (editingCategory) {
        await categoryApi.update(editingCategory._id, formData);
      } else {
        await categoryApi.create(formData);
      }
      setShowModal(false);
      setFormData({ name: '', description: '' });
      setEditingCategory(null);
      fetchCategories();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    try {
      await categoryApi.delete(id);
      fetchCategories();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Cannot delete category');
    }
  };

  const openEdit = (cat: any) => {
    setEditingCategory(cat);
    setFormData({ name: cat.name, description: cat.description || '' });
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-slate-500 text-sm">Organize your products into groups.</p>
        </div>
        <button 
          onClick={() => { setShowModal(true); setEditingCategory(null); setFormData({ name: '', description: '' }); }}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      <div className="card">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-600">Name</th>
              <th className="px-6 py-4 font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan={2} className="px-6 py-8 text-center text-slate-400">Loading...</td></tr>
            ) : categories.length === 0 ? (
              <tr><td colSpan={2} className="px-6 py-8 text-center text-slate-400">No categories found.</td></tr>
            ) : categories.map((cat) => (
              <tr key={cat._id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-900">{cat.name}</div>
                  <div className="text-sm text-slate-500">{cat.description}</div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 isolate opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => openEdit(cat)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Pencil size={18} />
                    </button>
                    <button onClick={() => handleDelete(cat._id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="card w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold">{editingCategory ? 'Edit Category' : 'New Category'}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">{error}</div>}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-700">Category Name</label>
                <input 
                  type="text" 
                  autoFocus
                  required
                  placeholder="e.g. Smartphones"
                  className="input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-slate-700">Description</label>
                <textarea 
                  rows={3}
                  placeholder="Description (optional)"
                  className="input resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="mt-4 flex gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="btn bg-slate-100 text-slate-600 flex-1 hover:bg-slate-200">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary flex-1">
                  {editingCategory ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
