import sequelize from "../config/data-base.js";
import { DataTypes } from 'sequelize'

const Postphp = sequelize.define("Posts", {
  id: {
    type:  DataTypes.STRING,
    primaryKey: true
  },
  title: {
    type:  DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT
  }
})

  export default Postphp;