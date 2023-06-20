import express from 'express';
import routes from './src/routes/cineVibeRoute';
import userRoute from './src/routes/userRoute';
import rowRoute from './src/routes/rowRoute'
import pageRoute from './src/routes/pageRoute'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const cors = require('cors')

const app = express();
const PORT = 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://logantoullec:mellog@cluster0.lknlmog.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "CineVibeDB"
})
//bodyparser setup
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors())


routes(app);
userRoute(app);
rowRoute(app);
pageRoute(app);

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)
app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`))

