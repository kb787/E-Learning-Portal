import NavBarContent from "../NavBar/NavBarContent";
import Footer from "../Home/components/Footer";
import {message} from 'antd' ;
import {useState,useEffect} from 'react' ;
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
const CourseDetails = ({match}) => {

    const [mainData,setMainData] = useState('') ;
    const [isLoading,setIsLoading] = useState('') ;
    const courseDomain = match.params.courseDomain ;
   
    useEffect(() => {
        const fetchdata = async () => {
            try {
                 var fetchResponse = await fetch(`http://localhost:3500/v8/api/coursedetails/getCourseDetail?domain=${courseDomain}`) ;
                 var jsonData = await fetchResponse.json() ;
                 if(jsonData) {
                     setMainData(jsonData) ; // directly set jsonData to mainData
                     setIsLoading(false) ; // set loading state to false after data is fetched
                     console.log(jsonData) ;
                 }
                 else {
                     message.error("Unable to get the data object") ;
                 } 
            }
            catch(error) {
               console.log(error) ;
               message.error("Server side error occured") ;
            }
        }
        fetchdata() ;
        window.scroll(0,0) ;
   },[courseDomain])

   if(isLoading) { // if loading state is true, render loading message
       return <div>Loading...</div>
   }
      
   return ( 
    <div className = "CourseDetails">
        <NavBarContent/>
        { 
             mainData?.map((data) =>
            <div className = "courseDetailPage">  
                <div className = "detailHeading">
                    {data.courseHeading}
                </div>
                <div className = "detailParagraph">
                    {data.courseParagraph}
                </div>
                <div className = "detailVideoLink">
                    {data.courseVideoLink}  
                </div>       
            </div>      
            )
        } 
    </div>

   ) 
}

export default CourseDetails ;