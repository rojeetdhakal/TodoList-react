import React from 'react'

const Task = ({taskName,id,handleDelete,handleComplete,complete}) => {
    return (
        <div className='task' style={{backgroundColor: complete?"yellow":"white"}}>
          <h1>{taskName}</h1>
          <button onClick={()=>handleComplete(id)}>complete</button>
          <button onClick={() =>handleDelete(id)}>delete</button>
        </div>
      );
}

export default Task
