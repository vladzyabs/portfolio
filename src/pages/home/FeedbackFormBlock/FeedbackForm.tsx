import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faEnvelope, faPaperPlane, faPen, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button, Input, Textarea } from '../../../components/common'

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

const FeedbackForm: React.FC = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		validationSchema,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
	})

	return (
		<form className={'feedback__form'} onSubmit={formik.handleSubmit}>
			<div className={'feedback__form-l'}>
				<div className="feedback__form-item">
					<Input label={'Name'} icon={faUser}
								 error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
								 {...formik.getFieldProps('name')}
					/>
				</div>
				<div className="feedback__form-item">
					<Input label={'Email'} icon={faEnvelope}
								 error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
								 {...formik.getFieldProps('email')}
					/>
				</div>
				<div className="feedback__form-item">
					<Input label={'Subject '} icon={faPen}
								 error={formik.touched.subject && formik.errors.subject ? formik.errors.subject : null}
								 {...formik.getFieldProps('subject')}
					/>
				</div>
			</div>
			<div className={'feedback__form-r'}>
				<div className="feedback__form-item">
					<Textarea label={'Your Message'} icon={faCommentAlt} rows={3}
										error={formik.touched.message && formik.errors.message ? formik.errors.message : null}
										{...formik.getFieldProps('message')}
					/>
				</div>
				<div className={'feedback__form-button'}>
					<Button type={'submit'}>Send <FontAwesomeIcon icon={faPaperPlane}/></Button>
				</div>
			</div>
		</form>
	)
}

export default React.memo(FeedbackForm)
