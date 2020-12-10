import React from 'react'
// @ts-ignore
import Flip from 'react-reveal/Flip'
import { Container, Title } from '../../../components/common'
import jsIcon from '../../../assets/icons/skills-icon/js_icon.svg'
import reactIcon from '../../../assets/icons/skills-icon/react_icon.svg'
import ts2Icon from '../../../assets/icons/skills-icon/ts2_icon.svg'
import sassIcon from '../../../assets/icons/skills-icon/sass_icon.svg'
import htmlIcon from '../../../assets/icons/skills-icon/html5_icon.svg'
import reduxIcon from '../../../assets/icons/skills-icon/redux_icon.svg'
import Skill from './Skill'

type SkillType = {
	id: string
	title: string
	skillLevel: number
	icon: string
	color: string
}

const skills = [
	{ id: '1', title: 'JavaScript', skillLevel: 75, icon: 'url(' + jsIcon + ')', color: '' },
	{ id: '2', title: 'TypeScript', skillLevel: 50, icon: 'url(' + ts2Icon + ')', color: '' },
	{ id: '3', title: 'React', skillLevel: 80, icon: 'url(' + reactIcon + ')', color: '' },
	{ id: '4', title: 'Redux', skillLevel: 85, icon: 'url(' + reduxIcon + ')', color: '' },
	{ id: '4', title: 'sass (scss)', skillLevel: 85, icon: 'url(' + sassIcon + ')', color: '' },
	{ id: '4', title: 'html', skillLevel: 85, icon: 'url(' + htmlIcon + ')', color: '' },
] as SkillType[]


const AboutBlock: React.FC = () => {
	return (
		<section className={'about'}>
			<Container>
				<Title title={'My skills'}
							 className={'about__title'}
							 supTitle={'About me'}
				/>
				<div className={'about__content'}>
					{
						skills.map((s, i) => <Flip key={`${s.id}_${i}`} top><Skill title={s.title}
																																			 skillLevel={s.skillLevel}
																																			 icon={s.icon}
						/></Flip>)
					}
				</div>
			</Container>
		</section>
	)
}

export default React.memo(AboutBlock)
