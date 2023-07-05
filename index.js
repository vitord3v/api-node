import http from 'http'

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Bem-vindo a minha api')
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});