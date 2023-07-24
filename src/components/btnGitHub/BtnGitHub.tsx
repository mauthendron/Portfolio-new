import './btnGitHub.style.css'
import gitHubIcon from './gitHub-black.svg'

interface BtnGitHubProps {
	link: string // Пропс link должен быть типом string
}

const BtnGitHub: React.FC<BtnGitHubProps> = ({ link }) => {
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
