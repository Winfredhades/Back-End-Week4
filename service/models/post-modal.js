import sequelize from "../config/data-base.js";
import { DataTypes } from 'sequelize'

const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.DATE,
  });


  export default Post;