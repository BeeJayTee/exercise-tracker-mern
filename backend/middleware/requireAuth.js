const requireAuth = (req, res, next) => {

    // verify authenitcation
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'authorization token required'})
    }

}