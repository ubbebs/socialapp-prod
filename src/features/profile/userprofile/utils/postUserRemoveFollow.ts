import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

type PostUserRemoveFollowType = {
  userid: string
  myid: string
}

const postUserRemoveFollow = async (data: PostUserRemoveFollowType) => {
  const { userid, myid } = data
  await axios.post(`${VITE_SERVER_URL}/removeFollow`, {
    userid,
    myid,
  })
}

export { postUserRemoveFollow }
