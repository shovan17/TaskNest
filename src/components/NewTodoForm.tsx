import React, {useState} from "react";

export const NewTodoForm: React.FC<{addTodo: Function}> = (props) => {

    const[description, setDescription] =useState('');
    const[assigned, setAssigned] = useState('');

    const submitTodo =() => {
        if(description!== '' && assigned!==''){
            props.addTodo(description,assigned);
            setDescription('');
            setAssigned('');
        }
    }

    // const descriptionChange = (event) =>{
    //     console.log(event.target.value);
    //     setDescription(event.target.value);
    // }

    // const assignedChange =(event)=>{
    //     console.log(event.target.value);
    //     setAssigned(event.target.value);
   // }

return(
    <div className='mt-5'>
        <form>
             <div className='mb-3'>
                <label className='form-label'>Assigned</label>
                <input 
                type='text' 
                className='form-control' 
                required
                onChange={e => setAssigned(e.target.value)}
                value={assigned}
                ></input>
            </div>
            <div className='mb-3'>
                <label className='form-control'>Description</label>
                <textarea className='form-control'
                 rows={3} 
                 required
                 onChange={e => setDescription(e.target.value)}
                 value={description}
                 ></textarea>
            </div>
            <button type='button' 
            className='btn btn-success mt-3' 
            onClick={submitTodo}
            >Add Todo</button>
        </form>
    </div>
)

}
