// src/server.ts
import express, { Request, Response } from 'express';

// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Payment, Preference } from 'mercadopago';
import { config } from 'dotenv'; // Importa dotenv

config();

console.log(process.env.MP_ACCESS_TOKEN);
// Step 2: Initialize the client object
const client = new MercadoPagoConfig({ 
            accessToken: process.env.MP_ACCESS_TOKEN as string, 
            options: { timeout: 5000, idempotencyKey: 'abc' } });

            
 new Preference(client).create({
    body: {
      items: [
        {
          id: "donacion",
          title: "teitle 1",
          quantity: 1,
          unit_price: 23,
        },
      ],
    },
  }).then((result) => {
    console.log("resultado : ", result);
  }).catch(error => console.error('Error : ', error));





const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/api/hello', (req: Request, res: Response) => {
    new Preference(client).create({
        body: {
          items: [
            {
              id: "donacion",
              title: "teitle 1",
              quantity: 1,
              unit_price: 23,
            },
          ],
        },
      }).then((result) => {
        console.log("resultado : ", result.sandbox_init_point!);
      }).catch(error => console.error('Error : ', error));

    res.json({ message: 'Hola, mundo!' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

