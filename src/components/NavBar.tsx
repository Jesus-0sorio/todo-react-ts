import { useEffect, useState } from 'react';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';

const initialDarkmode = document.documentElement.className.includes('dark');

const NavBar = ({ toogle }: { toogle: () => void }) => {
	const [darkmode, setDarkmode] = useState(initialDarkmode);

	useEffect(() => {
		if (darkmode) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}, [darkmode]);

	return (
		<nav className='w-full px-3 items-center justify-between border-b h-14 flex dark:bg-transparent dark:border-b-white'>
			<div className='flex items-center'>
				<h1 className='text-2xl text-violet-500 dark:text-white'>ToDo</h1>
				<img
					className='h-6'
					src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
				/>
			</div>
			<div className='flex gap-2'>
				<button
					onClick={toogle}
					className='hover:text-violet-600 dark:text-white'>
					Crear todo
				</button>
				<button onClick={() => setDarkmode(!darkmode)}>
					<img
						src={darkmode ? sun : moon}
						className='h-7'
					/>
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
