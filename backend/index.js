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
    user: 'root', // your MySQL username
    password: 'wikileaks123', // your MySQL password
    database: 'itemsdata', // the name of your database
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL');
});

// Create MySQL table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    image VARCHAR(255),
    price INT,
    tiket INT,
    days INT,
    sold INT,
    yield DECIMAL(5, 2)
  )
`;

db.query(createTableQuery, (err, result) => {
    if (err) {
        throw err;
    }
    console.log('Table created or already exists');
});

app.get('/', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});

app.post('/', (req, res) => {
    const data = req.body;
    const newId = uuidv4();

    const insertQuery = 'INSERT INTO items SET ?';
    const values = {
        id: newId,
        title: data.title,
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

app.get('/:items_id', (req, res) => {
    const items_id = req.params.items_id;

    db.query('SELECT * FROM items WHERE id = ?', items_id, (err, result) => {
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

function insertData() {
    const data = [
        {
            title: 'The Marina Torch',
            price: 2500000,
            yield: 2.25,
            sold: 55,
            tiket: 20000,
            days: 50,
        },
        {
            title: 'Ocean peaks',
            price: 5010000,
            yield: 1.5,
            sold: 30,
            tiket: 75000,
            days: 10,
        },
        {
            title: 'HHHR Tower',
            price: 4000000,
            yield: 2.5,
            sold: 90,
            tiket: 35000,
            days: 220,
        },
        {
            title: 'Al Yaqoub Tower',
            price: 65000000,
            yield: 9.5,
            sold: 20,
            tiket: 15000,
            days: 320,
        }
        // Add more data objects as needed
    ];


    data.forEach((item) => {
        const insertQuery = 'INSERT INTO items SET ?';
        const values = {
            title: item.title,
            image: null, // Assuming there's no image for this example
            price: item.price,
            tiket: item.tiket,
            days: item.days,
            sold: item.sold,
            yield: item.yield,
        };

        db.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
            } else {
                console.log('Data inserted successfully');
            }
        });
    });
}

insertData();

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});
