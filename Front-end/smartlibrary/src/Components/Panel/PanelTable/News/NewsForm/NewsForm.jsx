import { useEffect, useState } from 'react';

import f from '../../../../../assets/styles/form.module.css';

const NewsForm = props => {
	const [news, setNews] = useState(props.news);
	useEffect(() => {
		setNews(news);
	}, [news]);
	
	return (
		<form
			className={f.form}
			onSubmit={e => {
				e.preventDefault();
				console.log(news);
				// Promise.resolve(
				// 	() => {
				// 		switch (props.type) {
				// 			case 'creating':
				// 					Services.AuthService.Login({
				// 						email: state.email,
				// 						password: state.password,
				// 					})
				// 				break;

				// 			case 'publishing':
				// 				Services.AuthService.Login({
				// 					email: state.email,
				// 					password: state.password,
				// 				})
				// 				break;

				// 			case 'editing':
				// 				Services.AuthService.Login({
				// 					email: state.email,
				// 					password: state.password,
				// 				})
				// 				break;
						
				// 			default:
				// 				break;
				// 	}
				// }).then();
			}}
		>
			<ul className={f.fieldsList}>
				<li className={f.fieldBlock}>
					<label>Назва новини</label>
					<input
						type='text'
						value={news.name}
						name='name'
						onChange={e =>
							setNews({
								...news,
								name: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Опис</label>
					<input
						type='text'
						value={news.description}
						name='description'
						onChange={e =>
							setNews({
								...news,
								description: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Дата події</label>
					<input
						type='date'
						value={news.date}
						name='date'
						onChange={e =>
							setNews({
								...news,
								date: e.target.value,
							})
						}
					/>
				</li>
			</ul>
			<div className={f.btns}>
				<input
					className={f.btn}
					type='submit'
					value={
						props.type == 'creating'
							? 'Створити'
							: props.type == 'publishing'
								? 'Опублікувати'
								: 'Змінити'
					}
					onClick={
						() =>
							props.type == 'creating'
								? console.log('Created!')
								: props.type == 'publishing'
									? console.log('Published!')
									: console.log('Edited!')
					}
				/>
			</div>
		</form>
	);
};

export default NewsForm;
