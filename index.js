const express = require("express");
const cors = require("cors");
const app = express();

const corsConfig = {
    origin: 'https://localhost:8000'
}

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const collection = require('./app/Models/index.js');
collection.mongoose.connect(collection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection Successful');
}).catch((err) => {
    console.error('Connection Fail', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({
        message: "Hello World "
    });
});

require('./routes/route.js')(app);

const port = 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})