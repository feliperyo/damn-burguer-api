import { Sequelize } from 'sequelize'
import mongoose from 'mongoose'

import configDataBase from '../config/database.js'

import User from '../app/models/User.js'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

const models = [User, Product, Category]

class DataBase {
    constructor() {
        this.init();
        this.mongo();
    }

    init() {
        this.connection = new Sequelize('postgresql://postgres:xwIwTdJaDSqmrXbgCrVUMdoQSaMCiANb@monorail.proxy.rlwy.net:37955/railway')
        models.map((model) => model.init(this.connection)).map(
            (model) => model.associate && model.associate(this.connection.models),
        )
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:ecaXFQMehQWtvpqVfbEaurWMXnlDiirD@autorack.proxy.rlwy.net:57383',
        )
    }
}

export default new DataBase()