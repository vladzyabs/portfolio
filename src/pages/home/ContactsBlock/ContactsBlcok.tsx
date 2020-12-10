import React from 'react'
// @ts-ignore
import Fade from 'react-reveal/Fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { Container } from '../../../components/common'

const ContactsBlock: React.FC = () => {
	return (
		<section className={'contacts'}>
			<Container>
				<div className="contacts__content">

					<Fade bottom>
						<a href="tel:+375336288208" className={'contacts__item'}>
							<h5 className={'contacts__item-title'}>
								<FontAwesomeIcon icon={faPhoneAlt}/>Phone
							</h5>

							<span className={'contacts__item-value'}>+375 (33) 628-82-08</span>
						</a>
					</Fade>

					<Fade bottom>
						<a href="mailto:vladzyaba@gmail.com" className={'contacts__item'}>
							<h5 className={'contacts__item-title'}>
								<FontAwesomeIcon icon={faEnvelope}/>Mail
							</h5>

							<span className={'contacts__item-value'}>vladzyaba@gmail.com</span>
						</a>
					</Fade>

					<Fade bottom>
						<div className={'contacts__item'}>
							<h5 className={'contacts__item-title'}>
								<FontAwesomeIcon icon={faMapMarkedAlt}/>Address
							</h5>

							<address className={'contacts__item-value'}>Belarus, Mogilev</address>
						</div>
					</Fade>

				</div>
			</Container>
		</section>
	)
}

export default React.memo(ContactsBlock)
