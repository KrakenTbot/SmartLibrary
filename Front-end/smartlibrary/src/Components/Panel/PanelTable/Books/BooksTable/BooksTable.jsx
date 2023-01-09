import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import QRCode from "react-qr-code";

import Table from '../../../../templates/Table/Table';

import s from './BooksTable.module.css';
import sp from '../../../../../assets/styles/popUp.module.css'

import qrCode from '../../../img/qricon.png';

const BooksTable = props => {
	const [books, setBooks] = useState(props.books);
	const [booksAmount, setBooksAmount] = useState(5);

	const bookElementCreating = (b, counter) => {
		if (counter < booksAmount) {
			return (
				<div>
					<Link
						to={`/book-single/${b.title}`}
						onClick={() => window.scrollTo(0, 0)}
					>
						{b.title}
					</Link>
					<div>
						{b.author}
					</div>
					<div>
						{b.isbn}
					</div>
					<div className={s.status}>
						{
							b.status == 'R'
								? 'Читається'
								: b.status == 'W'
									? 'Очікується'
									: b.status == 'A'
										? 'У бібліотеці'
										: b.status == 'B'
											? 'Заброньована'
											: '...'
						}
					</div>
					<Popup
						trigger={
							<div>
								<img src={qrCode} alt='' />
							</div>
						}
						modal
					>
						{close => (
							<>
								<div className={sp.header}>
									<span>{b.title}</span>
									<button className={sp.closeBtn} onClick={close}>
										×
									</button>
								</div>
								<div className={sp.content}>
									<QRCode value={JSON.stringify(b.title)} />
									<button className={sp.btn} onClick={() => {}}>
										Роздрукувати
									</button>
								</div>
							</>
						)}
					</Popup>
					<Link
						to={`/book-single/edit/${b.title}`}
						onClick={() => window.scrollTo(0, 0)}
					>
						<button style={{backgroundColor: `rgb(54, 187, 203)`}}>
							Редагувати
						</button>
					</Link>
				</div>
			);
		}
	};

	let booksCounter = 0;
	let booksElements = books
		.map(el => {
			booksCounter = 0;
			return el;
		})
		.map(b => bookElementCreating(b, booksCounter++));

	useEffect(() => {
		setBooks(props.books);
	}, [props.books]);

	return (
		<Table>
			<div name='books'>
				<div name='keys-bar'>
					<span>
						Назва книги
						{` (${booksAmount > books.length ? books.length : booksAmount})`}
					</span>
					<span>Автор</span>
					<span>Інвертарний номер</span>
					{/* ['rgb(232, 238, 246)', // Не має боргів 'rgb(248, 126, 115)', // Є борги] */}
					<span>Статус</span>
					<span>QR-код</span>
					<span></span>
				</div>
				<div name='table'>{booksElements}</div>
				{/* <button className={s.btn} onClick={() => setBooksAmount(c => c + 4)}>
					Показати ще
				</button> */}
			</div>
		</Table>
	);
};

export default BooksTable;
