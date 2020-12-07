import React from 'react'
import { Container, Title } from '../../../components/common'
import FeedbackForm from './FeedbackForm'

const FeedbackFormBlock: React.FC = () => {
	return (
		<section className={'feedback'}>
			<Container>
				<div className="feedback__content">
					<Title title={'contact me now'} supTitle={'feedback'} className={'feedback__title'} secondary/>
					<FeedbackForm/>
				</div>
			</Container>
		</section>
	)
}

export default React.memo(FeedbackFormBlock)
