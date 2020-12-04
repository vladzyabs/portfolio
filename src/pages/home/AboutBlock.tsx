import React from 'react'
import { Container, Title } from '../../components/common'

const AboutBlock: React.FC = () => {
	return (
		<section className={'about'}>
			<Container>
				<Title title={'About me'} className={'about__title'} supTitle={'vfsdvdfvdfvdf'}/>
				<div className={'about__content'}>

				</div>
			</Container>
		</section>
	)
}

export default React.memo(AboutBlock)
