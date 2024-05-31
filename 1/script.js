const http = require('http')
let counterMain = 0
let counterAbout = 0

const server = http.createServer((req, res) => {
	switch (req.url) {
		case '/':
			counterMain++
			res.writeHead(200, {
				'Content-Type': 'text/html; charset=UTF-8',
			})
			res.end(`
      <h1>Main Page</h1>
      <a href="/about">About Link</a>
      <p>Данная страница посещена ${counterMain} раз</p>`)
			break

		case '/about':
			counterAbout++
			res.writeHead(200, {
				'Content-Type': 'text/html; charset=UTF-8',
			})
			res.end(`
      <h1>About</h1>
      <a href="/">Main Link</a>
      <p>Данная страница посещена ${counterAbout} раз</p>`)
			break

		default:
			res.writeHead(404, {
				'Content-Type': 'text/html; charset=UTF-8',
			})
			res.end('Страница не найдена!')
	}
})

const port = 3000
server.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`)
})
