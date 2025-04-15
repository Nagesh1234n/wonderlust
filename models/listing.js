const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var urll = "https://www.bing.com/images/search?view=detailV2&ccid=6mOl36DN&id=D9CC3ED14BF3510E1E433D4FDC507B6F174AE1B7&thid=OIF.tFdaC3564TDP2P6qBePzMw&mediaurl=https%3A%2F%2Fmyfinal11.b-cdn.net%2Fwp-content%2Fuploads%2F2025%2F02%2FRohit-Sharma-Century.webp&exph=1013&expw=1800&q=rohit+sharma&simid=7069048928790&form=IRPRST&ck=B4575A0B7E7AE130CFD8FEAA05E3F333&selectedindex=0&itb=0&vt=0&sim=11";

const listingSchema = new Schema({
    title:{
      type : String,
      required: true,
    } ,
    description: String,
    // image: {
    //     type: String,
        
    //     default:"https://www.bing.com/images/search?view=detailV2&ccid=6mOl36DN&id=D9CC3ED14BF3510E1E433D4FDC507B6F174AE1B7&thid=OIF.tFdaC3564TDP2P6qBePzMw&mediaurl=https%3A%2F%2Fmyfinal11.b-cdn.net%2Fwp-content%2Fuploads%2F2025%2F02%2FRohit-Sharma-Century.webp&exph=1013&expw=1800&q=rohit+sharma&simid=7069048928790&form=IRPRST&ck=B4575A0B7E7AE130CFD8FEAA05E3F333&selectedindex=0&itb=0&vt=0&sim=11",
    //     set: (v) => v===" "?"https://www.bing.com/images/search?view=detailV2&ccid=6mOl36DN&id=D9CC3ED14BF3510E1E433D4FDC507B6F174AE1B7&thid=OIF.tFdaC3564TDP2P6qBePzMw&mediaurl=https%3A%2F%2Fmyfinal11.b-cdn.net%2Fwp-content%2Fuploads%2F2025%2F02%2FRohit-Sharma-Century.webp&exph=1013&expw=1800&q=rohit+sharma&simid=7069048928790&form=IRPRST&ck=B4575A0B7E7AE130CFD8FEAA05E3F333&selectedindex=0&itb=0&vt=0&sim=11": v,

    // },
    image: {
       filename: String,
       url: String,
       

        
},
    price : Number,
    location: String,
    country: String,
});
const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;