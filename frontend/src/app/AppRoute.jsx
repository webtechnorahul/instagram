import {createBrowserRouter} from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import Register from '../features/auth/pages/Register'
import Dashboard from '../features/dashboard/pages/Dashboard'
import AllPost from '../features/posts/pages/AllPost'
import Protected from '../features/auth/pages/Protected'
import CreatePost from '../features/posts/pages/CreatePost'
import Post from '../features/posts/components/Post'

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Post/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/',
        element:<Protected/>,
        children:[
            {
                path:'dashboard',
                element:<Dashboard/>
            },
            {
                path:'posts',
                element:<AllPost/>
            },
            {
                path:'/createPost',
                element:<CreatePost/>
            },
            {
                path:'/chat',
                element:<h1>chat</h1>
            },
            {
                path:'/profile',
                element:<h1>profile</h1>
            },
            {
                path:"/search",
                element:<h1>search</h1>
            }
        ]
    }
])
