const express = require('express');
const bodyParser = require('body-parser');
const {readFile, writeFile} = require('./data/operation')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//GET ALl BOOKS
app.get('/api/books', (req, res) => {
  readFile(data => {
    res.send(data);
  }, true);
});

app.get('/api/books/:id', (req, res) => {
  readFile(data => {
    const bookId = parseInt(req.params['id'], 10);
    const result = data.find(d => d.id === bookId);
    res.send(result);
  }, true);
});

app.delete('/api/books/:id', (req, res) => {
  readFile(data => {
    const bookId = parseInt(req.params['id'], 10);
    const foundIndex = data.findIndex(d => d.id == bookId);
    data.splice(foundIndex, 1);
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send('Book deleted');
    });
  }, true);
});

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1)
  return maxId + 1
}
// CREATE
app.post('/api/books', (req, res) => {
  readFile(data => {
    const newBook = {
      id: nextBookId(data),
      ...req.body
    }
    data.push(newBook);

    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send('new book added');
    });
  }, true);
});

// UPDATE
app.put('/api/books/:id', (req, res) => {
  readFile(data => {
    const bookId = parseInt(req.params['id'], 10);
    const foundIndex = data.findIndex(d => d.id == bookId);
    data[foundIndex] = req.body;
    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send(`Books id:${bookId} updated`);
    });
  }, true);
});


app.listen(port, () => console.log(`Listening on port ${port}`));