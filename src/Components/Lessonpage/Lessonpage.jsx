import { useLoaderData, useParams } from "react-router-dom";
import Wordcard from "../Wordcard/Wordcard";

export default function Lessonpage() {
    const { lesson_on } = useParams(); 
    const data = useLoaderData(); 
    
  
    const filterData = data.filter(item => item.lesson_no === Number(lesson_on));
    // console.log("Filtered Data:", filterData); 

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-10/12 lg:w-11/12 lg:pl-8 mx-auto"> 
            {
                filterData.length > 0 ? (
                    filterData.map(item => <Wordcard key={item.id} item={item}></Wordcard>)
                ) : (
                    <p>No data found for this lesson.</p>
                )
            }
        </div>
    );
}
