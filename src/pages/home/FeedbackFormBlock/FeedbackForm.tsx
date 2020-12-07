import React from 'react'
import { Button, Input } from '../../../components/common'
import { faCommentAlt, faEnvelope, faPaperPlane, faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import Textarea from '../../../components/common/formComponents/Textarea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeedbackForm: React.FC = () => {
	return (
		<form className={'feedback__form'}>
			<div className={'feedback__form-l'}>
				<div className="feedback__form-item">
					<Input label={'Name'} icon={faUser}/>
				</div>
				<div className="feedback__form-item">
					<Input label={'Mail'} icon={faEnvelope}/>
				</div>
				<div className="feedback__form-item">
					<Input label={'Subject '} icon={faPen}/>
				</div>
			</div>
			<div className={'feedback__form-r'}>
				<div className="feedback__form-item">
					<Textarea label={'Your Message'} icon={faCommentAlt} rows={3}/>
				</div>
				<div className={'feedback__form-button'}>
					<Button disabled>Send <FontAwesomeIcon icon={faPaperPlane}/></Button>
				</div>
			</div>
		</form>
	)
}

export default React.memo(FeedbackForm)
