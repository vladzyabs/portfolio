import React from 'react'
import MainBlock from './MainBlock'

import './styles.scss'

const HomePage: React.FC = () => {
	return (
		<React.Fragment>
			<MainBlock/>
		</React.Fragment>
	)
}

export default React.memo(HomePage)
