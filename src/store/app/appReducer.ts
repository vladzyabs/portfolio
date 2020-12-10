export const APP_SET_STATUS = 'APP/SET_STATUS'
export const APP_SET_ERROR = 'APP/SET_ERROR'
export const APP_SET_INITIALIZED = 'APP/SET_INITIALIZED'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
	status: 'idle' as RequestStatusType,
	error: null as null | string,
	isInitialized: false as boolean,
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case 'APP/SET_STATUS':
			return { ...state, status: action.status }
		case 'APP/SET_ERROR':
			return { ...state, error: action.error }
		case 'APP/SET_INITIALIZED':
			return { ...state, isInitialized: action.initialized }
		default:
			return state
	}
}

export default appReducer


// actions

export const appSetStatus = (status: RequestStatusType) => ({
	type: APP_SET_STATUS,
	status,
} as const)

export const appSetError = (error: null | string) => ({
	type: APP_SET_ERROR,
	error,
} as const)

export const appSetInitialized = (initialized: boolean) => ({
	type: APP_SET_INITIALIZED,
	initialized,
} as const)

export type ActionType
	= ReturnType<typeof appSetStatus>
	| ReturnType<typeof appSetError>
	| ReturnType<typeof appSetInitialized>
