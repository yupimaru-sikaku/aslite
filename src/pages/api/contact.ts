import { NextApiResponse, NextApiRequest } from 'next';
import { isContact } from 'src/utils/TypeGuardUtils';

const contact = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse<any>> => {
  const X_MICROCMS_API_KEY = process.env.X_MICROCMS_API_KEY;
  const MICROCMS_URL = process.env.MICROCMS_URL;

  if (!isContact(req.body) || typeof X_MICROCMS_API_KEY === 'undefined') {
    return res.status(404).end();
  }

  const content = await fetch(`${MICROCMS_URL}/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': X_MICROCMS_API_KEY,
    },
    body: JSON.stringify(req.body),
  })
    .then(() => 'Created')
    .catch(() => null);
  console.log(content);
  // CMS側で正しく作成されたかチェック
  if (content !== 'Created') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.status(200).json({ message: 'OK' });

  res.end('Contact enabled');
};

export default contact;
