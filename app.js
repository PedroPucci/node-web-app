const express = require('express');
const app = express();

// Função para gerar o menu
function getMenu() {
    return `
        <nav>
            <a href="/">Home11121</a> |
            <a href="/about">About</a> |
            <a href="/contact">Contact</a>
        </nav>
        <hr/>
    `;
}

// Rota 1 - Página inicial
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head><title>Home</title></head>
        <body>
            ${getMenu()}
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page.</p>
        </body>
        </html>
    `);
});

// Rota 2 - Sobre
app.get('/about', (req, res) => {
    res.send(`
        <html>
        <head><title>About</title></head>
        <body>
            ${getMenu()}
            <h1>About Us</h1>
            <p>Learn more about our company.</p>
        </body>
        </html>
    `);
});

// Rota 3 - Contato
app.get('/contact', (req, res) => {
    res.send(`
        <html>
        <head><title>Contact</title></head>
        <body>
            ${getMenu()}
            <h1>Contact Us</h1>
            <p>Feel free to reach out.</p>
        </body>
        </html>
    `);
});

// Servidor escutando na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
