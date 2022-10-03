const findUser = (users, id) => {

  return users.filter(user => user.id === id)[0]
}

const isUserNotFound = (request) => {
  return request.user === undefined
}

module.exports = {
  findUser,
  isUserNotFound
}
