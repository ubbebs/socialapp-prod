const { VITE_FIREBASE_CONFIG_PROJECTID } = import.meta.env

const divStyle = (data: string | null) => {
  return {
    backgroundImage: `url(${
      data ||
      `https://firebasestorage.googleapis.com/v0/b/${VITE_FIREBASE_CONFIG_PROJECTID}.appspot.com/o/avatar%2Fdefault.png?alt=media`
    })`,
  }
}

export { divStyle }
