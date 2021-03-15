const cat = {
  name: 'Arthas',
  color: 'white',
  age: 13,
  likes: ['Meowmix', 'purging the unclean'],
}

const getCat = (req, res) => {
  res.status(200).send(cat)
}

module.exports = {
  getCat,
}
