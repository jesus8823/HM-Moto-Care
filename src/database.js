const pg = require("pg");
const {Pool} = require("pg");


const poolConfig = {
     user: 'postgres',
     host: 'localhost',
      database: 'hmmotorcare',
     password: '22315446',
     port: 5432,
  };

const pool = new Pool(poolConfig);

pool.query('SELECT * FROM clientes', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("conexion exitosa");
  // Aquí puedes hacer lo que quieras con los resultados de la consulta
});

module.exports = pool;