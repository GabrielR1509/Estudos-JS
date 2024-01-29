const express = require('express')
const app = express()

app.get('/soma', (request, response) => {
	const { number1, number2 } = request.query

	const result = parseInt(number1) + parseInt(number2)

	response.send({ result })
})

app.get('/subtracao', (request, response) => {
	const { number1, number2 } = request.query

	const result = parseInt(number1) - parseInt(number2)

	response.send({ result })
})

app.get('/multiplicacao', (request, response) => {
	const { number1, number2 } = request.query

	const result = parseInt(number1) * parseInt(number2)

	response.send({ result })
})

app.get('/divisao', (request, response) => {
	const { number1, number2 } = request.query

	const result = parseInt(number1) / parseInt(number2)

	response.send({ result })
})

app.get('/fatorial', (request, response) => {
	const { number } = request.query
	let result = 1;

	for (let i = 1; i <= number; i++) {
		result *= i;
	  }

	response.send({ result })
})

app.listen(3000)


