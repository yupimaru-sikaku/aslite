import { showNotification } from '@mantine/notifications';
import { supabase } from 'src/utils/supabase';
import { ActionIcon, CheckIcon } from '@mantine/core';

export const useDeleteProduct = async (id: string) => {
  const is_ok = confirm('本当に削除しますか？');
  if (is_ok) {
    try {
      const { error } = await supabase.from('product').delete().eq('id', id);
      if (error) throw new Error(error.message);
    } catch {}
    window.location.reload();
    showNotification({
      title: '削除しました',
      message: '',
      icon: (
        <ActionIcon size="xs">
          <CheckIcon />
        </ActionIcon>
      ),
    });
  }
  return;
};
