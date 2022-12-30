import axios from 'axios'

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
  await axios.post(`http://localhost:8383/addComment`, {
    authorid,
    postid,
    comment,
    userid,
    time,
  })
}
