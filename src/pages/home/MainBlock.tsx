import React from 'react'
import bgImg from '../../assets/img/main1.jpg'
import photoImg from '../../assets/img/photo.jpg'
import { Container } from '../../components/common'

const MainBlock: React.FC = () => {
	return (
		<main className={'main'}>
			<div className={'main__bg'}>
				<img src={bgImg} alt="background"/>
			</div>
			<div className={'main__content'}>
				<Container>
					<div className={'main__photo'}>
						<img src={photoImg} alt="Vlad"/>
					</div>
					<div className={'main__description'}>
						<h2 className={'main__sup-title typewriter'}>Hello, my name is <span className={'text-yellow'}>Vlad</span></h2>
						<h1 className={'main__title typewriter'}>I'm a <span className={'text-yellow'}>programmer</span></h1>
					</div>
				</Container>
			</div>
		</main>
	)
}

export default React.memo(MainBlock)
