import React from "react";

export default function Pagination({

    currentPage=1,

    totalPages=1,

    onPageChange

}){

    if(totalPages<=1){

        return null;

    }

    const pages=[];

    let start=Math.max(
        1,
        currentPage-2
    );

    let end=Math.min(
        totalPages,
        currentPage+2
    );

    if(start>1){

        pages.push(1);

        if(start>2){

            pages.push("...");

        }

    }

    for(
        let i=start;
        i<=end;
        i++
    ){

        pages.push(i);

    }

    if(end<totalPages){

        if(end<totalPages-1){

            pages.push("...");

        }

        pages.push(totalPages);

    }

    return(

<section
id="pagination-2"
className="pagination-2 section"
>

<div className="container">

<div className="d-flex justify-content-center">

<ul className="pagination-list">

<li>

<a

href="#"

onClick={(e)=>{

e.preventDefault();

if(currentPage>1){

onPageChange(currentPage-1);

}

}}

aria-label="Previous"

>

<i className="bi bi-chevron-left"></i>

</a>

</li>

{

pages.map((page,index)=>{

if(page==="..."){

return(

<li
key={index}
className="disabled"
>

<span>...</span>

</li>

);

}

return(

<li
key={page}
>

<a

href="#"

className={
page===currentPage
?
"active"
:
""
}

onClick={(e)=>{

e.preventDefault();

onPageChange(page);

}}

>

{page}

</a>

</li>

);

})

}

<li>

<a

href="#"

onClick={(e)=>{

e.preventDefault();

if(currentPage<totalPages){

onPageChange(currentPage+1);

}

}}

aria-label="Next"

>

<i className="bi bi-chevron-right"></i>

</a>

</li>

</ul>

</div>

</div>

</section>

    );

}