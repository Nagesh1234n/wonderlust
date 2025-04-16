const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")))

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlustt";
async function main(){
    await mongoose.connect(MONGO_URL);
};
main().then(()=>{
    console.log("connected to db");
}).catch(err =>{
    console.log(err);
});

app.listen(8080, ()=>{
    console.log("server listening to the port 8080");
});

// app.get("/",(req, res)=>{
//     res.send("hi i am root ok");
// });
// only for access listings
app.get("/", async(req, res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
 });
// app.get("/testListings", async(req, res) =>{
//     let sampleListing = new Listing({
//         title: "my New villa",
//         description: "by the beatch",
//         price: 1200,
//         location: "goa", 
//         country: "india",
//     });
//     await sampleListing.save();
//     console.log("sample was saves");
//     res.send("successfull testing");

// });
//index rout
app.get("/listings", async(req, res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
});
//new rout
app.get("/listing/new", (req, res)=>{
    res.render("listings/new.ejs");
});
//show rout
app.get("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});


});
//new rout
app.get("/listing/new", (req, res)=>{
    res.render("listings/new.ejs");
});
//create rout
app.post("/listings",async(req, res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    // let listing = req.body.listing;
    // console.log(listing);

});
//edit rout
app.get("/listing/:id/edit", async(req, res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);

    res.render("listings/edit.ejs", {listing});
});

//update rout
app.put("/listings/:id", async(req, res)=>{
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    // res.redirect(`/listings/${id}`);
    res.redirect("/listings")
});

// Delete rout
app.delete("/listings/:id", async (req, res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});