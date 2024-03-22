const validateFieldTitle = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: "O campo 'title' é obrigatório" });
  }
  if (body.title === "") {
    return res
      .status(400)
      .json({ message: "O campo 'title' não pode ser vazio" });
  }

  next();
};

const validateFieldStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: "O campo 'status' é obrigatório" });
  }
  if (body.status === "") {
    return res
      .status(400)
      .json({ message: "O campo 'status' não pode ser vazio" });
  }

  next();
};

module.exports = { validateFieldTitle, validateFieldStatus };
