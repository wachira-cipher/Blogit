export default function BlogComments() {
  return (
    <section id="blog-comments" className="blog-comments section">

      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
      >

        <div className="blog-comments-3">

          <div className="section-header">
            <h3>
              Discussion{" "}
              <span className="comment-count">
                (8)
              </span>
            </h3>
          </div>


          <div className="comments-wrapper">


            {/* Comment 1 */}
            <article className="comment-card">

              <div className="comment-header">

                <div className="user-info">

                  <img
                    src="/assets/blog/img/person/person-f-9.webp"
                    alt="User avatar"
                    loading="lazy"
                  />

                  <div className="meta">

                    <h4 className="name">
                      Sarah Williams
                    </h4>

                    <span className="date">
                      <i className="bi bi-calendar3"></i>
                      February 13, 2025
                    </span>

                  </div>

                </div>

              </div>


              <div className="comment-content">
                <p>
                  Proin iaculis purus consequat sem cure digni ssim
                  donec porttitora entum suscipit rhoncus.
                  Accusantium quam, ultricies eget id, aliquam eget
                  nibh et. Maecen aliquam, risus at semper.
                </p>
              </div>


              <div className="comment-actions">

                <button className="action-btn like-btn">
                  <i className="bi bi-hand-thumbs-up"></i>
                  <span>12</span>
                </button>


                <button className="action-btn reply-btn">
                  <i className="bi bi-reply"></i>
                  <span>Reply</span>
                </button>

              </div>

            </article>




            {/* Comment 2 */}
            <article className="comment-card">


              <div className="comment-header">

                <div className="user-info">

                  <img
                    src="/assets/blog/img/person/person-m-9.webp"
                    alt="User avatar"
                    loading="lazy"
                  />


                  <div className="meta">

                    <h4 className="name">
                      James Cooper
                    </h4>

                    <span className="date">
                      <i className="bi bi-calendar3"></i>
                      February 13, 2025
                    </span>

                  </div>

                </div>

              </div>



              <div className="comment-content">

                <p>
                  Quisque ut nisi. Donec mi odio, faucibus at,
                  scelerisque quis, convallis in, nisi.
                  Suspendisse non nisl sit amet velit hendrerit rutrum.
                </p>

              </div>



              <div className="comment-actions">

                <button className="action-btn like-btn">

                  <i className="bi bi-hand-thumbs-up"></i>

                  <span>
                    8
                  </span>

                </button>



                <button className="action-btn reply-btn">

                  <i className="bi bi-reply"></i>

                  <span>
                    Reply
                  </span>

                </button>

              </div>





              {/* Reply Thread */}

              <div className="reply-thread">


                {/* Reply 1 */}

                <article className="comment-card reply">


                  <div className="comment-header">

                    <div className="user-info">


                      <img
                        src="/assets/blog/img/person/person-f-9.webp"
                        alt="User avatar"
                        loading="lazy"
                      />


                      <div className="meta">

                        <h4 className="name">
                          Emily Parker
                        </h4>


                        <span className="date">

                          <i className="bi bi-calendar3"></i>

                          February 13, 2025

                        </span>


                      </div>


                    </div>


                  </div>




                  <div className="comment-content">

                    <p>
                      Cras ultricies mi eu turpis hendrerit fringilla.
                      Vestibulum ante ipsum primis in faucibus orci
                      luctus et ultrices posuere cubilia Curae.
                    </p>

                  </div>




                  <div className="comment-actions">


                    <button className="action-btn like-btn">

                      <i className="bi bi-hand-thumbs-up"></i>

                      <span>
                        5
                      </span>

                    </button>



                    <button className="action-btn reply-btn">

                      <i className="bi bi-reply"></i>

                      <span>
                        Reply
                      </span>

                    </button>


                  </div>


                </article>






                {/* Reply 2 */}

                <article className="comment-card reply">


                  <div className="comment-header">


                    <div className="user-info">


                      <img
                        src="/assets/blog/img/person/person-f-7.webp"
                        alt="User avatar"
                        loading="lazy"
                      />


                      <div className="meta">


                        <h4 className="name">
                          Daniel Brown
                        </h4>



                        <span className="date">

                          <i className="bi bi-calendar3"></i>

                          February 13, 2025

                        </span>


                      </div>


                    </div>


                  </div>




                  <div className="comment-content">

                    <p>
                      Nam commodo suscipit quam. Vestibulum
                      ullamcorper mauris at ligula.
                      Fusce fermentum odio nec arcu.
                    </p>

                  </div>



                  <div className="comment-actions">


                    <button className="action-btn like-btn">

                      <i className="bi bi-hand-thumbs-up"></i>

                      <span>
                        3
                      </span>

                    </button>



                    <button className="action-btn reply-btn">

                      <i className="bi bi-reply"></i>

                      <span>
                        Reply
                      </span>

                    </button>


                  </div>



                </article>


              </div>


            </article>





            {/* Comment 3 */}

            <article className="comment-card">


              <div className="comment-header">


                <div className="user-info">


                  <img
                    src="/assets/blog/img/person/person-m-6.webp"
                    alt="User avatar"
                    loading="lazy"
                  />


                  <div className="meta">


                    <h4 className="name">
                      Rachel Adams
                    </h4>



                    <span className="date">

                      <i className="bi bi-calendar3"></i>

                      February 13, 2025

                    </span>


                  </div>


                </div>


              </div>




              <div className="comment-content">

                <p>
                  Vivamus elementum semper nisi.
                  Aenean vulputate eleifend tellus.
                  Aenean leo ligula, porttitor eu,
                  consequat vitae.
                </p>

              </div>




              <div className="comment-actions">


                <button className="action-btn like-btn">

                  <i className="bi bi-hand-thumbs-up"></i>

                  <span>
                    6
                  </span>

                </button>



                <button className="action-btn reply-btn">

                  <i className="bi bi-reply"></i>

                  <span>
                    Reply
                  </span>

                </button>


              </div>



            </article>



          </div>

        </div>


      </div>


    </section>
  );
}