import { useEffect, useState } from 'react';
import { Task } from '../interfaces/Task';

export const useTask = () => {
	const [tasks, setTasks] = useState<Task[]>(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) : []
	);

	const addTask = (task: Task) => {
		setTasks([...tasks, task]);
	};

	const completeTask = (id: string) => {
		const newTasks = tasks.map((task) => {
			if (task.id === id) {
				task.isDone = !task.isDone;
			}
			return task;
		});
		setTasks(newTasks);
	};

	const deleteTask = (id: string) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	useEffect(() => {
		console.log(window.localStorage.getItem('tasks'));

		const data = window.localStorage.getItem('tasks');
    if (data) {
      setTasks(JSON.parse(data));
    }
	}, []);

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks));
		console.log(window.localStorage.getItem('tasks'));
	}, [tasks]);

	return { addTask, completeTask, deleteTask, tasks };
};
