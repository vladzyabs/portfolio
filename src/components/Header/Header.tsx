import React from 'react'
import cn from 'classnames'
import { Container, Logo } from '../common'
import Navbar from './Navbar'
import BurgerBtn from './BurgerBtn'
import Loader from './Loader'

import './styles.scss'

const Header: React.FC<{showLoader: boolean}> = ({showLoader}) => {

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
			{showLoader && <Loader/>}
			<Container>
				<div className={'header__content'}>
					<Logo className={'header__logo'}/>
					<BurgerBtn onToggle={toggleActiveNavbar} activeClose={activeNavbar}/>
					<Navbar active={activeNavbar} offNavbar={offNavbar}/>
				</div>
			</Container>
		</header>
	)
}

export default React.memo(Header)
