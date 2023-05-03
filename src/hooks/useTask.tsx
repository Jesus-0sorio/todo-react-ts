import { useEffect, useState } from 'react';
import { Task } from '../interfaces/Task';
import { Filter } from '../types/Task';

export const useTask = () => {
	const [tasks, setTasks] = useState<Task[]>(
		localStorage.getItem('tasks')
			? JSON.parse(localStorage.getItem('tasks')!)
			: []
	);

	const addTask = (task: Task) => {
		setTasks([...tasks, task]);
	};

	const completeTask = (id: string) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, isDone: !task.isDone } : task
			)
		);
	};

	const deleteTask = (id: string) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const filterTask = (status: Filter): Task[] => {
		switch (status) {
			case 'complete':
				return tasks.filter((task) => task.isDone);
			case 'incompleted':
				return tasks.filter((task) => !task.isDone);
			default:
				return tasks;
		}
	};

	const searchTask = (search: string): Task[] => {
		return tasks.filter(
			(task) =>
				task.title.toLowerCase().includes(search.toLowerCase()) ||
				task.description.toLowerCase().includes(search.toLowerCase())
		);
	};

	useEffect(() => {
		const data = localStorage.getItem('tasks');
		if (data) {
			setTasks(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return { addTask, completeTask, deleteTask, tasks, filterTask, searchTask };
};
