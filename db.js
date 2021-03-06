import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connect to DB");
const handleError = error => console.log("❗️Error on DB connection");

db.once("open", handleOpen);
db.on("error", handleError);

/* BELOW LINES ARE WRITTEN MOCK DATA JUST FOR TESTING THE WEB BEFORE REAL CONNECTION TO THE DATABASE!!!!!!
export const videos = [
    {
        id: 42007,
        title: "153 Johnston Street Annandale NSW 2038",
        description: "Realty introduced by Ray White Surry Hills",
        views: 420,
        videoFile: "https://www.youtube.com/embed/8_eZcAePF7U",
        creator: {
            id: 12344123,
            name: "Ray White Inner West",
            email: "surryhills@raywhite.com.au"
        }
    },
    {
        id: 420017,
        title: "779/99 Jones St, Ultimo",
        description: "Realty introduced by Ray White Surry Hills",
        views: 1230,
        videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        creator: {
            id: 123123,
            name: "Ray White Surry Hills",
            email: "surryhills@raywhite.com.au"
        }
    },
    {
        id: 4200123,
        title: "795/18 Park Lane, Chippendale",
        description: "Realty introduced by Ray White Surry Hills",
        views: 40102,
        videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        creator: {
            id: 123121553,
            name: "Ray White Surry Hills",
            email: "surryhills@raywhite.com.au"
        }
    }
];
*/
