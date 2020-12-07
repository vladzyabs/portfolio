import React from 'react'
import cn from 'classnames'

type PropType = {
	active: boolean
	offNavbar: () => void
}

const Navbar: React.FC<PropType> = ({ active, offNavbar }) => {

	const navbarRef = React.useRef<HTMLDivElement>(null)

	const handleOutsideClick = (event: MouseEvent | any) => {
		if (active) {
			const path = event.path || (event.composedPath && event.composedPath()) // firefox uses composedPath
			if (!path.includes(navbarRef.current)) {
				offNavbar()
			}
		}
		return
	}

	React.useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick)

		return () => document.body.removeEventListener('click', handleOutsideClick)
	})

	const links = [
		{ link: '/#', title: 'Home' },
		{ link: '/#', title: 'About' },
		{ link: '/#', title: 'Projects' },
		{ link: '/#', title: 'Contact' },
	]

	return (
		<nav className={cn('header__navbar', { 'active': active })} ref={navbarRef}>
			<ul>

				{
					links.map((l, i) => <li key={`${l.title}_${i}`} style={{transitionDelay: `${i/10}s`}}>
						<a href={l.link}>{l.title}</a>
					</li>)
				}
				{/*<li><a href="/#" className={'active'}>Home</a></li>*/}
				{/*<li><a href="/#">About</a></li>*/}
				{/*<li><a href="/#">Projects</a></li>*/}
				{/*<li><a href="/#">Contact</a></li>*/}
			</ul>
		</nav>
	)
}

export default React.memo(Navbar)
