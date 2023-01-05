import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';

export default function CaptainRequired({ children }) {
  const navigate = useNavigate();
  const user = useAuth();
  const profile = useProfile(user?.uid);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  useEffect(() => {
    console.log({ profile });

    if (profile?.accountRole !== 'Captain') {
      navigate('/dashboard/app', { replace: true });
    }
  }, [profile]);

  return <>{children}</>;
}
