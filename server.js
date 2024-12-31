const app = require('./app');
const { connectDB } = require('./db');

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
