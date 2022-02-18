import express from 'express';
import configurationRoutes from './routes/ConfigurationRoutes';
import routinesRoutes from './routes/routinesRoutes';

const app = express()

app.use(express.json())

app.use(routinesRoutes)
app.use(configurationRoutes)

export default app