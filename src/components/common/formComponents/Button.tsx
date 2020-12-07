import React from 'react'
import cn from 'classnames'
import classes from './styles.module.scss'

type PropType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<PropType> = (props) => {
	return (
		<button {...props} className={cn(classes.button, props.className)}/>
	)
}

export default React.memo(Button)
