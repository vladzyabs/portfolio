import React from 'react'
import MainBlock from './MainBlock/MainBlock'
import AboutBlock from './AboutBlock/AboutBlock'
import FeedbackFormBlock from './FeedbackFormBlock/FeedbackFormBlock'
import ContactsBlock from './ContactsBlock/ContactsBlcok'
import ProjectsBlock from './ProjectsBlock/ProjectsBlock'

import './styles.scss'

const HomePage: React.FC = () => {
	return (
		<React.Fragment>
			<MainBlock/>
			<AboutBlock/>
			<FeedbackFormBlock/>
			<ContactsBlock/>
			<ProjectsBlock/>
		</React.Fragment>
	)
}

export default React.memo(HomePage)
