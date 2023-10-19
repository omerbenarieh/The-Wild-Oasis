import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { updateBooking } from '../../services/apiBookings.js';
import toast from 'react-hot-toast';

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checking, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: data => {
      toast.success(`Booking #${data.id} successfuly checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },

    onError: () => toast.error('There was an error while checking in'),
  });

  return { checking, isCheckingIn };
}
