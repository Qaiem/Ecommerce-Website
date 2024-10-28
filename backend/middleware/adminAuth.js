import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET; // Ensure this matches the one used in adminLogin

const authenticateAdmin = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

    if (!token) {
        return res.status(403).json({ msg: 'No token provided, access denied' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: 'Invalid token' });
        }

        req.adminId = decoded.id; // Save admin ID in the request object for future use
        next();
    });
};

export { authenticateAdmin };
