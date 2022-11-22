import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Menu.module.css'
import { Play } from '../../../assets'

const Menu = () => {
	return (
		<nav className={s.menu} id='menu'>
			<NavLink className={s.navLink} to='/'>
				Каталог книг
			</NavLink>
			<NavLink className={s.navLink} to='/'>
				<img className={s.navLinkPlay} src={Play} alt='Play' />
				Як це працює?
			</NavLink>
			<NavLink className={s.navLink} to='/'>
				Контакти
			</NavLink>
			<NavLink className={s.navLink} to='/'>
				Бібліотекар
			</NavLink>
			<NavLink className={s.navLink} to='/'>
				Особистий кабінет
			</NavLink>
		</nav>
	)
}

export default Menu