import axios from 'axios'

const { VITE_SERVER_URL } = import.meta.env

export type PostDescriptionType = {
  description: string | null
  uid: string
}

export const postDescription = async ({
  description,
  uid,
}: PostDescriptionType) => {
  await axios.post(`${VITE_SERVER_URL}/updateDescription`, {
    description,
    uid,
  })
}
