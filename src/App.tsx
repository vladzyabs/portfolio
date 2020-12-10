import React from 'react'
import { useSelector } from 'react-redux'
import { AppRootReducerType } from './store/rootReducer'
import { RequestStatusType } from './store/app/appReducer'
import { Header, UpButton, Footer } from './components'
import HomePage from './pages/home'

const App: React.FC = () => {

	const status = useSelector<AppRootReducerType, RequestStatusType>(state => state.app.status)

	return (
		<>
			<UpButton/>
			<Header showLoader={status === 'loading'}/>

			<HomePage/>

			<Footer/>
		</>
	)
}

export default App
