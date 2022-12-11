import dotenv from 'dotenv'

dotenv.config()

const { FIREBASE_CONFIG_PROJECTID } = process.env

const divStyle = (data: string | null) => {
  return {
    backgroundImage: `url(${
      data ||
      `https://firebasestorage.googleapis.com/v0/b/${FIREBASE_CONFIG_PROJECTID}.appspot.com/o/avatar%2Fdefault.png?alt=media`
    })`,
  }
}

export { divStyle }
