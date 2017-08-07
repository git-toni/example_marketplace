function checkAuth (req, res, next) {
    console.log('checkAuth ' + req.url);
    console.log(req.session);
    if ((!req.session || !req.session.authenticated)) {
        console.warn("You are not authorised to see this page.");
        res.redirect('/login');
        return;
    }

    next();
}
module.exports = {
    checkAuth
}

