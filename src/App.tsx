import { useState } from 'react';
import NavBar from './components/NavBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
	const [active, setActive] = useState<boolean>(true);

  const toogle = (): void => {
		setActive(!active);
	};

	return (
		<div className='h-screen w-screen dark:bg-zinc-900'>
			<NavBar toogle={toogle} />
			<TaskList />
			<TaskForm
				active={active}
				toogle={toogle}
			/>
		</div>
	);
}

export default App;
