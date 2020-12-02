import React from 'react'

const Navbar: React.FC = () => {
	return (
		<nav className={'header__navbar'}>
			<ul>
				<li><a href="/#" className={'active'}>Home</a></li>
				<li><a href="/#">About</a></li>
				<li><a href="/#">Projects</a></li>
				<li><a href="/#">Contact</a></li>
			</ul>
		</nav>
	)
}

export default React.memo(Navbar)
