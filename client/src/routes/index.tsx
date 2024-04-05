import {
    createBrowserRouter
} from 'react-router-dom'
import { Login } from './Login'
import { Home } from './Home'
// import Root from '../Root'

const router = createBrowserRouter(
    [
        { path: "/", element: <Home />, },
        { path: "/login", element: <Login /> },
        // { path: "*", element: <Root /> },
    ]
)



export default router