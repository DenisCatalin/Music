import React, {useState} from 'react'
import { SignInPage, LogoContainer, LogoTitle, DivWrapper, FormButton, LoginButtons, GoogleButton, FacebookButton, Title } from './login.styles.jsx';
import FormInput from '../../components/form-input/form-input.component';
import Logo from '../../assets/img/music.png'
import { FormWrapper } from '../../components/form-input/form-input.styles.jsx';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const {email, password} = userCredentials;
    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();

        if(email === 'admin' && password === 'admin') {
            console.log('All Good');
            localStorage.setItem('currentUser', true);
            history.push('/home');
        } else console.log('Something is wrong');

        setCredentials({ email: '', password: '' });
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value });
    }

    return (
        <SignInPage>
            <DivWrapper>
                <LogoContainer src={Logo}/>
                <LogoTitle>Musify</LogoTitle>
            </DivWrapper>
            <DivWrapper>
                <FormWrapper onSubmit={handleSubmit} style={{width: '100%'}}>
                    <FormInput 
                        name='email' 
                        type="text" 
                        value={email} 
                        handleChange={handleChange}
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type="password" 
                        value={password} 
                        handleChange={handleChange}
                        label='password'
                        required 
                    />
                    <FormButton>LOGIN</FormButton>
                </FormWrapper>
            </DivWrapper>
            <DivWrapper>
                <Title>Or sign in with</Title>
                <LoginButtons>
                    <FacebookButton>f</FacebookButton>
                    <GoogleButton>G</GoogleButton>
                </LoginButtons>
            </DivWrapper>
        </SignInPage>
    )
}

export default Login
