import prisma from "@/db";
import { error } from "console";
import Link from "next/link";
import { redirect } from "next/navigation";

 async function submitFunction(data:FormData){
    "use server"
    const name=data.get("name")?.valueOf()
    if(typeof name !="string" || name.length === 0){
        console.log(name)
        throw new Error("❌Invalid entry!")
    }
    //window.alert("Submited!💯🏆💪")
    await prisma.todo.create({data:{name, complete:false}})
    console.log("Submited!💯🏆💪")
    redirect("/")
} 

export default function New(){
    return(
    <>
      
    <h1 className="flex justify-between items-center p-4 bg-blue-500 text-white">To Do List</h1><br/>
    <form className="flex gap-2 flex-row" action={submitFunction}>
    <input type="text" name="name" className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
    />
    <div className="flex gap-2 items-center">
        <Link href=".." className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-blue-100">Cancel</Link>
        <button type="submit" className="px-4 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-blue-100">Submit</button>
    </div>
    </form>
    </>
    );
}