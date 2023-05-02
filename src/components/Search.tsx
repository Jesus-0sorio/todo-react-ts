const Search = () => {
	return (
		<div className='w-[23rem]'>
			<input
				type='text'
				className='w-full mb-2 h-9 rounded border border-gray-500 focus:outline-none px-2 dark:bg-violet-500 dark:border-transparent dark:text-white dark:placeholder:text-white'
				placeholder='Buscar tarea'
			/>
			<ul className='items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-md flex dark:bg-violet-500 dark:border-gray-900 dark:text-white '>
				<li className='w-full  border-gray-400 border-r dark:border-r-gray-700'>
					<div className='flex items-center pl-3'>
						<input
							type='radio'
							name='typeTask'
							className='bg-gray-100 border-gray-300 rounded focus:outline-none'
							defaultChecked
						/>
						<label className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white'>
							Todas
						</label>
					</div>
				</li>
				<li className='w-full border-gray-400 border-r dark:border-r-gray-700'>
					<div className='flex items-center pl-3'>
						<input
							type='radio'
							name='typeTask'
							className='bg-gray-100 border-gray-300 rounded focus:outline-none'
						/>
						<label className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white'>
							Completas
						</label>
					</div>
				</li>
				<li className='w-full border-gray-400 '>
					<div className='flex items-center pl-3'>
						<input
							type='radio'
							name='typeTask'
							className='bg-gray-100 border-gray-300 rounded focus:outline-none'
						/>
						<label className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-white'>
							En curso
						</label>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Search;
