import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Container, Title } from '../../../components/common'

const ContactsBlock: React.FC = () => {
	return (
		<section className={'contacts'}>
			<Container>
				<Title title={'Contacts'} supTitle={'contact with me'} className={'contacts__title'}/>
				<div className="contacts__content">

					<div>
						<FontAwesomeIcon icon={faPhoneAlt}/><a href="tel:+375336288208">+375 (33) 628-82-08</a>
					</div>

					<div>
						<FontAwesomeIcon icon={faEnvelope}/><a href="mailto:vladzyaba@gmail.com">vladzyaba@gmail.com</a>
					</div>

					

				</div>
			</Container>
		</section>
	)
}

export default React.memo(ContactsBlock)
