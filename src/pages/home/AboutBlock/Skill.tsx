import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from '../../../components/common'

type PropType = {
	title: string
	icon?: string
	skillLevel: number
}

const Icon = styled.div<{imgUrl: string}>`
	background-image: ${props => props.imgUrl};
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	width: 30px;
	height: 30px;
	margin-right: 10px;
`

const Skill: React.FC<PropType> = ({ title, skillLevel, icon }) => {

	return (
		<div className={'about__skill'}>
			<div className={'about__skill-tile'}>
				{icon && <Icon imgUrl={icon}/>}
				<h5>{title}</h5>
			</div>
			<ProgressBar value={skillLevel}/>
		</div>
	)
}

export default React.memo(Skill)
