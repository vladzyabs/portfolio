import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import classes from './styles.module.scss'

type PropType = {
	label?: string
	error?: string | null
	icon?: IconProp
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<PropType> = ({ label, error, icon, ...props }) => {
	return (
		<div className={classes.inputWrapper}>
			<label>
				{label && <span className={classes.label}>{label}</span>}

				<input type="text" required {...props}/>

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

export default React.memo(Input)