import './Login.css';
import {LoginForm} from "../../components/LoginForm/LoginForm.jsx";
import {LoginBanner} from '../../components/LoginBanner/LoginBanner.jsx';

const Login = () => {
	return(
		<main className='loginMain'>
			<div className='loginContent'>
				<LoginForm/>
				<LoginBanner/>
			</div>
			
		</main>
	);
};

export { Login };