const { sql } = require('../db');

// Modelo para Minero
const getAllMiners = async () => {
    const result = await sql.query('SELECT * FROM miners');
    return result.recordset;
};

const createMiner = async (name, id_type, id_number, municipio_id, photo_url) => {
    const query = `
    INSERT INTO miners (name, id_type, id_number, municipio_id, photo_url)
    VALUES (@name, @id_type, @id_number, @municipio_id, @photo_url);
  `;
    const request = new sql.Request();
    request.input('name', sql.NVarChar, name);
    request.input('id_type', sql.NVarChar, id_type);
    request.input('id_number', sql.Int, id_number);
    request.input('municipio_id', sql.Int, municipio_id);
    request.input('photo_url', sql.NVarChar, photo_url);

    await request.query(query);
};

module.exports = { getAllMiners, createMiner };
