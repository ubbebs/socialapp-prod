import axios from 'axios'

type UpdateDescriptionType = {
  description: string | null
  uid: string
}

const updateDescription = async (data: UpdateDescriptionType) => {
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

export { updateDescription }
