import { Routes, Route, Navigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import { BooksCatalog, Header, SelectedBook, Error404 } from './Components/';

import MainPage from './Pages/MainPage/MainPage';
import PersonPage from './Pages/PersonPage/PersonPage';
import AdminPage from './Pages/AdminPage/AdminPage';
import CurrentReader from './Components/Panel/PanelTable/Readers/ReadersTable/CurrentReader/CurrentReader';
import SingleBook from './Components/Panel/PanelTable/Books/BooksTable/SingleBook/SingleBook';
import BookEdit from './Components/Panel/PanelTable/Books/BooksTable/BookEdit/BookEdit';
import BookCreate from './Components/Panel/PanelTable/Books/BooksTable/BookCreate/BookCreate';
import BooksCategories from './Components/Panel/PanelTable/Books/BooksTable/BooksCategories/BooksCategories';
import Footer from './Components/Footer/Footer';
import CreateEventReport from './Components/Panel/PanelTable/EventReports/CreateEventReport/CreateEventReport';
import EditEventReport from './Components/Panel/PanelTable/EventReports/EditEventReport/EditEventReport';
import CreateAnnualReport from './Components/Panel/PanelTable/AnnualReporting/CreateAnnualReport/CreateAnnualReport';
import CreateNews from './Components/Panel/PanelTable/News/CreateNews/CreateNews';
import RegPage from './Pages/RegPage/RegPage';
import Login from './Pages/LoginPage/Login';
import EditNews from './Components/Panel/PanelTable/News/EditNews/EditNews';
import PublishNews from './Components/Panel/PanelTable/News/PublishNews/PublishNews';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import FaqPage from './Pages/FaqPage/FaqPage';
import FormVisitors from './Components/Panel/PanelTable/Visitors/Form/Form';
import FormReport from './Components/Panel/PanelTable/ReportsToTheNews/Form/Form';

import { RequestsContext, AuthContext } from './index';

import './App.css';

function App(props) {
	const Requests = useContext(RequestsContext);

	const [header, setHeader] = useState(true);
	const [menuActive, setMenuActive] = useState(false);
	const [categories, setCategories] = useState({
		// 15 макетных категорий
		categories: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
		isLoading: true,
	});
	const [books, setBooks] = useState({
		// 12 макетных книг
		books: ['', '', '', '', '', '', '', '', '', '', '', ''],
		isLoading: true,
	});

	const { store } = useContext(AuthContext);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
		console.log(localStorage);
		console.log(store);
	}, []);

	useEffect(() => {
		Requests.GetBooks().then(res => {
			const books = res.data;
			console.log(books);
			setBooks({ books: books, isLoading: false });
		});

		Requests.GetBooksCategories().then(res => {
			const categories = res.data;
			setCategories({ categories: categories, isLoading: false });
		});
	}, [Requests]);

	const wrapper = useRef();
	const router = useRef();

	return (
		<div ref={wrapper} className='wrapper'>
			<Header
				menuActive={menuActive}
				setMenuActive={setMenuActive}
				header={header}
			/>
			<div className={'router'} ref={router}>
				<Routes>
					{/* Главная страница */}
					<Route
						index
						exact path='/'
						element={<MainPage books={books} setHeader={setHeader} />}
					/>

					{/* Страница книги */}
					<Route
						exact path='/:bookId'
						element={
							<SelectedBook data={props.state.data} setHeader={setHeader} />
						}
					/>

					{/* Каталог */}
					<Route
						exact path='/catalog'
						element={
							<BooksCatalog
								books={books}
								categories={categories}
								setHeader={setHeader}
							/>
						}
					/>
					<Route
						path='/catalog/:booksCategoryId'
						element={
							<BooksCatalog
								books={books}
								categories={categories}
								setHeader={setHeader}
							/>
						}
					/>

					{/* Контакты и ЧЗВ */}
					<Route
						path='/contacts'
						element={<ContactsPage setHeader={setHeader} />}
					/>
					<Route
						path='/faq/*'
						element={<FaqPage setHeader={setHeader} />}
					/>

					{/* Авторизация / Регистрация */}
					<Route
						exact path='/login'
						element={ store.status !== 'anonym' ? <Navigate replace to="/404" /> : <Login setHeader={setHeader} /> }
					/>
					<Route
						exact path='/registration'
						element={ store.status !== 'anonym' ? <Navigate replace to="/404" /> : <RegPage setHeader={setHeader} /> }
					/>

					{/* Error 404 Page */}
					<Route
						exact path='/404'
						element={
							<Error404 setHeader={setHeader} />
						}
					/>

					{/* Страница пользователя */}
					<Route
						path='/personPage'
						element={ 
							store.status !== 'user'
								? <Navigate replace to="/404" />
								: <PersonPage
									setHeader={setHeader}
									admin={props.state.admin}
									data={props.state.data}
								/>
						}
					/>

					{/* Админка + страницы с админки */}
					<Route
						path='/admin/*'
						element={ store.status !== 'librarian' ? <Navigate replace to="/404" /> : <AdminPage state={props.state} setHeader={setHeader} /> }
					/>
					<Route
						path='/reader/:currentReaderId'
						element={
							store.status !== 'librarian'
								? <Navigate replace to="/404" />
								: <CurrentReader
									admin={props.state.admin}
									data={props.state.data}
									setHeader={setHeader}
								/>
						}
					/>
					<Route
						path='/book-single/:currentBookId'
						element={
							store.status !== 'librarian'
								? <Navigate replace to="/404" />
								: <SingleBook
									admin={props.state.admin}
									data={props.state.data}
									setHeader={setHeader}
								/>
						}
					/>
					<Route
						path='/book-single/create'
						element={
							store.status !== 'librarian'
								? <Navigate replace to="/404" />
								: <BookCreate setHeader={setHeader} />
						}
					/>
					<Route
						path='/books/categories'
						element={
							store.status !== 'librarian'
								? <Navigate replace to="/404" />
								: <BooksCategories data={props.state.data} setHeader={setHeader} />
						}
					/>
					<Route
						path='/book-single/edit/:currentBookId'
						element={ store.status !== 'librarian' ? <Navigate replace to="/404" /> : <BookEdit data={props.state.data} setHeader={setHeader} /> }
					/>
					<Route
						path='/admin/event-reports/create/:id'
						element={ store.status !== 'librarian' ? <Navigate replace to="/404" /> : <CreateEventReport setHeader={setHeader} /> }
					/>
					<Route
						path='/admin/event-reports/edit/:id'
						element={
							store.status !== 'librarian'
								? <Navigate replace to="/404" />
								: <EditEventReport
									reports={props.state.admin.tables.eventReporting}
									setHeader={setHeader}
								/>
						}
					/>
					<Route
						path='/admin/news/edit/:id'
						element={
							store.status !== 'librarian'
								? <Navigate replace to="/404" />
								: <EditNews
									news={props.state.admin.tables.news}
									setHeader={setHeader}
								/>
						}
					/>
					<Route
						path='/admin/news/create'
						element={ store.status !== 'librarian' ? <Navigate replace to="/404" /> : <CreateNews setHeader={setHeader} /> }
					/>
					<Route
						path='/admin/news/publish/:id'
						element={
							store.status !== 'librarian'
								? <Navigate replace to="/404" />
								: <PublishNews
									news={props.state.admin.tables.news}
									setHeader={setHeader}
								/>
						}
					/>
					<Route
						path='/admin/annual-reports/create/:id'
						element={
							store.status !== 'librarian'
								? <Navigate replace to="/404" />
								: <CreateAnnualReport
									annualReports={props.state.admin.tables.annualReporting}
									setHeader={setHeader}
								/>
						}
					/>
					<Route
						path='/admin/visitors/form'
						element={ store.status !== 'librarian' ? <Navigate replace to="/404" /> : <FormVisitors /> }
					/>
					<Route
						path='/admin/reports-to-the-news/form'
						element={ store.status !== 'librarian' ? <Navigate replace to="/404" /> : <FormReport /> }
					/>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
