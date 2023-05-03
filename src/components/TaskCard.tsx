import { Task } from '../interfaces/Task';

const TaskCard = ({
	task,
	completeTask,
	deleteTask,
}: {
	task: Task;
	completeTask: (id: string) => void;
	deleteTask: (id: string) => void;
}) => {
	return (
		<div className='w-72 xl:w-[20.5rem] h-[22rem] border shadow-md rounded-xl dark:bg-violet-500 dark:border-transparent'>
			<div className='flex flex-col h-full justify-center items-center gap-2'>
				<div className='w-64 xl:w-72 border-b border-gray-500 pb-2 dark:border-b-black'>
					<h2
						className={`text-xl text-center font-medium dark:text-white ${
							task.isDone ? 'line-through' : ''
						}`}>
						{task.title}
					</h2>
				</div>
				<div className='w-64 xl:w-72'>
					<textarea
						className={`focus:outline-none h-52 w-full rounded py-2 resize-none bg-transparent dark:text-white  ${
							task.isDone ? 'line-through' : ''
						}`}
						defaultValue={task.description}
					/>
				</div>
				<div className='flex gap-2 h-8 w-64 xl:h-10 xl:w-72'>
					<button
						onClick={() => completeTask(task.id)}
						className='text-white text-md border xl:text-lg rounded-md w-full bg-violet-500 hover:bg-violet-700 border-transparent transform active:scale-95 duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-700 dark:hover:text-white'>
						Completar
					</button>
					<button
						onClick={() => deleteTask(task.id)}
						className='text-white text-md xl:text-lg w-full bg-red-500 hover:bg-red-700 rounded-md border transform active:scale-95 duration-200 dark:border-transparent'>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
