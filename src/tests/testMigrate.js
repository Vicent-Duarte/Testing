require('../models')
//require('../models/City')//
require('../models/index')
const sequelize = require('../utils/connection');

const testMigrate = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log("DB reset");
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

testMigrate()