import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'

const Box = styled.div`
	cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 30px;
`


const Line = styled.div`
	display: block;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background-color: #037ef3;
    margin-bottom: 3px;
    transition: .3s all ease-in-out ;
    
	${Box}:hover &:nth-child(1) {
  	transform: rotate(-35deg) scaleX(0.5) translate(-15px, -2px);
  }
  
  ${Box}:hover &:nth-child(3) {
  	transform: rotate(35deg) scaleX(.5) translate(-15px, 2px);
  }
  
  ${Box}.close &:nth-child(1) {
  	transform: rotate(45deg) translate(5px, 5px);
  }
  ${Box}.close &:nth-child(2) {
  	transform: scale(0);
  }
  ${Box}.close &:nth-child(3) {
  	transform: rotate(-45deg) translate(5px, -5px);
  }
`

type PropType = {
	onToggle: () => void
	activeClose: boolean
}

const BurgerBtn: React.FC<PropType> = ({ onToggle, activeClose }) => {
	return (
		<Box onClick={onToggle}
				 className={cn('burger-btn', activeClose ? 'close' : '')}
		>
			<Line/>
			<Line/>
			<Line/>
		</Box>
	)
}

export default React.memo(BurgerBtn)
