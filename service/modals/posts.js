import sequelize from "../config/database.js";
import {DataTypes} from 'sequelize'

const Post = sequelize.define('Books', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    content:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

export default Post;