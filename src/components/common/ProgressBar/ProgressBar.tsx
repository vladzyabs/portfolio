import React from 'react'
import styled, { keyframes } from 'styled-components'
import { darken } from './utils'

const load = (value: number) => keyframes`
    0% { width: 0; }
  100% { width: ${value}; }
`

const Wrapper = styled.div`
	margin: 5px 0;
  height: 8px;
  position: relative;
  background-color: #e1e2e2;
  border-radius: 10px;
  overflow: hidden;
`

const Line = styled.span<{ value: number, colorBg: string }>`
	display: block;
  height: 100%;
  border-radius: 25px;
  background-image: linear-gradient(to bottom, ${props => `${props.colorBg}, ${darken(props.colorBg, 5)}`});
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), 
  						inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  width: ${props => `${props.value}%` || '0%'};
  animation: ${props => load(props.value)} 3s normal forwards;
`

type PropType = {
	value: number // from 0 to 100
	color?: string
}

const ProgressBar: React.FC<PropType> = ({ value, color }) => {
	const colorBg = color ? color : '#037ef3'
	return (
		<Wrapper>
			<Line value={value} colorBg={colorBg}>{''}</Line>
		</Wrapper>
	)
}

export default React.memo(ProgressBar)
