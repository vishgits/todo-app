export const todoService = {
    addTodos : addTodo
}

async function addTodo(todoPayload:any) {
    const res = await fetch('http://localhost:5000/api/v1/todo/add',{
        method: 'POST',
        body: JSON.stringify(todoPayload),
        headers:{
            "Content-type" : "application/json;chartset=UTF-8"
        }
    })
}