import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout as logoutApi } from '../../services/apiAuth.js';

export function useLogout() {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClinet.removeQueries();
      navigate('/login', { replace: true });
    },
  });

  return { logout, isLoading };
}
