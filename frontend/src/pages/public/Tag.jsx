import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import PageTitle from "./PageTitle";
import Pagination from "./Pagination";
import TagPosts from "./tag/TagPosts";
import Sidebar from "./category/Sidebar";

import { getTagPosts } from "../../api/tag.api";

export default function Tag() {

    const { slug } = useParams();

    const [tag, setTag] = useState(null);

    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);

    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 1,
    });

    const [showSpinner, setShowSpinner] = useState(false);

    const [spinnerFinished, setSpinnerFinished] = useState(false);

    // Reset page when tag changes
    useEffect(() => {

        setPage(1);

    }, [slug]);

    // Spinner when no pagination exists
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

    // Load posts
    useEffect(() => {

        const loadTag = async () => {

            setLoading(true);

            try {

                const res = await getTagPosts(
                    slug,
                    page
                );

                setTag(res.data.tag);

                setPosts(res.data.posts);

                setPagination(
                    res.data.pagination
                );

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        loadTag();

    }, [slug, page]);

    if (loading) {

        return (

            <div className="container py-5 text-center">

                Loading tag...

            </div>

        );

    }

    return (

        <>

            <br />
            <br />
            <br />

            <PageTitle

                title={`${tag?.name || "Tag"}`}

                subtitle={`Explore articles tagged with "${tag?.name || "this topic"}". Discover practical tutorials, expert insights, opinions, and related stories curated around this subject.`}

                breadcrumbs={[
                    {
                        label: `#${tag?.name}`,
                        active: true
                    }
                ]}

            />

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-8">

                        {

                            posts.length > 0 ?

                                <TagPosts
                                    posts={posts}
                                />

                                :

                                <div className="alert alert-light">

                                    No blog posts found for this tag.

                                </div>

                        }

                        {

                            pagination.totalPages > 1 ?

                                (

                                    <Pagination

                                        currentPage={
                                            pagination.page
                                        }

                                        totalPages={
                                            pagination.totalPages
                                        }

                                        onPageChange={
                                            setPage
                                        }

                                    />

                                )

                                :

                                showSpinner ?

                                    (

                                        <div className="text-center py-5">

                                            <ClipLoader size={20} />

                                            <p className="mt-3 text-muted">

                                                Looking for more posts...

                                            </p>

                                        </div>

                                    )

                                    :

                                    spinnerFinished ?

                                        (

                                            <div className="alert alert-light text-center mt-4">

                                                <i className="bi bi-tags me-2"></i>

                                                No more blog posts available for this tag.

                                            </div>

                                        )

                                        :

                                        null

                        }

                    </div>

                    <Sidebar />

                </div>

            </div>

        </>

    );

}