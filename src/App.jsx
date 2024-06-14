import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import ProtectedRoute from './components/ProtectedRoute';
import OrdersTab from "./components/OrdersTab";

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center w-screen h-screen">
        <Routes>
          {/* Login route */}
          <Route path="/" element={<Login />} />

          {/* Protected route */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <OrdersTab />
              </ProtectedRoute>
            }
          />

          {/* Not found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
