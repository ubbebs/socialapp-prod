import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

type PostUserRemoveFollowType = {
  userid: string
  myid: string
}

export const postUserRemoveFollow = async ({
  userid,
  myid,
}: PostUserRemoveFollowType) => {
  await axios.post(`${VITE_SERVER_URL}/removeFollow`, {
    userid,
    myid,
  })
}
