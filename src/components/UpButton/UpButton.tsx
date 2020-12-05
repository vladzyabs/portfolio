import React from 'react'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import classes from './UpButton.module.scss'

const UpButton: React.FC = () => {
	const [showBtn, setShowBtn] = React.useState<boolean>(false)

	const onUpHandler = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const toggleShowBtn = () => {
		if (window.pageYOffset > 50) {
			setShowBtn(true)
		} else {
			setShowBtn(false)
		}
	}

	React.useEffect(() => {
		window.addEventListener('scroll', toggleShowBtn)

		return () => window.removeEventListener('scroll', toggleShowBtn)
	}, [setShowBtn])

	return (
		<button className={cn(classes.button, showBtn ? classes.show : '')}
						onClick={onUpHandler}>
			<FontAwesomeIcon icon={faChevronUp}/>
		</button>
	)
}

export default React.memo(UpButton)
