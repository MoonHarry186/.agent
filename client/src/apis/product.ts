import api from './index';

export const productApi = {
  getAll: () => api.get('/products'),
  getByCategory: (categoryId: string) => api.get(`/products/category/${categoryId}`),
  create: (data: { name: string; price: number; stock: number; categoryId: string }) => api.post('/products', data),
  update: (id: string, data: { name: string; price: number; stock: number; categoryId: string }) => api.put(`/products/${id}`, data),
  delete: (id: string) => api.delete(`/products/${id}`),
};
