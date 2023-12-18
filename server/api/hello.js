import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Bienvenido')
})
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
