import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostUserFollowType = {
  userid: string
  myid: string
}

export const postUserAddFollow = async ({
  userid,
  myid,
}: PostUserFollowType) => {
  await axios.post(`${VITE_SERVER_URL}/addFollow`, {
    userid,
    myid,
  })
}
