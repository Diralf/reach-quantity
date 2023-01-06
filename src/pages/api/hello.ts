// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { HttpStatus } from '../../constants/http-status';

interface Data {
  name: string
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): void => {
  res.status(HttpStatus.OK)
    .json({ name: 'John Doe' });
};

export default handler;
