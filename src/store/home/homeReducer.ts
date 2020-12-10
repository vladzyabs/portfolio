import { StatusFeedbackFormType } from './types'
import { Dispatch } from 'redux'
import { appSetStatus } from '../app/appReducer'
import { FeedbackFormType } from '../../api/apiType'
import { postFeedbackForm } from '../../api/api'

const SET_STATUS_FEEDBACK_FORM = 'HOME/SET_STATUS_FEEDBACK_FORM'

const initialState = {
	statusFeedbackForm: 'idle' as StatusFeedbackFormType,
}

type InitialStateType = typeof initialState

const homeReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case 'HOME/SET_STATUS_FEEDBACK_FORM':
			return { ...state, statusFeedbackForm: action.payload }
		default:
			return state
	}
}

export default homeReducer


// actions =============================================================================================================

const setStatusFeedbackForm = (status: StatusFeedbackFormType) => ({
	type: SET_STATUS_FEEDBACK_FORM,
	payload: status,
} as const)

type ActionType = ReturnType<typeof setStatusFeedbackForm>


// thunks ==============================================================================================================

export const sendFeedbackForm = (data: FeedbackFormType) =>
	async (dispatch: DispatchType) => {
		dispatch(appSetStatus('loading'))
		dispatch(setStatusFeedbackForm('loading'))
		try {
			const res = await postFeedbackForm(data)
			if (res.status === 200) {
				dispatch(appSetStatus('succeeded'))
				dispatch(setStatusFeedbackForm('sent'))
			}
			// TODO: add error handling
		} catch (e) {
			// TODO: add error handling
			dispatch(appSetStatus('failed'))
			dispatch(setStatusFeedbackForm('failed'))
			console.log('oops, something went wrong')
		}
	}

type DispatchType = Dispatch<ActionType | ReturnType<typeof appSetStatus>>
