const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const appointment=sequelize.define('appointment',{
 id:{
  type: Sequelize.INTEGER,
  autoIncrement:true,
  allowNull:false,
  primaryKey:true
 },
Username:{
  type: Sequelize.STRING,
  allowNull:false
 },
 PhoneNumber:{
  type: Sequelize.DOUBLE,
  allowNull:false
 },
Email:{
  type: Sequelize.STRING,
  allowNull:false
 },
})
module.exports=appointment;
