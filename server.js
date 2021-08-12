require('dotenv').config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT;
app.listen(port, () => console.log(`Api listening on http://localshost:${port}`));