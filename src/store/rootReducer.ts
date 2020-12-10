import { combineReducers } from 'redux'
import appReducer from './app/appReducer'
import homeReducer from './home/homeReducer'

const rootReducer = combineReducers({
	app: appReducer,
	home: homeReducer,
})

export default rootReducer

export type AppRootReducerType = ReturnType<typeof rootReducer>
