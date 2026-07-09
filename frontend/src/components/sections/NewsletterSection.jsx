import { useState } from "react";

export default function NewsletterSection() {


  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  const handleSubscribe = (e) => {

    e.preventDefault();


    if(!email){

      setMessage("Please enter your email address.");

      return;

    }


    setLoading(true);


    // Temporary frontend handling
    setTimeout(()=>{


      setLoading(false);

      setMessage(
        "Your subscription request has been sent. Thank you!"
      );


      setEmail("");


    },1000);



  };



  return (

    <section 
      id="call-to-action" 
      className="call-to-action section"
    >

      <div 
        className="container" 
        data-aos="fade-up" 
        data-aos-delay="100"
      >


        <div className="row gy-4 justify-content-between align-items-center">


          <div className="col-lg-6">


            <div 
              className="cta-content" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >


              <h2>
                Subscribe to our newsletter
              </h2>



              <p>

                Stay updated with the latest articles,
                technology trends, tutorials and stories
                from the Blogit community.

              </p>



              <form
                className="cta-form"
                onSubmit={handleSubscribe}
              >


                <div className="input-group mb-3">


                  <input

                    type="email"

                    className="form-control"

                    placeholder="Email address..."

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                  />



                  <button

                    className="btn btn-primary"

                    type="submit"

                    disabled={loading}

                  >

                    {
                      loading
                      ?
                      "Loading..."
                      :
                      "Subscribe"
                    }


                  </button>



                </div>




                {
                  message &&
                  <div className="sent-message">

                    {message}

                  </div>
                }




              </form>



            </div>


          </div>





          <div className="col-lg-4">


            <div 
              className="cta-image" 
              data-aos="zoom-out" 
              data-aos-delay="200"
            >


              <img

                src="/assets/blog/img/cta/cta-1.webp"

                alt="Newsletter"

                className="img-fluid"

              />


            </div>


          </div>




        </div>


      </div>


    </section>

  );

}