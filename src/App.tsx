import React from 'react'
import { Header, UpButton } from './components'
import HomePage from './pages/home'

const App: React.FC = () => {
	return (
		<>
			<UpButton/>
			<Header/>

			<HomePage/>

		</>
	)
}

export default App
