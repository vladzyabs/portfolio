import React from 'react'
import cn from 'classnames'
import { Container, Logo } from '../common'
import Navbar from './Navbar'
import BurgerBtn from './BurgerBtn'

import './styles.scss'

// (completed) TODO: When the page is scrolled - disable the active navigation bar

const Header: React.FC = () => {

	const [scrolling, setScrolling] = React.useState<boolean>(false)
	const [activeNavbar, setActiveNavbar] = React.useState<boolean>(false)

	const toggleActiveNavbar = () => setActiveNavbar(prevState => !prevState)
	const offNavbar = () => setActiveNavbar(prevState => false)

	const scrollPageHandler = () => {
		offNavbar()
		window.pageYOffset > 50
			? setScrolling(true)
			: setScrolling(false)
	}

	React.useEffect(() => {
		window.addEventListener('scroll', scrollPageHandler)

		return () => window.removeEventListener('scroll', scrollPageHandler)
	})

	return (
		<header className={cn('header', { 'scrolling': scrolling })}>
			<Container>
				<div className={'header__wrapper'}>
					<Logo className={'header__logo'}/>
					<BurgerBtn onToggle={toggleActiveNavbar} activeClose={activeNavbar}/>
					<Navbar active={activeNavbar} offNavbar={offNavbar}/>
				</div>
			</Container>
		</header>
	)
}

export default React.memo(Header)
