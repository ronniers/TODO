import {useState} from 'react'
import {TextField, IconButton, Select, MenuItem} from '@material-ui/core'
import {AddBox} from '@material-ui/icons'

const Fields = props => {
    const [task, setTask] = useState('');

    const updateTodoList = e => {
        e.preventDefault();
        if (task) {
            props.setTodoList([...props.todoList, {
                todo: task,
                done: false
            }]);
            setTask('');
        }
    }

    const handleDisplayChange = e => {
        props.setDisplay(e.target.value);
    }

    return (
        <div className='fields'>
            <TextField name="task"
                    className='todo-input'
                    onChange={e => setTask(e.target.value) }
                    value={task} />
            <IconButton 
                    className='todo-button'
                    onClick={updateTodoList} 
                    color="primary" 
                    aria-label="Add Task" 
                    component="span">
                <AddBox />
            </IconButton>
            <Select
                    value={props.display}
                    onChange={handleDisplayChange}
                    className='todo-display' >
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>Completed</MenuItem>
                <MenuItem value={3}>In Progress</MenuItem>
            </Select>
        </div>
    );
}

export default Fields;