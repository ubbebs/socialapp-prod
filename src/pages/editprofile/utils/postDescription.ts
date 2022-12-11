import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const { SERVER_URL } = process.env

export type PostDescriptionType = {
  description: string | null
  uid: string
}

const postDescription = async (data: PostDescriptionType) => {
  const { description, uid } = data
  await axios
    .post(`${SERVER_URL}/updateDescription`, {
      description,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postDescription }
