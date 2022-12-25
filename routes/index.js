const teamsRoutes = require("./teams")

const constructorMethod = (app) => {
    app.use('/teams', teamsRoutes);
    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
    });
};

module.exports = constructorMethod;