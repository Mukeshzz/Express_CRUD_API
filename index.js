import express from 'express';
import bodyParser from 'body-parser';
import users from './routes/users.js'
import { dirname } from "path";
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //it allows us to take in the incoming POST request body

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res) => {
    console.log('[GET ROUTE]');
    res.sendFile(_dirname+"/index.html");
})

app.post('/submit',(req,res) => {
    console.log(req.body);
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))