import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Input } from '../../../components/common'

const FeedbackFormBlock: React.FC = () => {
	return (
		<section className={'feedback'}>
			<Container>
				<Input label={'Name'} error={null} icon={faUser}/>
				<Button className={'feedback__button'}>Send<FontAwesomeIcon icon={faPaperPlane}/></Button>
			</Container>
		</section>
	)
}

export default React.memo(FeedbackFormBlock)
