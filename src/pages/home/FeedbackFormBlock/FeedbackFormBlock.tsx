import React from 'react'
import { faSignature } from '@fortawesome/free-solid-svg-icons'
import { Container, Input } from '../../../components/common'

const FeedbackFormBlock: React.FC = () => {
	return (
		<section className={'feedback'}>
			<Container>
				<Input label={'Name'} error={null} icon={faSignature}/>
			</Container>
		</section>
	)
}

export default React.memo(FeedbackFormBlock)
