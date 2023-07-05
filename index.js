import http from 'http'

const server = http.createServer((req, res) => {
    if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello to mu API!");
    }
    else if ( req.url === '/dados') {
        const dados = {
            name: "John",
            years: 45
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(dados));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.end("Pagina não encontrada");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});