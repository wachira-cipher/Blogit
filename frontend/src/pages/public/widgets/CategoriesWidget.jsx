import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoriesWithCount } from "../../../api/category.api";


export default function CategoriesWidget(){

  const [categories,setCategories]=useState([]);
  const [loading,setLoading]=useState(true);


  useEffect(()=>{


    const loadCategories=async()=>{

      try{

        const res = await getCategoriesWithCount();


        if(res.data.success){

          setCategories(
            res.data.categories
          );

        }


      }catch(error){

        console.log(error);

      }
      finally{

        setLoading(false);

      }

    };


    loadCategories();


  },[]);



  return (

    <div className="categories-widget widget-item">


      <h3 className="widget-title">
        Categories
      </h3>



      <ul className="mt-3">


        {
          loading && (

            <li>
              Loading categories...
            </li>

          )
        }



        {
          !loading &&
          categories.length===0 && (

            <li>
              No categories found
            </li>

          )
        }



        {
          categories.map((cat)=>(


            <li key={cat._id}>


              <Link
                to={`/category/${cat.slug}`}
              >

                {cat.name}

                <span>
                  ({cat.count})
                </span>


              </Link>


            </li>


          ))
        }


      </ul>


    </div>

  );

}