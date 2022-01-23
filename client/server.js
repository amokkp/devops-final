const path = require('path')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');

const DIST_DIR = path.join(__dirname, 'build')

const app = express()
const port = 3001


app.use('/api', createProxyMiddleware({target: 'http://localhost:3002', changeOrigin: true}));

app.use(express.static(DIST_DIR))

app.all('*', function (req, res) {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(port, () => {
  console.log(`Local server listening at http://localhost:${port}`)
})
