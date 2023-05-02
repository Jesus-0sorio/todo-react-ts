import Task from './Task';
import Search from './Search';

const TaskList = () => {
	return (
		<div className='w-full'>
      <div className='w-full flex justify-center h-24 my-3 items-center'>
        <Search />
      </div>
			<div className='grid grid-cols-1 justify-items-center gap-5 px-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5'>
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	);
};

export default TaskList;
