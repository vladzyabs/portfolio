import React from 'react'
import { Header, UpButton, Footer } from './components'
import HomePage from './pages/home'

const App: React.FC = () => {
	return (
		<>
			<UpButton/>
			<Header/>

			<HomePage/>

			<Footer/>
		</>
	)
}

export default App
