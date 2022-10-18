const app = require('./');
const port = 3333

app.listen(port, () => {
  return `Server Running at port number: ${port}`
});