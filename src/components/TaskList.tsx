import { useEffect, useState } from 'react';
import { Task } from '../interfaces/Task';
import { Filter } from '../types/Task';
import Search from './Search';
import TaskCard from './TaskCard';

const TaskList = ({
	tasks,
	completeTask,
	deleteTask,
	filterTask,
	searchTask
}: {
	tasks: Task[];
	completeTask: (id: string) => void;
	deleteTask: (id: string) => void;
		filterTask: (status: Filter) => Task[];
	searchTask: (search: string) => Task[];
}) => {
	const [search, setSearch] = useState<Task[]>(tasks);
	const [statusTask, setStatusTask] = useState<Filter>('all');
	const tasksFiltered = (status: Filter): void => {
		setSearch(filterTask(status));
		setStatusTask(status);
	};

	const handleSearch = (search: string): void => {
		setSearch(searchTask(search));
	};
	
	useEffect(() => {
		setSearch(filterTask(statusTask));
	}, [tasks, statusTask, filterTask]);

	return (
		<div className='w-full py-3 dark:bg-zinc-900'>
			<div className='w-full flex justify-center h-24 pb-3 items-center'>
				<Search tasksFiltered={tasksFiltered} handleSearch={handleSearch} />
			</div>
			<div className='grid grid-cols-1 px-1 pt-2 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{search.map((task: Task) => (
					<TaskCard
						key={task.id}
						task={task}
						completeTask={completeTask}
						deleteTask={deleteTask}
					/>
				))}
			</div>
		</div>
	);
};

export default TaskList;
