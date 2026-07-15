import Post from "../models/Post.js";
import User from "../models/User.js";


export default async function seedPosts(
    categories,
    tags
) {


    await Post.deleteMany();


    const author =
        await User.findOne({
            email: "tysonwachira123@gmail.com"
        });



    if (!author) {

        throw new Error(
            "Admin user not found. Seed admin first."
        );

    }



    const categoryMap = {};

    categories.forEach(cat => {
        categoryMap[cat.slug] = cat._id;
    });



    const tagMap = {};

    tags.forEach(tag => {
        tagMap[tag.slug] = tag._id;
    });



    const posts = [

        /*
        =====================================
        TECHNOLOGY
        =====================================
        */


        {
            title:
                "Building Scalable MERN Applications in 2026",

            slug:
                "building-scalable-mern-applications-2026",

            excerpt:
                "Learn how modern developers design scalable MERN applications.",

            description:
                "Modern MERN applications require clean architecture, optimized APIs, reusable components, secure authentication, and efficient database design. This article explores practical strategies for building production-ready React, Node.js, Express, and MongoDB systems.",

            images: [
                "blog-tech-1.webp"
            ],

            category:
                categoryMap["technology"],

            tags: [
                tagMap["mern"],
                tagMap["react"],
                tagMap["mongodb"],
                tagMap["node-js"]
            ],

            author: author._id,

            status: "published",

            views: 245
        },



        {
            title:
                "The Future of Smart Home Technology",

            slug:
                "future-of-smart-home-technology",

            excerpt:
                "How AI and connected devices are transforming modern homes.",

            description:
                "Smart homes are becoming more intelligent through automation, artificial intelligence, energy management, and connected ecosystems. This article explores how technology is improving comfort, safety, and efficiency.",

            images: [
                "smart-home.webp"
            ],

            category:
                categoryMap["technology"],

            tags: [
                tagMap["artificial-intelligence"],
                tagMap["future-technology"],
                tagMap["innovation"]
            ],

            author: author._id,

            status: "published",

            views: 182
        },



        {
            title:
                "Cloud Computing Trends Every Developer Should Know",

            slug:
                "cloud-computing-trends-developers",

            excerpt:
                "Explore the latest cloud platforms and deployment strategies.",

            description:
                "Cloud computing continues to transform software development. From serverless architectures to container orchestration, developers need modern cloud knowledge to build reliable applications.",

            images: [
                "cloud.webp"
            ],

            category:
                categoryMap["technology"],

            tags: [
                tagMap["cloud-computing"],
                tagMap["innovation"]
            ],

            author: author._id,

            status: "published",

            views: 134
        },



        {
            title:
                "How Artificial Intelligence Is Changing Everyday Life",

            slug:
                "how-ai-is-changing-everyday-life",

            excerpt:
                "AI is influencing healthcare, business, education, and creativity.",

            description:
                "Artificial Intelligence has moved beyond research laboratories. Today AI assists professionals, automates workflows, improves decision making, and creates new opportunities across industries.",

            images: [
                "ai-life.webp"
            ],

            category:
                categoryMap["artificial-intelligence"],

            tags: [
                tagMap["artificial-intelligence"],
                tagMap["future-technology"]
            ],

            author: author._id,

            status: "published",

            views: 356
        },



        {
            title:
                "Cyber Security Practices For Modern Businesses",

            slug:
                "cyber-security-practices-modern-businesses",

            excerpt:
                "Essential security strategies every company should implement.",

            description:
                "Cyber threats continue to evolve. Businesses must adopt strong authentication, monitoring systems, encryption, and employee awareness programs to protect valuable information.",

            images: [
                "security.webp"
            ],

            category:
                categoryMap["cyber-security"],

            tags: [
                tagMap["cyber-security"],
                tagMap["innovation"]
            ],

            author: author._id,

            status: "published",

            views: 291
        },



        /*
        =====================================
        PROGRAMMING
        =====================================
        */


        {
            title:
                "Mastering React Component Architecture",

            slug:
                "mastering-react-component-architecture",

            excerpt:
                "Build maintainable React applications with reusable components.",

            description:
                "Component architecture is the foundation of successful React projects. Learn patterns for creating scalable interfaces using reusable components, hooks, and clean state management.",

            images: [
                "react.webp"
            ],

            category:
                categoryMap["programming"],

            tags: [
                tagMap["react"],
                tagMap["mern"]
            ],

            author: author._id,

            status: "published",

            views: 412
        },



        {
            title:
                "Node.js API Design Best Practices",

            slug:
                "node-js-api-design-best-practices",

            excerpt:
                "Create secure and efficient backend APIs.",

            description:
                "Good API design improves application performance and maintainability. This article covers Express routing, middleware organization, validation, and security principles.",

            images: [
                "node.webp"
            ],

            category:
                categoryMap["programming"],

            tags: [
                tagMap["node-js"],
                tagMap["mern"]
            ],

            author: author._id,

            status: "published",

            views: 275
        },



        {
            title:
                "MongoDB Database Design Strategies",

            slug:
                "mongodb-database-design-strategies",

            excerpt:
                "Design MongoDB collections for scalable applications.",

            description:
                "MongoDB provides flexible document storage, but good schema design remains important. Learn indexing, relationships, aggregation, and optimization techniques.",

            images: [
                "mongodb.webp"
            ],

            category:
                categoryMap["programming"],

            tags: [
                tagMap["mongodb"],
                tagMap["mern"]
            ],

            author: author._id,

            status: "published",

            views: 198
        },

        // =====================================
        // PROGRAMMING CONTINUED
        // =====================================


        {
            title: "Modern Full Stack Development Workflow",
            slug: "modern-full-stack-development-workflow",
            excerpt: "A practical guide to building applications from frontend to backend.",
            description:
                "Full stack development requires understanding frontend frameworks, backend services, databases, deployment pipelines, and security practices. This guide explains a modern workflow used by professional developers.",
            images: ["fullstack.webp"],
            category: categoryMap["programming"],
            tags: [
                tagMap["mern"],
                tagMap["react"],
                tagMap["node-js"]
            ],
            author: author._id,
            status: "published",
            views: 167
        },


        {
            title: "Understanding REST API Security",
            slug: "understanding-rest-api-security",
            excerpt: "Protect your APIs using modern security approaches.",
            description:
                "Secure APIs require authentication, authorization, validation, rate limiting, and proper error handling. Learn how developers protect backend services.",
            images: ["api-security.webp"],
            category: categoryMap["programming"],
            tags: [
                tagMap["node-js"],
                tagMap["cyber-security"]
            ],
            author: author._id,
            status: "published",
            views: 221
        },


        // =====================================
        // ARTIFICIAL INTELLIGENCE
        // =====================================


        {
            title: "Machine Learning Explained For Beginners",
            slug: "machine-learning-explained-beginners",
            excerpt: "Understand how machines learn from data.",
            description:
                "Machine learning allows computers to identify patterns and make predictions. This article introduces algorithms, training data, models, and practical applications.",
            images: ["machine-learning.webp"],
            category: categoryMap["artificial-intelligence"],
            tags: [
                tagMap["artificial-intelligence"],
                tagMap["future-technology"]
            ],
            author: author._id,
            status: "published",
            views: 389
        },


        {
            title: "Generative AI And The Future Of Creativity",
            slug: "generative-ai-future-creativity",
            excerpt: "How AI tools are changing content creation.",
            description:
                "Generative AI is transforming writing, design, programming, and digital creativity. Explore the opportunities and challenges created by intelligent systems.",
            images: ["generative-ai.webp"],
            category: categoryMap["artificial-intelligence"],
            tags: [
                tagMap["artificial-intelligence"],
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 456
        },


        {
            title: "AI Automation In Modern Companies",
            slug: "ai-automation-modern-companies",
            excerpt: "How organizations use AI to improve productivity.",
            description:
                "Businesses are adopting AI automation to streamline operations, improve customer experiences, and reduce repetitive work.",
            images: ["ai-business.webp"],
            category: categoryMap["artificial-intelligence"],
            tags: [
                tagMap["artificial-intelligence"],
                tagMap["startups"]
            ],
            author: author._id,
            status: "published",
            views: 205
        },


        // =====================================
        // CYBER SECURITY
        // =====================================


        {
            title: "Common Cyber Attacks And How To Prevent Them",
            slug: "common-cyber-attacks-prevention",
            excerpt: "Learn how hackers target systems and how to defend them.",
            description:
                "Cyber attacks such as phishing, ransomware, and data breaches continue to increase. Learn practical methods to protect personal and business systems.",
            images: ["cyber-attacks.webp"],
            category: categoryMap["cyber-security"],
            tags: [
                tagMap["cyber-security"],
                tagMap["security"]
            ],
            author: author._id,
            status: "published",
            views: 312
        },


        {
            title: "Zero Trust Security Model Explained",
            slug: "zero-trust-security-model",
            excerpt: "A modern approach to protecting digital infrastructure.",
            description:
                "Zero Trust assumes no user or device should automatically be trusted. This security model improves protection in modern cloud environments.",
            images: ["zero-trust.webp"],
            category: categoryMap["cyber-security"],
            tags: [
                tagMap["cyber-security"],
                tagMap["cloud-computing"]
            ],
            author: author._id,
            status: "published",
            views: 184
        },


        // =====================================
        // BUSINESS
        // =====================================


        {
            title: "How Startups Build Successful Products",
            slug: "how-startups-build-successful-products",
            excerpt: "Important lessons for entrepreneurs building new companies.",
            description:
                "Successful startups focus on customer needs, rapid experimentation, strong teams, and continuous improvement. Discover strategies used by growing companies.",
            images: ["startup.webp"],
            category: categoryMap["business"],
            tags: [
                tagMap["startups"],
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 278
        },


        {
            title: "Digital Transformation For Small Businesses",
            slug: "digital-transformation-small-businesses",
            excerpt: "Using technology to improve business operations.",
            description:
                "Small businesses can compete effectively by adopting digital tools, automation systems, and modern customer engagement strategies.",
            images: ["digital-business.webp"],
            category: categoryMap["business"],
            tags: [
                tagMap["innovation"],
                tagMap["cloud-computing"]
            ],
            author: author._id,
            status: "published",
            views: 193
        },


        {
            title: "Leadership Skills Every Entrepreneur Needs",
            slug: "leadership-skills-entrepreneurs",
            excerpt: "Develop the mindset required to lead successful teams.",
            description:
                "Strong leadership requires communication, decision making, emotional intelligence, and strategic thinking.",
            images: ["leadership.webp"],
            category: categoryMap["business"],
            tags: [
                tagMap["startups"],
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 144
        },


        // =====================================
        // FINANCE
        // =====================================


        {
            title: "Personal Finance Rules Everyone Should Know",
            slug: "personal-finance-rules-everyone",
            excerpt: "Simple financial principles for better money management.",
            description:
                "Managing money effectively requires budgeting, saving, investing, and understanding financial goals.",
            images: ["finance.webp"],
            category: categoryMap["finance"],
            tags: [
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 301
        },


        {
            title: "Understanding Cryptocurrency Technology",
            slug: "understanding-cryptocurrency-technology",
            excerpt: "Explore blockchain and digital currencies.",
            description:
                "Cryptocurrency introduces new approaches to digital ownership and financial systems through blockchain technology.",
            images: ["crypto.webp"],
            category: categoryMap["finance"],
            tags: [
                tagMap["future-technology"],
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 265
        },


        // =====================================
        // HEALTH
        // =====================================


        {
            title: "Healthy Habits For A Better Lifestyle",
            slug: "healthy-habits-better-lifestyle",
            excerpt: "Small daily actions create long-term improvements.",
            description:
                "Healthy routines involving nutrition, exercise, sleep, and mental wellness contribute to a balanced life.",
            images: ["health.webp"],
            category: categoryMap["health-wellness"],
            tags: [
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 174
        },


        {
            title: "Technology In Modern Healthcare",
            slug: "technology-modern-healthcare",
            excerpt: "How digital solutions improve healthcare.",
            description:
                "Healthcare technology including AI diagnostics, telemedicine, and smart devices is changing patient experiences.",
            images: ["health-tech.webp"],
            category: categoryMap["health-wellness"],
            tags: [
                tagMap["artificial-intelligence"],
                tagMap["future-technology"]
            ],
            author: author._id,
            status: "published",
            views: 236
        },


        // =====================================
        // TRAVEL
        // =====================================


        {
            title: "Best Travel Experiences Around The World",
            slug: "best-travel-experiences-world",
            excerpt: "Discover unforgettable destinations.",
            description:
                "Travel creates opportunities to explore cultures, landscapes, and new perspectives.",
            images: ["travel.webp"],
            category: categoryMap["travel"],
            tags: [
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 219
        },


        {
            title: "Smart Travel Planning Guide",
            slug: "smart-travel-planning-guide",
            excerpt: "Plan better trips with modern tools.",
            description:
                "Modern travelers use technology, research, and planning strategies to create better journeys.",
            images: ["travel-planning.webp"],
            category: categoryMap["travel"],
            tags: [
                tagMap["future-technology"]
            ],
            author: author._id,
            status: "published",
            views: 156
        },


        // =====================================
        // LIFESTYLE
        // =====================================


        {
            title: "Minimal Living And Modern Lifestyle",
            slug: "minimal-living-modern-lifestyle",
            excerpt: "Creating a simpler and more meaningful life.",
            description:
                "Minimal living focuses on reducing distractions and improving quality of life.",
            images: ["minimal.webp"],
            category: categoryMap["lifestyle"],
            tags: [
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 121
        },


        {
            title: "Remote Work Culture In 2026",
            slug: "remote-work-culture-2026",
            excerpt: "How remote work continues evolving.",
            description:
                "Remote work has transformed collaboration, productivity, and workplace culture worldwide.",
            images: ["remote-work.webp"],
            category: categoryMap["lifestyle"],
            tags: [
                tagMap["cloud-computing"],
                tagMap["innovation"]
            ],
            author: author._id,
            status: "published",
            views: 287
        },


        // =====================================
        // SCIENCE
        // =====================================


        {
            title: "Scientific Discoveries Changing The World",
            slug: "scientific-discoveries-changing-world",
            excerpt: "Important discoveries shaping humanity.",
            description:
                "Scientific research continues creating breakthroughs in medicine, technology, and environmental solutions.",
            images: ["science.webp"],
            category: categoryMap["science"],
            tags: [
                tagMap["future-technology"]
            ],
            author: author._id,
            status: "published",
            views: 198
        }

    ];

    const result =
        await Post.insertMany(posts);


    console.log(
        `✅ ${result.length} Blog posts seeded`
    );


    return result;

}