import React from 'react'
import MainBlock from './MainBlock/MainBlock'

import './styles.scss'
import AboutBlock from './AboutBlock/AboutBlock'
import FeedbackFormBlock from './FeedbackFormBlock/FeedbackFormBlock'

const HomePage: React.FC = () => {
	return (
		<React.Fragment>
			<MainBlock/>
			<AboutBlock/>
			<FeedbackFormBlock/>
		</React.Fragment>
	)
}

export default React.memo(HomePage)
