const Task = () => {
	return (
		<div className='w-[23rem] h-[22rem] border shadow-md rounded-xl dark:bg-violet-500 dark:border-transparent'>
			<div className='flex flex-col h-full justify-center items-center gap-2'>
				<div className='w-72 border-b border-gray-500 pb-2 dark:border-b-black'>
					<h2 className='text-2xl text-center font-medium dark:text-white'>
						Titulo
					</h2>
				</div>
				<div className='w-72'>
					<textarea
						className='focus:outline-none h-52 w-full rounded py-2 resize-none bg-transparent dark:text-white'
						value='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos asperiores, voluptatem, facilis cupiditate dicta rerum autem dolorum, consectetur accusamus id ratione ad. Ab excepturi aut asperiores, odio similique neque voluptate?'
					/>
				</div>
				<div className='flex gap-2 h-9 w-72'>
					<button className='text-white border text-lg rounded-md w-full bg-violet-500 hover:bg-violet-700 border-transparent transform active:scale-95 duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-700 dark:hover:text-white'>
						Completar
					</button>
					<button className='text-white text-lg w-full bg-red-500 hover:bg-red-700 rounded-md border transform active:scale-95 duration-200 dark:border-transparent'>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Task;
