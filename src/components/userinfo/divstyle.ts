import { User } from 'firebase/auth'

const divStyle = (data: User) => {
  return {
    backgroundImage: `url(${
      data.photoURL
        ? data.photoURL
        : 'https://firebasestorage.googleapis.com/v0/b/socialapp-c3f3f.appspot.com/o/avatar%2Fdefault.png?alt=media'
    })`,
  }
}

export { divStyle }
