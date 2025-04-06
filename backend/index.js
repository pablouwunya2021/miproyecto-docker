const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

// Configuración de PostgreSQL
const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'mydb',
  password: 'secret',
  port: 5432,
});

// Ruta de prueba
app.get('/api/data', async (req, res) => {
  const result = await pool.query('SELECT NOW() AS time');
  res.json({ message: 'Hola desde el backend, Batman chupame todisima la verga gordo traga semen hijo de puta!', time: result.rows[0].time });
});

app.listen(3000, () => {
  console.log('Backend escuchando en puto puerto 3000');
});