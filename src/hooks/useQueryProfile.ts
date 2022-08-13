import { useQuery } from 'react-query';
import { supabase } from '../utils/supabase';
import useStore from '../store';
import { Profile } from 'src/types';
import { useMutateProfile } from 'src/hooks/useMutateProfile';

export const useQueryProfile = () => {
  const session = useStore((state) => state.session);
  const editedProfile = useStore((state) => state.editedProfile);
  const update = useStore((state) => state.updateEditedProfile);
  const { createProfileMutation } = useMutateProfile();
  const getProfile = async () => {
    const { data, error, status } = await supabase
      .from('profile')
      .select('*')
      .eq('id', session?.user?.id)
      .single();
    if (error && status === 406) {
      createProfileMutation.mutate({
        id: session?.user?.id,
        username: session?.user?.email,
        avatar_url: '',
      });
      update({
        ...editedProfile,
        username: session?.user?.email,
      });
    }
    if (error && status !== 406) {
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery<Profile, Error>({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
    onSuccess: (data) => {
      if (data) {
        update({
          username: data.username,
          avatar_url: data.avatar_url,
        });
      }
    },
  });
};
