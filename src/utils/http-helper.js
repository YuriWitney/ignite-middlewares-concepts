const notFoundUser = (response) => {
  return response
    .status(404)
    .json({ error: 'Usuário não encontrado!' })
}

const limitedPlan = (response) => {
  return response
    .status(403)
    .json({ error: 'Plano do usuário não permite mais todos' })
}

module.exports = {
  notFoundUser,
  limitedPlan
}