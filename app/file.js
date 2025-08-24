// countLetters("banana") → { b: 1, a: 3, n: 2 }
function countLetters(str) {
    const letterCount = {};
    for (const letter of str) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
    return letterCount;
 }

//📁 3. Leer y parsear un archivo JSON

// Crea una función async que lea un archivo llamado 'data.json' y retorne el objeto
async function readJsonFile(path) { 
    const fs = require('fs').promises;
    try {
        const data = await fs.read
        console.log(data);
}catch(error){
        console.error('Error reading JSON file:', error);
        throw error;
    }
    return JSON.parse(data);
}


//🔄 4. API: Fetch externa con Axios

// fetchUsers() → debe obtener los users desde https://jsonplaceholder.typicode.com/users
async function fetchUsers() { 
    const axios = require('axios');
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
//🧮 5. Suma recursiva de array

// sumRecursive([1, 2, 3]) → 6
function sumRecursive(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumRecursive(arr.slice(1));
 }
//📦 6. Simular delay con promesa

// delay(2000).then(() => console.log('2 segundos después'))
function delay(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}
//🧰 7. Crear un servidor HTTP simple (sin Express)

// http://localhost:3000 → "Hola Allan!"
const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Allan!');
});
//🔐 8. Middleware personalizado (estilo Express)

// Crear una función middleware que loguee el método y la URL de cada request
function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Llama al siguiente middleware o ruta
 }

// Usar Express
//🧮 9. Crear un endpoint POST /sumar que sume dos números enviados en JSON POST body: { a: 2, b: 3 } → respuesta: 5
const express = require('express');
const app = express();      
app.use(express.json()); // Middleware para parsear JSON
app.post('/sumar', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const sum = a + b;
    res.json({ result: sum });
});
 
//🔥 10. Limitar ejecuciones (Throttle Function)

// throttle(fn, limit) → limita la ejecución de fn cada 'limit' ms
function throttle(fn, limit) { 
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            return fn(...args);
        }
    };
}


console.log(countLetters("banana"));
console.log(readJsonFile('data.json'));
console.log(fetchUsers());
console.log(sumRecursive([1, 2, 3]));
console.log(delay(2000).then(() => console.log('2 segundos después')));
server.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
app.use(loggerMiddleware);



module.exports = countLetters;


