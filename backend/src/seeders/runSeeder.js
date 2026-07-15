import dotenv from "dotenv";
import mongoose from "mongoose";

import seedCategories from "./category.seed.js";
import seedTags from "./tag.seed.js";
import seedPosts from "./post.seed.js";


dotenv.config();



const runSeeder = async()=>{


try{


await mongoose.connect(
    process.env.MONGO_URI
);


console.log(
"MongoDB connected for seeding"
);



const categories =
await seedCategories();



const tags =
await seedTags();



await seedPosts(
    categories,
    tags
);



console.log(
"🎉 Database seeded successfully"
);



process.exit();



}
catch(error){


console.log(
"Seeder Error:",
error.message
);


process.exit(1);


}



}



runSeeder();
