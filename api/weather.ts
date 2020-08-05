import axios from 'axios'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
  const { zip } = req.query
  const response = await axios.get(
    `${process.env.API_HOST}/weather?zip=${zip}&appid=${process.env.API_KEY}`
  )
  res.json(response.data)
}
