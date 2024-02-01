import { useSelector } from "react-redux";

const ListToDo = () => {
    const todos = useSelector((state: any) => state.todos);
    console.log(todos);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Description</th>
                    </tr>
                   
                </thead>
                <tbody>
               
                    {todos.map((val: any, id: number) => 
                        
                            <tr key={id}>
                            <td>{id}</td>
                            <td>{val.title}</td>
                            {/* <td>{val.description}</td> */}
                        </tr>
                        
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListToDo;