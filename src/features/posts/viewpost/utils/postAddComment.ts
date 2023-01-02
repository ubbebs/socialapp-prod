import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostAddCommentType = {
  authorid: string
  postid: string
  comment: string
  userid: string
  time: number
}

export const postAddComment = async ({
  authorid,
  postid,
  comment,
  userid,
  time,
}: PostAddCommentType) => {
  await axios.post(`${VITE_SERVER_URL}/addComment`, {
    authorid,
    postid,
    comment,
    userid,
    time,
  })
}
