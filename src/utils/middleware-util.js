const findUser = (users, id) => {

  return users.filter(user => user.id === id)[0]
}

const findUserByUsername = (users, username) => {

  return users.filter(user => user.username === username)[0]
}

const isUserNotFound = (user) => {
  return user === undefined
}

const isUserAPro = (user) => {
  return user.pro
}

const isUserTodosListLessThanTen = (user) => {
  return user.todos.length < 10
}

const isUserTodoListAvailable = (user) => {
  return (!isUserAPro(user) && isUserTodosListLessThanTen(user)) || isUserAPro(user)
}

module.exports = {
  findUser,
  findUserByUsername,
  isUserTodoListAvailable,
  isUserNotFound
}
