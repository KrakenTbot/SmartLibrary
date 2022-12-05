import { Routes, Route } from 'react-router-dom';
import { BooksCatalog, Header, SelectedBook } from './Components/';
import s from './App.css';
import MainPage from './Pages/MainPage/MainPage';
import PersonPage from './Pages/PersonPage/PersonPage';
import AdminPage from './Pages/AdminMainPage/AdminPage';
import SingleBook from './Components/Panel/PanelTable/Books/BooksTable/SingleBook/SingleBook'
import Footer from './Components/Footer/Footer';
// import Form from './Components/Form/Form';

function App(props) {
	return (
		<div className={s.wrapper}>
			<Header />
			<Routes>
				<Route exact path='/catalog' element={<BooksCatalog data={props.state.data} />} />
				<Route exact path="/catalog/:booksCategoryId" element={<BooksCatalog data={props.state.data} />} />
				<Route exact path="/:bookId" element={<SelectedBook data={props.state.data} />} />
				<Route
					path='/main'
					element={<MainPage data={props.state.data} />}
				/>
				<Route
					path='/admin/*'
					element={<AdminPage admin={props.state.admin} />}
				/>
				<Route path='/book-single/:currentBookId' element={<SingleBook admin={props.state.admin} data={props.state.data} />} />
				{/* <Route path='/form' element={<Form/>}/> */}
				<Route
					path='/personPage'
					element={<PersonPage/>}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;