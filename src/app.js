import express from 'express'
import morgan from 'morgan'

// import postRoutes from './routes/post.routes'
// import rolRoutes from './routes/rol.routes'
// import personaRoutes from './routes/persona.routes'
// import usuarioRoutes from './routes/usuario.routes'
import localidadRoutes from './routes/localidad.routes'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Bienvenido a Node JS..!');
});

// app.use('/api/auth/post', postRoutes);
// app.use('/api/auth/rol', rolRoutes);
// app.use('/api/auth/persona', personaRoutes);
// app.use('/api/auth/usuario', usuarioRoutes);
app.use('/api/auth/localidad', localidadRoutes);

export default app;