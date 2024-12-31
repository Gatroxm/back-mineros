const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Función de login
const login = async (req, res) => {
    const { email, password } = req.body;

    const user = { id: 1, email: 'user@example.com' };

    const isMatch = bcrypt.compareSync(password, 'hashed_password');

    if (!isMatch) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

module.exports = { login };
