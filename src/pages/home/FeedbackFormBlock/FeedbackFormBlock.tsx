import React from 'react'
import { useSelector } from 'react-redux'
import { AppRootReducerType } from '../../../store/rootReducer'
import { StatusFeedbackFormType } from '../../../store/home/types'
import { Container, Title } from '../../../components/common'
import FeedbackForm from './FeedbackForm'

const FeedbackFormBlock: React.FC = () => {
	const statusForm = useSelector<AppRootReducerType, StatusFeedbackFormType>(state => state.home.statusFeedbackForm)

	return (
		<section className={'feedback'}>
			<Container>
				<div className="feedback__content">
					<Title title={'contact me now'} supTitle={'feedback'} className={'feedback__title'} secondary/>
					<FeedbackForm statusForm={statusForm}/>
					{
						statusForm === 'sent' && <div className={'feedback__sent-form'}>
							<p>Thanks for contacting me. Your message has been sent to my mail. I will definitely answer you.</p>
						</div>
					}
				</div>
			</Container>
		</section>
	)
}

export default React.memo(FeedbackFormBlock)
