import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageTitle from "./PageTitle";
import BlogContent from "./blog/BlogContent";
import BlogAuthor from "./blog/BlogAuthor";
import BlogComments from "./blog/BlogComments";
import CommentForm from "./blog/CommentForm";
import Sidebar from "./category/Sidebar";

import { getPost } from "../../api/post.api";


export default function BlogDetails() {


  const { slug } = useParams();


  const [post, setPost] = useState(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const loadPost = async () => {

      try {

        const res = await getPost(slug);

        setPost(res.data);


      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }


    };


    loadPost();


  }, [slug]);



  if (loading) {

    return (

      <div className="container py-5">

        Loading post...

      </div>

    );

  }



  if (!post) {

    return (

      <div className="container py-5">

        Post not found

      </div>

    );

  }



  return (
    <>

      <br />
      <br />
      <br />


      <PageTitle
        title={post.title}
        breadcrumbs={[
          {
            label: post.title,
            active: true
          }
        ]}
      />



      <div className="container">


        <div className="row">


          {/* LEFT CONTENT */}

          <div className="col-lg-8">


            <section
              id="blog-details"
              className="blog-details section"
            >

              <div
                className="container"
                data-aos="fade-up"
              >

                <article className="article">


                  <BlogContent
                    post={post}
                  />


                </article>


              </div>


            </section>



            <BlogAuthor
              post={post}
            />


            <BlogComments
              post={post}
            />


            <CommentForm
              post={post}
            />



          </div>




          {/* RIGHT SIDEBAR */}


          <Sidebar
            post={post}
          />



        </div>


      </div>



    </>
  );

}