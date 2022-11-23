const divStyle = (data: string | null) => {
  return {
    backgroundImage: `url(${
      data ||
      'https://firebasestorage.googleapis.com/v0/b/socialapp-c3f3f.appspot.com/o/avatar%2Fdefault.png?alt=media'
    })`,
  }
}

export { divStyle }
