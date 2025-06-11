import Main from "./components/Main/Main";
import Todos from "./components/Main/Todos/Todos"
import NotFound from "./components/NotFound/NotFound";
import UserDetail from "./components/Main/UserDetail/UserDetail";
let routes = [
    {path:"/", element:<div className="bg-slate-500 p-20 mb-64 w-3/4 text-center m-auto"><h1>home page</h1></div>},
    {path:"users", element:<Main />},
    {path:"/users/:id", element:<UserDetail />},
    {path:"/todos", element:<Todos/>},
    {path:"/about", element:<div className="bg-slate-500 p-20 mb-64 w-3/4 text-center m-auto"><h1>this is about us page</h1></div>},
    {path:"*", element:<NotFound />},
]
export default routes