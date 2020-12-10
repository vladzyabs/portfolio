import { combineReducers } from 'redux'
import appReducer from './app/appReducer'

const rootReducer = combineReducers({
	app: appReducer,
})

export default rootReducer

export type AppRootReducer = ReturnType<typeof rootReducer>
