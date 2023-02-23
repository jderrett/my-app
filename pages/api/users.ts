// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserInfo } from 'os'

export interface UserProps {
  id: number
  firstName: string
  lastName: string
}

type Data = {
  users: UserProps[]
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users: UserProps[] = [
    { id: 1, firstName: 'Jawson', lastName: 'A'},
    { id: 2, firstName: 'Pat', lastName: 'B'},
    { id: 3, firstName: 'Terry', lastName: 'C' }
  ]
  res.status(200).json({users: users})
}
