import AppLayout from '../layouts/AppLayout';
import CategoryManagement from '../pages/CategoryManagement';
import ProductManagement from '../pages/ProductManagement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <div className="card p-8">
            <h1 className="text-3xl font-bold text-slate-800">Welcome to MiniStore Admin</h1>
            <p className="mt-4 text-slate-600">Manage your categories and products efficiently.</p>
          </div>
        ),
      },
      {
        path: 'categories',
        element: <CategoryManagement />,
      },
      {
        path: 'products',
        element: <ProductManagement />,
      },
    ],
  },
]);

export default router;
