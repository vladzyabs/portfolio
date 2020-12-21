import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTelegramPlane, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Container, Logo } from '../common'

import './styles.scss'

const Footer: React.FC = () => {
	return (
		<footer className={ 'footer' }>
			<Container>
				<div className={ 'footer__content' }>
					<Logo className={ 'footer__logo' }/>

					<ul className={ 'footer__list-links' }>
						<li>
							<a href="https://github.com/vladzyabs"
							   target={ '_blank' }
							   rel="noreferrer noopener"
							   className={ 'hvr-github' }><FontAwesomeIcon icon={ faGithub }/></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/vladzyaba"
							   target={ '_blank' }
							   rel="noreferrer noopener"
							   className={ 'hvr-linkedin' }><FontAwesomeIcon icon={ faLinkedinIn }/></a>
						</li>
						<li>
							<a href="https://t.me/vladzyaba"
							   target={ '_blank' }
							   rel="noreferrer noopener"
							   className={ 'hvr-telegram' }><FontAwesomeIcon icon={ faTelegramPlane }/></a>
						</li>
						<li>
							<a href="https://www.instagram.com/vladzyaba"
							   target={ '_blank' }
							   rel="noreferrer noopener"
							   className={ 'hvr-instagram' }><FontAwesomeIcon icon={ faInstagram }/></a>
						</li>
					</ul>
				</div>
				<div className="footer__sub-content">
					<p>&copy; 2020 Vladislav Zyabskiy | All rights reserved</p>
				</div>
			</Container>
		</footer>
	)
}

export default React.memo(Footer)
