import styled from 'styled-components'

type PropType = {
	size: number,
	imgUrl: string
}

export const Icon = styled.div<PropType>`
	background-image: ${props => 'url(' + props.imgUrl + ')'};
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
`
