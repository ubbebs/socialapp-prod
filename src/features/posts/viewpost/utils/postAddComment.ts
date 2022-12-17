import axios from 'axios'

export type PostAddCommentType = {
  authorid: string
  postid: string
  comment: string
  userid: string
  time: number
}

const postAddComment = async (data: PostAddCommentType) => {
  const { authorid, postid, comment, userid, time } = data
  await axios.post(`http://localhost:8383/addComment`, {
    authorid,
    postid,
    comment,
    userid,
    time,
  })
}

export { postAddComment }
