import jwt from "jsonwebtoken";

//
const FAKE_USER = {
  email: "admin@admin.com",
  password: "123456789",
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (email === FAKE_USER.email && password === FAKE_USER.password) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "Login exitoso", token });
  }

  return res.status(401).json({ message: "Credenciales inválidas" });
};

export default { login };
