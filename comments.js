// Create web server
// Comments API
// GET /comments
// POST /comments
// DELETE /comments/:id
// PUT /comments/:id

const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Server error')
    }
    res.send(JSON.parse(data))
  })
})

app.post('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Server error')
    }
    const comments = JSON.parse(data)
    const newComment = req.body
    newComment.id = comments.length + 1
    comments.push(newComment)
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        return res.status(500).send('Server error')
      }
      res.send(newComment)
    })
  })
})

app.delete('/comments/:id', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Server error')
    }
    const comments = JSON.parse(data)
    const id = req.params.id
    const index = comments.findIndex(comment => comment.id === Number(id))
    if (index === -1) {
      return res.status(404).send('Comment not found')
    }
    comments.splice(index, 1)
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        return res.status(500).send('Server error')
      }
      res.send({})
    })
  })
})

app.put('/comments/:id', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Server error')
    }
    const comments = JSON.parse(data)
    const id = req.params.id
    const index = comments.findIndex(comment => comment.id === Number(id))
})})