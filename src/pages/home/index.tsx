import React from 'react'

const HomePage: React.FC = () => {

	const styles = {
		img: {
			display: 'block',
			width: '100vw',
			height: '100vh',
		},
	}

	return (
		<React.Fragment>
			<section>
				<img style={styles.img}
						 src="https://demo.w3layouts.com/demos_new/template_demo/27-03-2020/my_website-liberty-demo_Free/987990477/web/assets/images/1.jpg"
						 alt=""/>
			</section>
			<section>
				<img style={styles.img}
						 src="https://demo.w3layouts.com/demos_new/template_demo/27-03-2020/my_website-liberty-demo_Free/987990477/web/assets/images/1.jpg"
						 alt=""/>
			</section>
		</React.Fragment>
	)
}

export default React.memo(HomePage)
