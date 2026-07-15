import {
createContext,
useContext,
useEffect,
useState
} from "react";

import {
getHomePosts
} from "../api/post.api";


const HomeContext=createContext();


export function HomeProvider({children}){


const [homeData,setHomeData]=useState({

heroPosts:[],
featuredPosts:[],
latestPosts:[]

});


const loadHome=async()=>{

try{

const res=await getHomePosts();


if(res.data.success){

setHomeData(res.data);

}

}catch(error){

console.log(error);

}

};



useEffect(()=>{

loadHome();


},[]);



return(

<HomeContext.Provider value={homeData}>

{children}

</HomeContext.Provider>

);


}



export const useHome=()=>useContext(HomeContext);