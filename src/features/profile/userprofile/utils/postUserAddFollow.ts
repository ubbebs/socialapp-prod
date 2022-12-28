import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostUserFollowType = {
  userid: string
  myid: string
}

const postUserAddFollow = async (data: PostUserFollowType) => {
  const { userid, myid } = data
  await axios
    .post(`${VITE_SERVER_URL}/addFollow`, {
      userid,
      myid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postUserAddFollow }
