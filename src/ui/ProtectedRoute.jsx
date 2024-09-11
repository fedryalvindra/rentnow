import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser.js';
import PageSpinner from './PageSpinner.jsx';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex h-dvh items-center justify-center">
        <PageSpinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
