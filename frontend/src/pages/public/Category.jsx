import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import PageTitle from "./PageTitle";
import Pagination from "./Pagination";
import CategoryPosts from "./category/CategoryPosts";
import Sidebar from "./category/Sidebar";

import { getCategoryPosts } from "../../api/category.api";


export default function CategoryPage() {

    const { slug } = useParams();

    const [category, setCategory] = useState(null);

    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 1,
    });

    const [showSpinner, setShowSpinner] = useState(false);
    const [spinnerFinished, setSpinnerFinished] = useState(false);

    useEffect(() => {

        if (
            pagination.totalPages <= 1 &&
            posts.length > 0
        ) {

            setShowSpinner(true);
            setSpinnerFinished(false);

            const timer = setTimeout(() => {

                setShowSpinner(false);
                setSpinnerFinished(true);

            }, 5000);

            return () => clearTimeout(timer);

        }

        setShowSpinner(false);
        setSpinnerFinished(false);

    }, [posts, pagination.totalPages]);

    // Reset page whenever category changes
    useEffect(() => {

        setPage(1);

    }, [slug]);


    useEffect(() => {

        const loadCategory = async () => {

            try {

                const res = await getCategoryPosts(slug, page);


                setCategory(
                    res.data.category
                );


                setPosts(
                    res.data.posts
                );

                setPagination(res.data.pagination);


            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };


        loadCategory();


    }, [slug, page]);



    if (loading) {

        return (
            <div className="container py-5">
                Loading category...
            </div>
        );

    }



    return (
        <>

            <br />
            <br />
            <br />


            <PageTitle

                title={
                    category?.name || "Category"
                }

                subtitle={
                    `Dive into our ${category?.name || "featured"} category and discover fresh perspectives, practical guides, inspiring stories, and valuable insights created for curious minds and passionate readers.`
                }


                breadcrumbs={[
                    {
                        label:
                            category?.name,
                        active: true
                    }
                ]}

            />



            <div className="container">

                <div className="row gy-4">


                    {/* POSTS */}

                    <div className="col-lg-8">


                        {
                            posts.length > 0 ?

                                <CategoryPosts
                                    posts={posts}
                                />

                                :

                                <p>
                                    No posts found in this category.
                                </p>

                        }



                        {
                            pagination.totalPages > 1 ? (

                                <Pagination
                                    currentPage={pagination.page}
                                    totalPages={pagination.totalPages}
                                    onPageChange={setPage}
                                />

                            ) : showSpinner ? (

                                <div className="text-center py-5">

                                    <ClipLoader
                                        size={20}
                                    />

                                    <p className="mt-3 text-muted">
                                        Looking for more posts...
                                    </p>

                                </div>

                            ) : spinnerFinished ? (

                                <div className="alert alert-light text-center mt-4">

                                    <i className="bi bi-journal-x me-2"></i>

                                    No more blog posts available in this category.

                                </div>

                            ) : null
                        }


                    </div>



                    {/* SIDEBAR */}

                    <Sidebar />


                </div>

            </div>


        </>
    );

}