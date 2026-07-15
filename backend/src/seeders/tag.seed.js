import Tag from "../models/Tag.js";


const tags = [

  {
    name: "MERN",
    slug: "mern"
  },

  {
    name: "React",
    slug: "react"
  },

  {
    name: "Node.js",
    slug: "node-js"
  },

  {
    name: "MongoDB",
    slug: "mongodb"
  },

  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence"
  },

  {
    name: "Cloud Computing",
    slug: "cloud-computing"
  },

  {
    name: "Cyber Security",
    slug: "cyber-security"
  },

  {
    name: "Innovation",
    slug: "innovation"
  },

  {
    name: "Startups",
    slug: "startups"
  },

  {
    name: "Future Technology",
    slug: "future-technology"
  },
  {
    name: "Security",
    slug: "security"
  }

];



export default async function seedTags() {


  await Tag.deleteMany();


  const result =
    await Tag.insertMany(tags);


  console.log(
    `✅ ${result.length} Tags seeded`
  );


  return result;


}