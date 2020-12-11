import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from '../../../components/common'
import { Icon } from './Icon'

type PropType = {
	title: string
	icon?: string
	skillLevel: number
}

const Skill: React.FC<PropType> = ({ title, skillLevel, icon }) => {

	return (
		<div className={'about__skill'}>
			<div className={'about__skill-tile'}>
				{icon && <Icon imgUrl={icon} size={50} className={'about__skill-icon'}/>}
				<h5>{title}</h5>
			</div>
			<ProgressBar value={skillLevel}/>
		</div>
	)
}

export default React.memo(Skill)
