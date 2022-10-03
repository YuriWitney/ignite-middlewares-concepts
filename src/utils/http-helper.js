const notFoundUser = (response) => {
  return response
    .status(404)
    .json({ error: 'Usuário não encontrado!' })
}

module.exports = {
  notFoundUser
}