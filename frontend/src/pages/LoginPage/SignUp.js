import React, { useState } from 'react';
import Container from '../../components/Container/Container.styled';
import image from './../../icons/loginImage.svg';
import { Form } from './Login.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout/Layout';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    // Check if both email, password, and repeated password have values
    const areInputsFilled = email.trim() !== "" && password.trim() !== "" && repeatPassword.trim() !== "";

    // Check if the password and repeat password match
    const doPasswordsMatch = password === repeatPassword;

    // Enable or disable the button based on input values and password matching
    const handleInputChanged = () => {
        setIsButtonEnabled(areInputsFilled && doPasswordsMatch);
    };

    return (
        <div>
            <Layout showButton={false} />
            <Container style={{ display: 'flex', height: 'var(--custom-height)' }}>
                <img style={{ maxWidth: '60%' }} alt='img' src={image}></img>
                <Form>
                    <form>
                        <h1>Sign Up</h1>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                handleInputChanged();
                            }}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                handleInputChanged();
                            }}
                        />
                        <label>Repeat Password</label>
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            value={repeatPassword}
                            onChange={(e) => {
                                setRepeatPassword(e.target.value);
                                handleInputChanged();
                            }}
                        />
                        <Link to={areInputsFilled ? "/login" : "#"}>
                            <button disabled={!isButtonEnabled} onClick={() => console.log("fefefe")}>Sign up</button>
                        </Link>
                    </form>
                </Form>
            </Container>
        </div>
    );
}

export default SignUp;
