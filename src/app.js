import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import configurationRoutes from './routes/ConfigurationRoutes';
import routinesRoutes from './routes/routinesRoutes';
import loginRoutes from './routes/loginRoutes';

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

app.use(loginRoutes);
app.use(routinesRoutes);
app.use(configurationRoutes);

export default app;