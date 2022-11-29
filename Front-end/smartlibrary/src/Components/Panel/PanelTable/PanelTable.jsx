import { Routes, Route } from 'react-router-dom';
import s from './PanelTable.module.css';

import Readers from './Readers/Readers';
import Books from './Books/Books';
import Applications from './Applications/Applications';
import Activities from './Activites/Activites';
import EventReporting from './EventReports/EventReports';
import AnnualReporting from './AnnualReporting/AnnualReporting';
import Invertory from './Invertory/Invertory';
import Librarians from './Librarians/Librarians';
import Affiliates from './Affiliates/Affiliates';
import News from './News/News';
import ReportsToTheNews from './ReportsToTheNews/ReportsToTheNews';
import Visitors from './Visitors/Visitors';

const PanelTable = props => {
	return (
		<div className={s.container}>
			<div className={s.table}>
				<Routes>
					<Route
						path='readers'
						element={<Readers readers={props.tables.readers} />}
					/>
					<Route path='books' element={<Books books={props.tables.books} />} />
					<Route
						path='applications'
						element={<Applications applications={props.tables.applications} />}
					/>
					<Route
						path='activities'
						element={<Activities activities={props.tables.activities} />}
					/>
					<Route
						path='event-reporting'
						element={
							<EventReporting eventReporting={props.tables.eventReporting} />
						}
					/>
					<Route
						path='annual-reporting'
						element={
							<AnnualReporting annualReporting={props.tables.annualReporting} />
						}
					/>
					<Route
						path='invertory'
						element={<Invertory invertory={props.tables.invertory} />}
					/>
					<Route
						path='librarians'
						element={<Librarians librarians={props.tables.librarians} />}
					/>
					<Route
						path='affiliates'
						element={<Affiliates affiliates={props.tables.affiliates} />}
					/>
					<Route path='news' element={<News news={props.tables.news} />} />
					<Route
						path='reports-to-the-news'
						element={
							<ReportsToTheNews
								reportsToTheNews={props.tables.reportsToTheNews}
							/>
						}
					/>
					<Route
						path='visitors'
						element={<Visitors visitors={props.tables.visitors} />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default PanelTable;
