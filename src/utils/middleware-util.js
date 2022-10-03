const findUser = (users, id) => {

  return users.filter(user => user.id === id)[0]
}

const findUserByUsername = (users, username) => {

  return users.filter(user => user.username === username)[0]
}

const isUserNotFound = (request) => {
  return request.user === undefined
}

module.exports = {
  findUser,
  findUserByUsername,
  isUserNotFound
}
