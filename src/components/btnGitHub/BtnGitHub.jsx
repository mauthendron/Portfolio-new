import './btnGitHub.style.css'
import gitHubIcon from './gitHub-black.svg'


const BtnGitHub = ({link}) => {
	return (
		<>
			<a href={link} rel='noreferrer' target='_blank' className='btn-outline'>
				<img src={gitHubIcon} alt=''></img>
				GitHub repo
			</a>
		</>
	)
}

export default BtnGitHub;
