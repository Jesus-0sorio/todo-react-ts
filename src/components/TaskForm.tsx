import { createPortal } from 'react-dom';

const TaskForm = ({
	active,
	toogle,
}: {
	active: boolean;
	toogle: () => void;
}) => {
	return createPortal(
		<div
			className={`h-screen w-screen fixed top-0 ${
				active && 'hidden'
			} duration-300`}>
			<div
				onClick={toogle}
				className='flex h-full justify-center items-center -z-10 bg-gray-300 bg-opacity-70'>
				<form
					onClick={(e) => e.stopPropagation()}
					name='taskForm'
					className='border border-gray-400 rounded-md border-transparent px-4 h-[26rem] w-96 flex flex-col bg-white justify-center items-center dark:bg-zinc-900'>
					<h2 className='text-3xl font-medium mb-4 dark:text-white'>
						Nueva Tarea
					</h2>
					<div className='relative z-0 w-64 mb-4'>
						<input
							className='peer block border-b appearance-none pt-2.5 px-0 w-full focus:outline-none focus:ring-0 text-sm pb-1 border-gray-500 bg-transparent text-black focus:border-violet-500 dark:text-white dark:border-b-white'
							type='text'
							name='title'
							placeholder=' '
						/>
						<label
							className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 text-sm
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-500 dark:text-gray-200'>
							Titulo
						</label>
					</div>
					<div className='relative z-0 w-64 mb-4'>
						<textarea
							className='h-48 peer block border-b appearance-none pt-2.5 px-0 w-full focus:outline-none focus:ring-0 text-sm border-gray-500 bg-transparent text-black focus:border-violet-500 resize-none dark:border-b-white dark:text-white'
							name='title'
							placeholder=' '
						/>
						<label
							className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 text-sm
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-violet-500 dark:text-gray-200'>
							Descripcion
						</label>
					</div>
					<div className='w-64'>
						<button className='bg-violet-500 w-full hover:bg-violet-600 text-white py-2 px-4 rounded'>
							Guardar
						</button>
					</div>
				</form>
			</div>
		</div>,
		document.getElementById('modal')!
	);
};

export default TaskForm;
