import React from 'react';
import { useNavigate } from 'react-router-dom';
import Unauthenticated from '../../components/auth/Unauthenticated';
import { useAuth } from '../../hooks/useAuth';

export default function NonAuthRequired({ children }) {
  const user = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return children;
  }

  navigate('/dashboard/app');
  return null;
}
