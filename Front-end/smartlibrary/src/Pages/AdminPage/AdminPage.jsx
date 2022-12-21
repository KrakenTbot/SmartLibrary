// import Calendar from '../../Components/Calendar/Calendar';
import { useEffect } from 'react';
import GCalendar from '../../Components/GlobalCalendar/GCalendar';
import Panel from '../../Components/Panel/Panel';
import s from './AdminPage.module.css';

const AdminPage = props => {
	props.setHeader(false);
	useEffect(() => {
		document.title = 'Бібліотекар';
	}, []);
	return (
		<div className={s.container}>
			<div className={s.calendarBlock}>
				<GCalendar />
			</div>
			<Panel state={props.state} />
		</div>
	);
};

export default AdminPage;
