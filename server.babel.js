//For Express as a backend 
import express from 'express';

const app = express();
app.use('/',express.static('public'));

app.listen(process.env.Port || 3000);

