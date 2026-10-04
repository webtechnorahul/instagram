import {createBrowserRouter} from 'react-router-dom'
import Login from '../features/auth/pages/Login'
import Register from '../features/auth/pages/Register'
import Dashboard from '../features/dashboard/pages/Dashboard'
import AllPost from '../features/posts/pages/AllPost'
import Protected from '../features/auth/pages/Protected'
import CreatePost from '../features/posts/pages/CreatePost'
import Post from '../features/posts/components/Post'
import Chat from '../features/chat/pages/Chat'
import Search from '../features/search/pages/Search'
import Profile from '../features/profile/pages/Profile'

// Maps public auth pages and authenticated app sections to their page components.
export const router=createBrowserRouter([
    {
        // Shows the login page at the site root.
        path:'/',
        element:<Login/>
    },
    {
        // Shows the login page at its explicit URL.
        path:'/login',
        element:<Login/>
    },
    {
        // Shows the account registration form.
        path:'/register',
        element:<Register/>
    },
    {
        // Wraps app pages with the authentication guard and shared navigation.
        path:'/',
        element:<Protected/>,
        children:[
            {
                // Opens the signed-in user's dashboard feed.
                path:'dashboard',
                element:<Dashboard/>
            },
            {
                // Opens the all-posts feed.
                path:'posts',
                element:<AllPost/>
            },
            {
                // Opens the form for creating a post.
                path:'/createPost',
                element:<CreatePost/>
            },
            {
                // Opens the chat section.
                path:'/chat',
                element:<Chat/>
            },
            {
                // Opens the profile section placeholder.
                path:'/profile',
                element:<Profile/>
            },
            {
                // Opens the search section placeholder.
                path:"/search",
                element:<Search/>
            }
        ]
    }
])
