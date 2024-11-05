const http = require("http");

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, World!");
});

const port = 9090;

server.listen(port, () =>
	console.log(`Server is running at: http://localhost:${port}`)
);
