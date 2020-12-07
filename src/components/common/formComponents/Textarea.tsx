import React from 'react'
import classes from './styles.module.scss'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

type PropType = {
	label?: string
	error?: string | null
	icon?: IconProp
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

const Textarea: React.FC<PropType> = ({ label, error, icon, ...props }) => {
	return (
		<div className={classes.textareaWrapper}>
			<label>
				{label && <span className={classes.label}>{label}</span>}

				<textarea required {...props}/>

				{error && <span className={classes.error}>
						<FontAwesomeIcon icon={faExclamation}/>
					{error}
					</span>}

				{icon && <span className={classes.icon}>
					<FontAwesomeIcon icon={icon}/>
				</span>}
			</label>
		</div>
	)
}

export default React.memo(Textarea)
