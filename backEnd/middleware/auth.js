const config = process.env
const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) => {
    let token = req.body.token || req.query.token || req.headers["authorization"]

    console.log(token, "its token");

    if(!token) {
        res.status(403).send('token is required for authentication')
        console.log('in if condition');
    }
    
        try {
        console.log(token, 'in try block');
        token = token.replace(/^Bearer\s+/,"")
        const decoded = jwt.verify(token, config.JWT_SECRET_KEY)
        req.user = decoded
    } catch (error) {
        res.status(401).send('Invalid Token')
    
}
    return next()
}

module.exports = verifyToken;