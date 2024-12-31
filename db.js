const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

const connectDB = async () => {
    try {
        await sql.connect(dbConfig);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
    }
};

module.exports = { connectDB, sql };
