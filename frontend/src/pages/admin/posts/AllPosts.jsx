import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getPosts } from "../../../api/post.api";
import { getCategories } from "../../../api/category.api";
import { getTags } from "../../../api/tag.api";

import BlogHeader from "./AllpostParts/BlogHeader";
import BlogFilters from "./AllpostParts/BlogFilters";
import BlogGrid from "./AllpostParts/BlogGrid";
import BlogDeleteModal from "./AllpostParts/BlogDeleteModal";
import BlogFooter from "./AllpostParts/BlogFooter";
import BlogEditModal from "./AllpostParts/BlogEditModal";


export default function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editPost, setEditPost] = useState(null);
    const [deletePostItem, setDeletePostItem] = useState(null);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);



    useEffect(() => {

        fetchPosts();
        fetchCategories();
        fetchTags();
    }, []);



    const fetchPosts = async () => {

        try {

            setLoading(true);

            const res = await getPosts();

            setPosts(res.data.posts || []);

        }
        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed loading posts"
            );

        }
        finally {

            setLoading(false);

        }

    };
    const fetchCategories = async () => {
        try {
            const res = await getCategories();
            setCategories(res.data || []);
        } catch (err) {
            console.log("Failed categories");
        }
    };

    const fetchTags = async () => {
        try {
            const res = await getTags();
            setTags(res.data || []);
        } catch (err) {
            console.log("Failed tags");
        }
    };


    return (

        <>

            <BlogHeader />


            <BlogFilters />


            {
                loading ?

                    <div className="text-center p-5">
                        Loading posts...
                    </div>

                    :

                    <BlogGrid

                        posts={posts}

                        onEdit={(post) => {
                            setEditPost(post)
                        }}

                        onDelete={(post) => {
                            setDeletePostItem(post)
                        }}

                    />

            }


            <BlogEditModal
                post={editPost}
                categories={categories}
                tags={tags}
                onUpdated={(updated) => {
                    setPosts(prev =>
                        prev.map(p => p._id === updated._id ? updated : p)
                    );
                }}
            />


            <BlogDeleteModal
                post={deletePostItem}
            />





        </>

    )

}