import express from 'express'
import morgan from 'morgan'

import departamento from './routes/departamento.routes'
import distrito from './routes/distrito.routes'
import localidad from './routes/localidad.routes'
import persona_localidad from './routes/persona_localidad.routes'
import persona from './routes/persona.routes'
import provincia from './routes/provincia.routes'
import rol from './routes/rol.routes'
import tipo_documento from './routes/tipo_documento.routes'
import tipo_persona from './routes/tipo_persona.routes'
import tipo_riesgo from './routes/tipo_riesgo.routes'
import usuario from './routes/usuario.routes'
import voucher_pago from './routes/voucher_pago.routes'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Bienvenido a Node JS..!');
});

app.use('/api/auth/departamento', departamento);
app.use('/api/auth/distrito', distrito);
app.use('/api/auth/localidad', localidad);
app.use('/api/auth/persona_localidad', persona_localidad);
app.use('/api/auth/persona', persona);
app.use('/api/auth/provincia', provincia);
app.use('/api/auth/rol', rol);
app.use('/api/auth/tipo_documento', tipo_documento);
app.use('/api/auth/tipo_persona', tipo_persona);
app.use('/api/auth/tipo_riesgo', tipo_riesgo);
app.use('/api/auth/usuario', usuario);
app.use('/api/auth/usuario', usuario);
app.use('/api/auth/voucher_pago', voucher_pago);

export default app;