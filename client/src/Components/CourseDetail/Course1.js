import NavBarContent from "../NavBar/NavBarContent";
import Footer from "../Home/components/Footer";
import {message} from 'antd' ;
import {useState,useEffect} from 'react' ;

const Course1 = () => {
   
    const [mainData,setMainData] = useState([]) ;
    const [isLoading , setIsLoading] = useState(true) ; // set initial loading state to true
    const [courseDomain, setCourseDomain] = useState('') ;

    useEffect(() => {
         const fetchdata = async () => {
             try {
                  var fetchResponse = await fetch(`http://localhost:3500/v10/api/coursedetails/getAllDetails`) ;
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
        <div className = "Course1"> 
        <NavBarContent/>
        <div>
        <ul className = "courseSet">
        <li className = "courseSetItem">      
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
        </li> 
        </ul> 
        </div>
       <Footer/>
        </div>
    )
}

export default Course1 ;
