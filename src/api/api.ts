import axios from 'axios'
import { FeedbackFormType } from './apiType'

const instance = axios.create({
	baseURL: 'https://site-portfolio-server.herokuapp.com/',
})

export const postFeedbackForm = (values: FeedbackFormType) => instance.post(`send-message`, { values })
