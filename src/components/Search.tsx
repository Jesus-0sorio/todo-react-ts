const Search = () => {
	return (
		<div className='w-[23rem]'>
			<input
				type='text'
				className='w-full mb-2 h-9 rounded-md border border-gray-500 focus:outline-none px-2'
				placeholder='Buscar tarea'
			/>
			<ul className='items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-lg flex'>
				<li className='w-full  border-gray-400 border-r'>
					<div className='flex items-center pl-3'>
						<input
							type='radio'
							name='typeTask'
              className='bg-gray-100 border-gray-300 rounded focus:outline-none group'
              defaultChecked
						/>
						<label className='w-full py-3 ml-2 text-sm font-medium text-gray-900'>
							Todas
						</label>
					</div>
				</li>
				<li className='w-full border-gray-400 border-r'>
					<div className='flex items-center pl-3'>
						<input
							type='radio'
							name='typeTask'
							className='bg-gray-100 border-gray-300 rounded focus:outline-none group'
						/>
						<label className='w-full py-3 ml-2 text-sm font-medium text-gray-900'>
							Completas
						</label>
					</div>
				</li>
				<li className='w-full border-gray-400'>
					<div className='flex items-center pl-3'>
						<input
							type='radio'
							name='typeTask'
							className='bg-gray-100 border-gray-300 rounded focus:outline-none group'
						/>
						<label className='w-full py-3 ml-2 text-sm font-medium text-gray-900'>
							En curso
						</label>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Search;
