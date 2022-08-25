import { useState, useEffect } from 'react';
import { supabase } from 'src/utils/supabase';

export const useDownloadUrl = (
  filePathList: string,
  key: 'avatar' | 'product'
) => {
  const [fullUrlList, setFullUrlList] = useState<string[]>([]);
  const bucketName = key;
  let filePathListString = filePathList.replace('[', '');
  filePathListString = filePathListString.replace(']', '');
  const filePathListStringArr = filePathListString.split(',');

  useEffect(() => {
    if (filePathListStringArr) {
      const download = async () => {
        const filePathListArr = await Promise.all(
          filePathListStringArr.map(async (filePath) => {
            const filePathData = filePath.replace(/"/g, '');
            const { data, error } = await supabase.storage
              .from('product')
              .download(filePathData);
            if (error) {
              throw error;
            }
            return URL.createObjectURL(data!);
          })
        );
        setFullUrlList(await Promise.all(filePathListArr));
      };
      download();
    }
  }, []);

  return { fullUrlList, setFullUrlList };
};
