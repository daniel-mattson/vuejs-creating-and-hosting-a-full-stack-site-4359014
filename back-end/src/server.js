import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';

async function start() {

  // Connect to MongoDB
  const password = 'f1xG6cM7TZPzQawy';
  const client = new MongoClient(
    `mongodb+srv://fsv-server:${password}@cluster0.ier5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
  await client.connect();
  const db = client.db('fsv-db');

  const app = express();
  app.use(express.json());

  app.use('/images', express.static(path.join(__dirname, '../assets')));

  app.get('/api/products', async (req, res) => {
    const products = await db.collection('products').find({}).toArray();
    res.json(products);
  });

  const getCartProducts = async function(ids) {
    return Promise.all(
      ids.map(id => db.collection('products').findOne({ id }))
    );
  }

  // Get all products in cart
  app.get('/api/users/:userId/cart', async ({ params }, res) => {
    const user = await db.collection('users').findOne({ id: params.userId });
    const cart = await getCartProducts(user?.cartItems ?? []);

    res.json(cart);
  });

  // Returns true if the given product is in the cart, otherwise false
  app.get('/api/users/:userId/cart/:productId', async ({ params }, res) => {
    const user = await db.collection('users').findOne({ id: params.userId });
    res.json(user?.cartItems?.includes(params.productId) ?? false);
  });

  // Add product to cart
  app.post('/api/users/:userId/cart', async ({ params, body }, res) => {
    const uid = params.userId;

    const existingUser = await db.collection('users').findOne({ id: uid });
    if (!existingUser) {
      await db.collection('users').insertOne({ id: uid, cartItems: [] });
    }

    await db.collection('users').updateOne({ id: uid }, {
      $addToSet: { cartItems: body.id }
    });

    const user = await db.collection('users').findOne({ id: uid });
    const cart = await getCartProducts(user?.cartItems ?? []);
    res.json(cart);
  });

  // Remove product from cart
  app.delete('/api/users/:userId/cart/:productId', async ({ params }, res) => {
    await db.collection('users').updateOne( {id: params.userId}, {
      $pull: { cartItems: params.productId }
    });

    const user = await db.collection('users').findOne({ id: params.userId });
    const cart = await getCartProducts(user?.cartItems ?? [])
    res.json(cart);
  });

  // Get product by ID
  app.get('/api/products/:productId', async ({ params }, res) => {
    const product = await db.collection('products').findOne({ id: params.productId });
    res.json(product);
  });

  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });
}

start();