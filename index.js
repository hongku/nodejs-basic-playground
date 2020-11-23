const expess = require('express');
const mongoose = require('mongoose');

const app = expess();
const PORT = 3000;

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
