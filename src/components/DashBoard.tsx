import { FC, Suspense } from 'react';
import { useQueryClient } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { LogoutIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { supabase } from 'src/utils/supabase';
import useStore from 'src/store';
import { Spinner } from 'src/components/Spinner';
import { UserProfile } from 'src/components/UserProfile';

export const DashBoard: FC = () => {
  const queryClient = useQueryClient();
  const resetProfile = useStore((state) => state.resetEditedProfile);
  const signOut = () => {
    resetProfile();
    supabase.auth.signOut();
    queryClient.removeQueries(['profile']);
    queryClient.removeQueries(['notices']);
    queryClient.removeQueries(['posts']);
  };
  return (
    <>
      <LogoutIcon
        data-testid="logout"
        className="my-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <ErrorBoundary
            fallback={
              <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
            }
          >
            <Suspense fallback={<Spinner />}>
              <UserProfile />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};
