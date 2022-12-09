import axios from 'axios'

export type PostDescriptionType = {
  description: string | null
  uid: string
}

const postDescription = async (data: PostDescriptionType) => {
  const { description, uid } = data
  await axios
    .post(`http://localhost:8383/updateDescription`, {
      description,
      uid,
    })
    .catch((error) => {
      console.log(error)
    })
}

export { postDescription }
