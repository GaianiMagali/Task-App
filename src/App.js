import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { VisibilityControl } from './components/VisibilityControl';

function App() {
  const [userName, setUserName] = useState('Magali');
  const [taskItems, setTaskItems] = useState([
    { name: 'Task one', done: false },
    { name: 'Task two', done: false },
    { name: 'Task three', done: true },
    { name: 'Task four', done: false }
  ]);

  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    console.log(data);
    if (data !== null) {
      setTaskItems(JSON.parse(data))
    } else {
      setUserName('Magali Example');
      setTaskItems([
        { name: 'Task one Example', done: false },
        { name: 'Task two Example', done: false },
        { name: 'Task three Example', done: true },
        { name: 'Task four Example', done: false }
      ])
      setShowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (name) => {
    setTaskItems(taskItems.map(t => (
      t.name === name ? { ...t, done: !t.done }
        :
        t
    )));
  }

  const taskTableRows = (doneValue) => {
    return taskItems.filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow {...task} key={task.name} toggleTask={toggleTask} />

      ))
  }

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th> Done</th>
          </tr>
        </thead>

        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>

      <div className="bg-secondary-text.text-center p-2">
        <VisibilityControl
          description="Completed tasks"
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}
        />
      </div>

      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>

            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }

    </div>
  );
}

export default App;
