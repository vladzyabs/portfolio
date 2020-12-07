import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPen, faCommentAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Input, Title } from '../../../components/common'
import Textarea from '../../../components/common/formComponents/Textarea'
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
