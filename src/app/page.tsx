import prisma from "@/db";
import Link from "next/link";
import { todo } from "node:test";
import { TodoItem } from "./components/TodoItem";

async function toggleTodo(id:string,complete:boolean){

  "use server"
  await prisma.todo.update({where:{id},data:{complete}})
  console.log(id,complete)
  

}

export default async function Home(){
  const todos=await prisma.todo.findMany();
  //await prisma.todo.create({data:{name:"Study",complete:false}})
  
  return(
    <>
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">  
    <h1>To Do List</h1>
    <nav>
    <Link href="/new" className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-blue-100">New</Link>
    </nav>
    </header><br/>
    <ul className="pl-5">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo}  toggleTodo={toggleTodo}/>
      ))}
    </ul>
    </>
    
  )
}