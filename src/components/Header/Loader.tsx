import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounce_loadingProgress = keyframes`
  0% { 
    margin-left: -50vw;
    width: 50vw;
  }
  50% {
  	width: 30vw;
  }
  100% { 
  	margin-left: 100%; 
  	width: 50vw;
  }
`

const StyledLoader = styled.div`
	position: absolute;
	z-index: 500;
	top: 0;
	left: 0;
	right: 0;
	max-width: 100vw;
	height: 4px;
	overflow: hidden;
	margin: auto;
`

const StyledProgress = styled.div`
	background-color: #037ef3;
	margin-top: 0;
	margin-left: 0;
	animation-name: ${bounce_loadingProgress};
  animation-duration: 1.7s;  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-origin: center;
  height: 3px;
`

const Loader: React.FC = () => {
	return (
		<StyledLoader>
			<StyledProgress/>
		</StyledLoader>
	)
}

export default React.memo(Loader)
