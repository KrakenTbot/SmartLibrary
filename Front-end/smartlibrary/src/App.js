import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { BookCatalog } from './Components';
import s from './App.css';

import AdminPage from './Pages/AdminMainPage/AdminPage';

function App() {
	return (
		<div className={s.wrapper}>
			<Header/>
			<BookCatalog />
			<Routes>
				<Route path='/admin/*' element={<AdminPage />} />
			</Routes>
		</div>
	);
}

export default App;
