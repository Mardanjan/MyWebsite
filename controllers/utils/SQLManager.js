const baseAbsPath = __dirname + '/';

const Sequelize = require('sequelize');

// const config = require('./configs.json');

let MySQLManager = connectToMysql();

function connectToMysql() {
	let host = 'kujijiku.com'
	let port = '3309'
	let dbname = 'mardan';
	let username = 'mardan';
	let password = '123456';

	try {
		let dbRef = new Sequelize(dbname, username, password, {
			host: host,
			port: port,
			dialect: 'mysql',
			pool: {
				max: 5,
				min: 0,
				idle: 10000
			}
		});
		console.log("connect mysql success");
		//初始化数据表
		dbRef.sync()
		return dbRef
	} catch(e) {
		console.log(e)
	}
}

module.exports = MySQLManager;
