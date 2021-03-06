import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faEnvelope, faPaperPlane, faPen, faUser, faSpinner } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import Zoom from 'react-reveal/Zoom'
import { StatusFeedbackFormType } from '../../../store/home/types'
import { sendFeedbackForm } from '../../../store/home/homeReducer'
import { Button, Input, Textarea } from '../../../components/common'
import { FeedbackFormType } from '../../../api/apiType'

const validationSchema = Yup.object({
	name: Yup.string()
		.required('Required')
		.max(40, 'Must be 40 characters or less'),
	email: Yup.string()
		.required('Required')
		.email('Invalid email address')
		.max(30, 'Must be 30 characters or less'),
	subject: Yup.string()
		.required('Required')
		.max(30, 'Must be 30 characters or less'),
	message: Yup.string()
		.required('Required')
		.max(500, 'Must be 500 characters or less'),
})

const FeedbackForm: React.FC<{ statusForm: StatusFeedbackFormType }> = ({ statusForm }) => {
	const dispatch = useDispatch()

	const formik = useFormik<FeedbackFormType>({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		validationSchema,
		onSubmit: (values) => {
			dispatch(sendFeedbackForm(values))
		},
	})

	return (
		<form className={'feedback__form'} onSubmit={formik.handleSubmit}>
			<div className={'feedback__form-l'}>
				<Zoom><div className="feedback__form-item">
					<Input label={'Name'} icon={faUser}
								 error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
								 {...formik.getFieldProps('name')}
					/>
				</div></Zoom>
				<Zoom><div className="feedback__form-item">
					<Input label={'Email'} icon={faEnvelope}
								 error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
								 {...formik.getFieldProps('email')}
					/>
				</div></Zoom>
				<Zoom><div className="feedback__form-item">
					<Input label={'Subject '} icon={faPen}
								 error={formik.touched.subject && formik.errors.subject ? formik.errors.subject : null}
								 {...formik.getFieldProps('subject')}
					/>
				</div></Zoom>
			</div>
			<div className={'feedback__form-r'}>
				<Zoom><div className="feedback__form-item">
					<Textarea label={'Your Message'} icon={faCommentAlt} rows={3}
										error={formik.touched.message && formik.errors.message ? formik.errors.message : null}
										{...formik.getFieldProps('message')}
					/>
				</div></Zoom>
				<Zoom><div className={'feedback__form-button'}>
					<Button type={'submit'}
									disabled={
										!!formik.errors.message ||
										!!formik.errors.subject ||
										!!formik.errors.email ||
										!!formik.errors.name ||
										statusForm === 'loading' ||
										statusForm === 'sent'
									}
					>Send
						{statusForm === 'loading'
							? <FontAwesomeIcon icon={faSpinner} pulse/>
							: <FontAwesomeIcon icon={faPaperPlane}/>}
					</Button>
				</div></Zoom>
			</div>
		</form>
	)
}

export default React.memo(FeedbackForm)
