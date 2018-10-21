const checkAuth = (req, res, next) => {
    if (req.method === 'DELETE') {
        if (req.headers.authorization !== 'X-Password qwerty') return res.status(401).send('Unauthorized');
        res.status(200); next();
    } else next()
}

module.exports = checkAuth