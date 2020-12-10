import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { Container, Title } from '../../../components/common'

const ContactsBlock: React.FC = () => {
	return (
		<section className={'contacts'}>
			<Container>
				<div className="contacts__content">

					<a href="tel:+375336288208" className={'contacts__item'}>
						<h5 className={'contacts__item-title'}>
							<FontAwesomeIcon icon={faPhoneAlt}/>Phone
						</h5>

						<span className={'contacts__item-value'}>+375 (33) 628-82-08</span>
					</a>

					<a href="mailto:vladzyaba@gmail.com" className={'contacts__item'}>
						<h5 className={'contacts__item-title'}>
							<FontAwesomeIcon icon={faEnvelope}/>Mail
						</h5>

						<span className={'contacts__item-value'}>vladzyaba@gmail.com</span>
					</a>

					<div className={'contacts__item'}>
						<h5 className={'contacts__item-title'}>
							<FontAwesomeIcon icon={faMapMarkedAlt}/>Address
						</h5>

						<address className={'contacts__item-value'}>Belarus, Mogilev</address>
					</div>

				</div>
			</Container>
		</section>
	)
}

export default React.memo(ContactsBlock)
