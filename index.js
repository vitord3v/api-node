import http from 'http';
import fs from 'fs'

    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Bem-vindo à minha API!');
        } else if (req.url === '/dados') {
            const data = {
                name:'vitordevETH',
                age:22,
                profession:'Full Stack Developer'
            };
            
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(dados));
        } else if (req.url === "/enviar" && req.method === 'POST') {
            let body = '';

            req.on('data', (chunck) => {
                body += chunck;
            })

            req.on('end', () => {
                const dadosRecebidos = JSON.parse(body);

                fs.writeFile('dados.txt', JSON.stringfy(dadosRecebidos), (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('Erro ao salvar os dados');
                    } else {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('Dados recebidos e salvos com sucesso')
                    }
                });
            });
            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain') 
                res.end("Página não encontrada");
            };

        });

    const port = 3000;
    server.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
