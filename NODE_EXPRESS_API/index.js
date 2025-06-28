const express = require('express');
const bodyParaser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParaser.json());

app.listen(PORT, () => console.log(`Server Running onb port: http://localhost${PORT}`));