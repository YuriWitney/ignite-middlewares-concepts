const notFoundUser = (response) => {
  return response
    .status(404)
    .json({ error: 'Usuário não encontrado!' })
}

const notFoundTodo = (response) => {
  return response
    .status(404)
    .json({ error: 'Todo não encontrado!' })
}

const limitedPlan = (response) => {
  return response
    .status(403)
    .json({ error: 'Plano do usuário não permite mais todos' })
}

const invalidId = (response) => {
  return response
    .status(400)
    .json({ error: 'Id não é do tipo UUID!' })
}

module.exports = {
  notFoundUser,
  notFoundTodo,
  invalidId,
  limitedPlan
}