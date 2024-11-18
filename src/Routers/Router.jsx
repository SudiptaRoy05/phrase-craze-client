import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Letslearn from '../Components/Letslearn/Letslearn'
import Banner from '../Components/Banner/Banner'
import Lessonpage from '../Components/Lessonpage/Lessonpage'
import Tutorials from '../Components/Tutorials/Tutorials'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
        // errorElement:<h1>error</h1>,
        children:[
            {
                path:"/",
                element:<Banner></Banner>,
            },
            {
                path:'/letslearn',
                element:<Letslearn></Letslearn>
            },
            {
                path:'/lesson/:lesson_on',
                element:<Lessonpage></Lessonpage>,
                loader:()=> fetch('/german_vocabulary.json'),
            },
            {
                path:'/tutorials',
                element:<Tutorials></Tutorials>,
            }
        ]
    }
])


export default router