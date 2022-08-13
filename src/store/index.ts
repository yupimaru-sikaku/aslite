import create from 'zustand';
import { Session } from '@supabase/supabase-js';
import { EditedProduct, EditedProfile } from 'src/types/index';

type State = {
  session: Session | null;
  setSession: (payload: Session | null) => void;
  editedProfile: EditedProfile;
  updateEditedProfile: (payload: EditedProfile) => void;
  resetEditedProfile: () => void;
  editedProduct: EditedProduct;
  updateEditedProduct: (payload: EditedProduct) => void;
  resetEditedProduct: () => void;
  //   editedPost: EditedPost;
  //   updateEditedPost: (payload: EditedPost) => void;
  //   resetEditedPost: () => void;
};
const useStore = create<State>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  editedProfile: { username: '', avatar_url: '' },
  updateEditedProfile: (payload) =>
    set({
      editedProfile: {
        username: payload.username,
        avatar_url: payload.avatar_url,
      },
    }),
  resetEditedProfile: () =>
    set({ editedProfile: { username: '', avatar_url: '' } }),
  editedProduct: {
    id: '',
    identification_number: '',
    product_name: '',
    description: '',
    genre: '',
    image_url: '',
  },
  updateEditedProduct: (payload) =>
    set({
      editedProduct: {
        id: payload.id,
        identification_number: payload.identification_number,
        product_name: payload.product_name,
        description: payload.description,
        genre: payload.genre,
        image_url: payload.image_url,
      },
    }),
  resetEditedProduct: () =>
    set({
      editedProduct: {
        id: '',
        identification_number: '',
        product_name: '',
        description: '',
        genre: '',
        image_url: '',
      },
    }),
}));

export default useStore;
