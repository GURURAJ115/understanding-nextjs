import axios from "axios";

async function getBlogs() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return response.data;
}

export default async function Blogs(){
    const blogs = await getBlogs();
    
    return <div>
        {blogs.map((blog:ITodo) => <Todo title={blog.title} completed={blog.completed} />)}
    </div>
} 

//this will go directly into the html , will not follow waterfall model like react, nextjs does serverside rendering and put this in html and then sends it to the browser, which inturn leads in high rating of SEo.

interface ITodo{
    title: string;
    completed: boolean;
}

function Todo({title, completed}: ITodo){
    return <div>
        {title} {completed ? "done!":"not done"}
    </div>
}