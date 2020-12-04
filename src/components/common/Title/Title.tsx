import React from 'react'
import cn from 'classnames'
import classes from './Title.module.scss'

type PropType = {
	title: string
	supTitle?: string
	className?: string
}

const Title: React.FC<PropType> = ({ title, supTitle, className }) => {
	return (
		<div className={cn(classes.wrapper, className)}>
			{supTitle && <p className={classes.supTitle}>{supTitle}</p>}
			<h2 className={classes.title}>{title}</h2>
		</div>
	)
}

export default React.memo(Title)
