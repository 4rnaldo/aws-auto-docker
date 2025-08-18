const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.get('/', (_req, res) => res.send('Hello from App Runner + CodeBuild + ECR!'));
app.listen(port, () => console.log(`Listening on ${port}`));
