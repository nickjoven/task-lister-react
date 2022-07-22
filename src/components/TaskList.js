import Task from './Task'

const TaskList = ({ tasks }) => {
  return(
    <div>
      <h3>My To-do's</h3>
      <ul>
        {
	  tasks.map((element, index) => {
	    // The line below means "I want a variable called 'text' for use in
	    // the Task component."
	    return(<Task key={index} text={element}/>)
	  })
	}
      </ul>
    </div>
  )
}

export default TaskList
