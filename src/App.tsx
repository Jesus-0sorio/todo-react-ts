import { useState } from 'react';
import NavBar from './components/NavBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useTask } from './hooks/useTask';

function App() {
	const [active, setActive] = useState<boolean>(true);
const { tasks, addTask, deleteTask, completeTask } = useTask();
  const toogle = (): void => {
		setActive(!active);
	};

	return (
		<div className='h-screen w-screen '>
			<NavBar toogle={toogle} />
			<TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
			<TaskForm
				active={active}
				toogle={toogle}
				addTask={addTask}
			/>
		</div>
	);
}

export default App;
