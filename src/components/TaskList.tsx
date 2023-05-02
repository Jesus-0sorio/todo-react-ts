import { Task } from '../interfaces/Task';
import Search from './Search';
import TaskCard from './TaskCard';

const TaskList = ({
	tasks,
	completeTask,
	deleteTask,
}: {
	tasks: Task[];
	completeTask: (id: string) => void;
	deleteTask: (id: string) => void;
}) => {
	return (
		<div className='w-full py-3 dark:bg-zinc-900'>
			<div className='w-full flex justify-center h-24 pb-3 items-center'>
				<Search />
			</div>
			<div className='grid grid-cols-1 justify-items-center gap-5 px-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5'>
				{tasks.map((task: Task) => (
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
