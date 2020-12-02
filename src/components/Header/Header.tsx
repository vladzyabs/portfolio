import React from 'react'
import cn from 'classnames'
import { Container, Logo } from '../common'
import Navbar from './Navbar'

import './styles.scss'

const Header: React.FC = () => {

	const [scrolling, setScrolling] = React.useState<boolean>(false)

	const scrollPageHandler = () => {
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
					<Navbar/>
				</div>
			</Container>
		</header>
	)
}

export default React.memo(Header)
