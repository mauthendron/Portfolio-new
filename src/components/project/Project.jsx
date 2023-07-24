import React from 'react';
import './project.style.css'


const Project = ({title, img}) => {
	return (
		<>
			<li className='project'>
				<a href='./project-page.html'>
					<img src={img} alt={title} className='project__img'></img>
					<h3 className='project__title'>{title}</h3>
				</a>
			</li>
		</>
	)
}

export default Project;
