import React, {useState} from 'react';
import './App.css';
import {TodoTable} from './components/Todotable';
import {NewTodoForm} from './components/NewTodoForm';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] =useState(false);

  //passing data to react components dynamically
  const[todos, setTodos] = useState([
    {rowNumber:1, rowDescription: 'Feed puppy',rowAssigned: 'User One'},
    {rowNumber:2, rowDescription: 'Water plants',rowAssigned: 'User Two'},
    {rowNumber:3, rowDescription: 'Make dinner',rowAssigned: 'User Three'},
    {rowNumber:4, rowDescription: 'Charge phone',rowAssigned: 'User One'}

  ]
  )
  const addTodo =(description: string,assigned: string) =>{ //this is a function
    //console.log('Our addTodo btn has been clicked');
    let rowNumber=0;
    if(todos.length >0){
      rowNumber = todos[todos.length -1].rowNumber + 1; //here 4; 4+1=5
    }else{
      rowNumber = 1;
    }
    if(todos.length >0){
      const newTodo ={
        rowNumber:rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos=> [...todos, newTodo]) //...for destructuring


      
    }
  }
  const deleteTodo = (deleteTodoRowNumber: number) =>{
    let filtered =todos.filter(function(value){
      return value.rowNumber!== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container' >
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
            <button onClick={()=> setShowAddTodoForm(!showAddTodoForm)}className='btn btn-success'>{showAddTodoForm? 'Close New Todo' : 'New Todo'}</button>
            {showAddTodoForm && 
              <NewTodoForm addTodo={addTodo}/>
            }
            
        </div>
      </div>
    </div>
  );
}
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest

//npx tsc --init


