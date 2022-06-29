import express from 'express'
import morgan from 'morgan'

import localidadRoutes from './routes/localidad.routes'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Bienvenido a Node JS..!');
});

app.use('/api/auth/localidad', localidadRoutes);

export default app;