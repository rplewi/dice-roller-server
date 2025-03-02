const express = require('express')
app = express()
const cors = require("cors")

const port = process.env.PORT || 3000

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(cors({ origin: '*' }))

function rollDie(){
	const die1 = Math.floor(Math.random() * 6) + 1;
	const die2 = Math.floor(Math.random() * 6) + 1;
	const die3 = Math.floor(Math.random() * 6) + 1;
	const die4 = Math.floor(Math.random() * 6) + 1;
	const die5 = Math.floor(Math.random() * 6) + 1;
	const die6 = Math.floor(Math.random() * 6) + 1;

	return({
		die1: die1,
		die2: die2,
		die3: die3,
		die4: die4,
		die5: die5,
		die6: die6
	})
}

app.get('/roll', (req, res) => {
	res.send(rollDie())
})

app.use((req, res) => {
	res.type('text/plain')
	res.status(200)
	res.send('200 - All Good!')
})

// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
