import React from 'react'
import { Container } from '../../../components/common'

const projects = [
	{ id: '1', title: 'todo', link: '#/', img: '', description: '' },
	{ id: '2', title: 'weather', link: '#/', img: '', description: '' },
	{ id: '3', title: 'social network', link: '#/', img: '', description: '' },
	{ id: '4', title: 'pizza market', link: '#/', img: '', description: '' },
]

const ProjectsBlock: React.FC = () => {
	return (
		<section className={ 'projects' }>
			<Container>
				<div className={ 'projects__content' }>

					{
						projects.map(p => <div key={ p.id } className={ 'projects__card' }>
							<a href={ p.link }>
								<div className={'card-face card-face__front'}>
									<img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" />
								</div>
								<div className={'card-face card-face__back'}>
									<img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg" />
								</div>
							</a>
						</div>)
					}

				</div>
			</Container>
		</section>
	)
}

export default React.memo(ProjectsBlock)
