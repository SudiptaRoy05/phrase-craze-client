import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Wordcard from "../Wordcard/Wordcard";

export default function Lessonpage() {
    const { lesson_on } = useParams(); 
    const data = useLoaderData(); 

    // const [word, setWord] = useState([]);

  
    // useEffect(() => {
    //     setWord(data);
    // }, [data]); 

    
    const filterData = data.filter(item => item.lesson_no === parseInt(lesson_on));
    console.log(Array.isArray(filterData))


    return (
        <div className="grid md:grid-cols-4 w-10/12 mx-auto"> 
            {
                filterData.map(item => <Wordcard key={item.id} item={item}></Wordcard>)
            }
        </div>
    );
}
