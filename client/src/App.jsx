import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import ViewEmployee from './pages/ViewEmployee';
import Navbar from './components/Navbar';

function Layout() {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('token');
  const hideNavbarOnRoutes = ['/', '/login'];

  const hideNavbar = hideNavbarOnRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!hideNavbar && isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/view/:id" element={<ViewEmployee />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;