import { useState, useEffect } from 'react';
import { supabase } from 'src/utils/supabase';

export const useDownloadUrl = (
  filePath: string | undefined,
  key: 'avatar' | 'product'
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullUrl, setFullUrl] = useState('');
  const bucketName = key;

  useEffect(() => {
    if (filePath) {
      const download = async () => {
        setIsLoading(true);
        const { data, error } = await supabase.storage
          .from('product')
          .download(filePath);
        if (error) {
          setIsLoading(false);
          throw error;
        }
        setFullUrl(URL.createObjectURL(data!));
        setIsLoading(false);
      };
      download();
    }
  }, [filePath, bucketName]);

  return { isLoading, fullUrl, setFullUrl };
};
