require("dotenv").config();
import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;
const MY_NAME= process.env.MY_NAME;
const MY_CITY= process.env.MY_CITY;
const MY_LANGUAGE= process.env.MY_LANGUAGE;

app.listen(PORT, (err)=>{
    if(err) {
        console.error("Oups, une erreur c'est produite")
    }else{
        console.log(`I am ${MY_NAME}, wilder in ${MY_CITY}, and I love ${MY_LANGUAGE}`);
    }
});