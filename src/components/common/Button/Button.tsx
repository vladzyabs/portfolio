import React from 'react'
import cn from 'classnames'
import classes from './Button.module.scss'

type PropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<PropsType> = (props) => {
	return (
		<button {...props} className={cn(classes.button, props.className)}/>
	)
}

export default React.memo(Button)
