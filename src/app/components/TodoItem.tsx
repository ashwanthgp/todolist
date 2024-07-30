"use client"

type TodoProps={
    id: string
    name: string
    complete: boolean
    toggleTodo: (id:String ,complete:boolean) => void
}


export function TodoItem({id,name,complete,toggleTodo} : TodoProps){
    return(<>
    <li className="flex gap-1 items-center">
    <input id={id} type="checkbox" className="cursor-pointer peer" 
        defaultChecked={complete} onChange={event => toggleTodo(id, event.target.checked)}/>
    <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 opacity-80">
        {name}</label>
    </li>
    <br/>
    </>);
}