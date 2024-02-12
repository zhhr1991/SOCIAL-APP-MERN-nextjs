import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;
const dbUrl = process.env.MONGODB_URL;

app.use(express.json(), cors());
app.use(express.urlencoded({extended:true}));



//db.once('open', () => console.log("db connected"))

app.get('/', (req, res) => {
    res.send('hello')
});

const dbConnect = async () => {
    try {
        await mongoose.connect(dbUrl);
        app.listen(PORT, () => {
            console.log('App listening on port' + PORT);
        });
    } catch (erroe) {
        console.log(erroe.message);
    }
};
dbConnect();



