import React from 'react'
import MainBlock from './MainBlock'

import './styles.scss'
import AboutBlock from './AboutBlock'

const HomePage: React.FC = () => {
	return (
		<React.Fragment>
			<MainBlock/>
			<AboutBlock/>
		</React.Fragment>
	)
}

export default React.memo(HomePage)
