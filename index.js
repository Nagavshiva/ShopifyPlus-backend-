import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from 'path';
import connectToDatabase from "./db/database.js";


// routes
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes  from "./routes/orderRoutes.js";
import seedRouter from "./routes/seedRoutes.js";
const app = express();

// db connection
connectToDatabase();
app.use(cors())


// routes connection
app.use(express.json());

app.get('/', (req, res) => {
  res.end('it works!');
});

app.use("/api/seeder",seedRouter)
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// paypal
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)


const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


// port connection
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server runs on port ${PORT}.`)
})
