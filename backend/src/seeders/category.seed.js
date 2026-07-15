import Category from "../models/Category.js";


const categories = [

    {
        name:"Technology",
        slug:"technology",
        status:"published"
    },

    {
        name:"Programming",
        slug:"programming",
        status:"published"
    },

    {
        name:"Artificial Intelligence",
        slug:"artificial-intelligence",
        status:"published"
    },

    {
        name:"Cyber Security",
        slug:"cyber-security",
        status:"published"
    },

    {
        name:"Business",
        slug:"business",
        status:"published"
    },

    {
        name:"Finance",
        slug:"finance",
        status:"published"
    },

    {
        name:"Health & Wellness",
        slug:"health-wellness",
        status:"published"
    },

    {
        name:"Travel",
        slug:"travel",
        status:"published"
    },

    {
        name:"Lifestyle",
        slug:"lifestyle",
        status:"published"
    },

    {
        name:"Science",
        slug:"science",
        status:"published"
    }

];



export default async function seedCategories(){

    await Category.deleteMany();


    const result =
        await Category.insertMany(categories);


    console.log(
        `✅ ${result.length} Categories seeded`
    );


    return result;

}