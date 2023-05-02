import { useState } from 'react';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';

const NavBar = ({ toogle }: { toogle: () => void }) => {
	const [darkmode, setDarkmode] = useState(false);

	const handleDarkmode = () => {
		setDarkmode(!darkmode);
	};
	return (
		<nav className='w-full px-3 items-center justify-between border-b h-14 flex'>
			<div className='flex items-center'>
				<h1 className='text-2xl text-violet-500'>ToDo</h1>
				<img
					className='h-6'
					src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
				/>
			</div>
			<div className='flex gap-2'>
				<button
					onClick={toogle}
					className='hover:text-violet-600'>
					Crear todo
				</button>
				<button onClick={handleDarkmode}>
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
