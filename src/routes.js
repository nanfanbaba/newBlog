import BlogIndex from './components/BlogIndex'
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'

export default [
      {path:"/",component:BlogIndex},
      {path:"/add",component:AddBlog},
      {path:"/blog/:id",component:ShowBlog}
    ]