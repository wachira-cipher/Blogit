export default function BlogMediaSection({ form, setForm }) {

  const images = form.images || [];


  const handleUpload = (e) => {

    const files = Array.from(e.target.files || []);

    if (!files.length) return;


    setForm(prev => ({
      ...prev,

      images: [
        ...(prev.images || []),
        ...files.map(file => ({
          id: crypto.randomUUID(),
          file,
          preview: URL.createObjectURL(file)
        }))
      ]

    }));

  };



  const removeImage = (id) => {

    setForm(prev => ({
      ...prev,

      images: prev.images.filter(
        img => img.id !== id
      )

    }));

  };



  return (

    <div className="accordion-item border mb-4">


      <h2 className="accordion-header">

        <div
          className="accordion-button collapsed bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#SpacingThree"
        >

          <h5>
            <i data-feather="image"
              className="text-primary me-2"
            />

            Images

          </h5>

        </div>

      </h2>



      <div
        id="SpacingThree"
        className="accordion-collapse collapse show"
      >


        <div className="accordion-body border-top">


          <div className="image-upload image-upload-two">


            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleUpload}
            />


            <div className="image-uploads">

              <i
                data-feather="plus-circle"
                className="plus-down-add me-0"
              />

              <h4>Add Images</h4>

            </div>


          </div>



          <div className="add-choosen">


          {
            images.map(img=>(

              <div
                className="phone-img"
                key={img.id}
              >

                <img
                  src={img.preview}
                  alt="blog"
                />


                <a
                  href="#"
                  onClick={(e)=>{
                    e.preventDefault();
                    removeImage(img.id);
                  }}
                >

                  <i
                    data-feather="x"
                    className="x-square-add remove-product"
                  />

                </a>


              </div>

            ))
          }


          </div>


        </div>


      </div>


    </div>

  );
}