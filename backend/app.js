const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost', // or the IP address of your MySQL server
    user: 'root', // or your MySQL username
    password: 'wikileaks123', // your MySQL password
    database: 'your_database_name', // the name of your database
  });

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// Create MySQL table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS programming_languages (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255),
    text VARCHAR(255),
    image VARCHAR(255),
    price INT
  )
`;

db.query(createTableQuery, (err, result) => {
  if (err) {
    throw err;
  }
  console.log('Table created or already exists');
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM programming_languages', (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.post('/', (req, res) => {
  const data = req.body;
  const newId = uuidv4();

  const insertQuery = 'INSERT INTO programming_languages SET ?';
  const values = {
    id: newId,
    title: data.title,
    text: data.text,
    image: data.image,
    price: data.price,
  };

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).json({ message: 'Resource created successfully' });
  });
});

app.get('/:programming_language_id', (req, res) => {
  const programming_language_id = req.params.programming_language_id;

  db.query('SELECT * FROM programming_languages WHERE id = ?', programming_language_id, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      res.json({});
    } else {
      res.json(result[0]);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
