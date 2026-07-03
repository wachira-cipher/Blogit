import PageTitle from "./PageTitle";
import Pagination from "./Pagination";
import CategoryPosts from "./category/CategoryPosts";
import Sidebar from "./category/Sidebar";

export default function CategoryPage() {
    return (
        <>
            <br />
            <br />
            <br />
            {/* PAGE TITLE */}
            <PageTitle
                title="Blog Category"
                subtitle="Browse posts by category and discover trending topics."
                breadcrumbs={[
                    { label: "Category", path: "/category" }
                ]}
            />

            {/* CONTENT WRAPPER */}
            <div className="container">
                <div className="row gy-4">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-8">

                        <CategoryPosts />

                        {/* Pagination */}
                       <Pagination/>

                    </div>

                    {/* RIGHT SIDEBAR */}

                    <Sidebar />


                </div>
            </div>

        </>
    );
}