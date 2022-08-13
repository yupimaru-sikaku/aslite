// import { ChangeEvent } from 'react'
// import { supabase } from 'utils/supabase'

// export const useUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files || e.target.files.length === 0) {
//       throw new Error('Please select the image file')
//     }
//     const file = e.target.files[0]
//     const fileExt = file.name.split('.').pop()
//     const fileName = `${Math.random()}.${fileExt}`
//     const filePath = `${fileName}`
//     const { error } = await supabase.storage
//       .from('avatars')
//       .upload(filePath, file)
//     if (error) throw new Error(error.message)
//   },
//     {
//       onError: (err: any) => {
//         alert(err.message)
//       },
//     }
// }
