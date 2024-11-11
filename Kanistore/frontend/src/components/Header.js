import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [setMenuDisplay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(setUserDetails(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      const response = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        dispatch(setUserDetails(null));
        setMenuDisplay(false);

        // Refresh the page and navigate to login
        window.location.reload();  // Refreshes the page
        navigate('/login');        // Redirects to login page
      } else {
        toast.error(data.message || 'Logout failed');
      }
    } catch (error) {
      toast.error('Error logging out. Please try again.');
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="text-lg font-bold text-gray-700">CCE Department</div>

        <div className="ml-auto flex items-center gap-7">
          {user?._id ? (
            <button
              onClick={handleLogout}
              className="px-5 py-3 bg-black text-white text-center rounded-[20%] hover:bg-gray-800 transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-5 py-3 bg-black text-white text-center rounded-[20%] hover:bg-gray-800 transition-colors duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
