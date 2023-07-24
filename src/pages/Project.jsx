import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import projects from '../helpers/projectsList'

const Project = () => {
	const { id } = useParams()
	const project = projects[id]
	console.log(project)
	return (
		<>
			<main className='section'>
				<div className='container'>
					<div className='project-details'>
						<h1 className='title-1'>{project.title}</h1>
						<img src={project.imgBig} alt='' className='project-details__cover'></img>
						<div className='project-details__desc'>
							<p>Skills: {project.skills}</p>
						</div>
						<BtnGitHub link={project.gitHubLink} />
					</div>
				</div>
			</main>
		</>
	)
}

export default Project
