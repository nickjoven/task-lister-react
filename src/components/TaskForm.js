import React from 'react'

const TaskForm = () => {
  return(
    <div>
      {/*  ISSA FORM */}
      <form>
	<label>Task Description:</label>
        <input type="text" placeholder="Description" />
        <input type="submit" value="Create New Task" />
      </form>
    </div>
  )
}

export default TaskForm
