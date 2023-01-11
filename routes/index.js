const teamsRoutes = require("./teams")

const constructorMethod = (app) => {
    app.use('/', teamsRoutes);
    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
    });
};

module.exports = constructorMethod;