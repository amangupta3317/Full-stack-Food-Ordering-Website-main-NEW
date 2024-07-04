// const mongoose = require('mongoose');

// const URI= 'mongodb+srv://MERN:dehradun@mern.is1k7ab.mongodb.net/?retryWrites=true&w=majority&appName=MERN';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(URI, { useNewUrlParser: true });
//         console.log("Connected to MongoDB ");
  
//         try {
//           const food_items = await mongoose.connection.db.collection("food_items").find({}).toArray();
        
//           const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        
//           global.food_items = food_items;
//           global.foodCategory = foodCategory;
//           console.log(global.food_items);
        
//         } catch (err) {
//           console.error("Error fetching data:", err);
//         }
        
//     } catch (err) {
//       console.error("Error connecting to MongoDB:", err);
//     }
//   };
// module.exports= mongoDB;

const mongoose = require('mongoose');

const URI= 'mongodb+srv://MERN:dehradun@mern.is1k7ab.mongodb.net/Memories?retryWrites=true&w=majority&appName=MERN';

const mongoDB = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        try {
            const food_items = await mongoose.connection.db.collection("food_items").find({}).toArray();
            console.log("Fetched food_items:", food_items);

            const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
            console.log("Fetched foodCategory:", foodCategory);

            global.food_items = food_items;
            global.foodCategory = foodCategory;
            // console.log("Global food_items:", global.food_items);
            // console.log("Global foodCategory:", global.foodCategory);

        } catch (err) {
            console.error("Error fetching data:", err);
        }
    } 
    catch (err) {
        console.error("Error connecting to MongoDB:", err);
      }
 };
 module.exports= mongoDB;