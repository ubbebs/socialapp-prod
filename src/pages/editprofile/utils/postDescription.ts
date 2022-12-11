import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostDescriptionType = {
  description: string | null
  uid: string
}

const postDescription = async (data: PostDescriptionType) => {
  const { description, uid } = data
  await axios
    .post(`${VITE_SERVER_URL}/updateDescription`, {
      description,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postDescription }
