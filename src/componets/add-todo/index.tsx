import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css';
import { useDispatch } from 'react-redux';
import {addTodo} from '../../store-manager/todo/reducer'
import {todoService} from '../../services/todo.service';


const AddToDo = () =>{
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const addTodo2 = () => {
        dispatch(addTodo({title:todo}));
        const res = todoService.addTodos({title:todo});
        console.log(res);
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Todo Title" variant="outlined" className='todo-input' onChange={(e)=>{setTodo(e.target.value)}}/>
            <Button variant="contained" className='todo-btn' onClick={addTodo2}>Add Todo</Button>
        </div>
    )
}

export default AddToDo;