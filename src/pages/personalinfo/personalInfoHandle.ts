import { NavigateFunction } from 'react-router-dom'
import { ref, set } from 'firebase/database'
import { db } from '../../../config'

const personalInfoHandlePostForm = (
  name: string,
  description: string,
  userId: string | undefined,
  navigate: NavigateFunction
) => {
  set(ref(db, `/personalInfo/${userId}`), {
    name,
    description,
  })
    .then(() => {
      console.log('data added')
      navigate('/')
    })
    .catch((error) => {
      console.log(error)
    })
}

export { personalInfoHandlePostForm }
