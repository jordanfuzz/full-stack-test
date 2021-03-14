let user = {
  username: 'K.K. Slider',
  password: 'whatsbuzzin',
}

const getUser = (req, res) => {
  res.status(200).send(user)
}

const updateUser = (req, res) => {
  user.username = req.body.newUsername
  res.status(200).send('Updated successfully!')
}

module.exports = {
  getUser,
  updateUser,
}
