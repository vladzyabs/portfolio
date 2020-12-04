import React from 'react'
import cn from 'classnames'

import classes from './Logo.module.scss'

const Logo: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={cn(classes.logo, className)}>
			<a href="/#">
				<span>&lt;</span>
				vz
				<span>/&gt;</span>
			</a>
		</div>
	)
}

export default React.memo(Logo)
