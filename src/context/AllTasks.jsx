import React, { useContext } from 'react'
import { TaskContextApi } from './TaskContextApi'
import Task from './Task';

const AllTasks = () => {
    let {task} = useContext(TaskContextApi);
  return (
    <section id='task'>
        <article>
            <h2>All tasks</h2>
            <div className='list'>
                {task === ""
                   ? "See your Added task here !!"
                   : task.length > 0 && 
                   task.map(t => {
                    return<Task key={t.id} {...t} />
                   })
                }
            </div>
        </article>
    </section>
  )
}

export default AllTasks