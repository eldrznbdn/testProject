import React, { useState } from 'react'
import Container from '../../components/Container/Container.styled';
import image from './../../icons/loginImage.svg'
import { Form } from './Login.styled';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from './../../reduxFunc/functionality';
import Layout from '../../components/Layout/Layout';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const dispatch = useDispatch();
    // Check if both email and password have values
    const areInputsFilled = email.trim() !== "" && password.trim() !== "";

    // Enable or disable the button based on input values
    const handleInputChanged = () => {
        setIsButtonEnabled(areInputsFilled);
    };

    return (
        <div>
            <Layout showButton = {false}/>
            <Container style={{ display: 'flex', height: 'var(--custom-height)' }}>
                <img style={{ maxWidth: '60%' }} alt='img' src={image}></img>
                <Form>
                    <form>
                        <h1>Login</h1>
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
                        <p className="form__paragraph">Forgot password?</p>
                        <Link to={areInputsFilled ? "/" : "#"}>
                            <button disabled={!isButtonEnabled} onClick={() => dispatch(setIsLoggedIn(true))}>Sign in</button>
                        </Link>
                        <p>
                            Don't have an account?
                            <NavLink
                                exact={true}
                                to="/signin"
                                activeClassName="selected"
                                style={{ color: "rgba(178, 159, 126, 1)" }}
                            >
                                Sign Up
                            </NavLink>
                        </p>
                    </form>
                </Form>
            </Container>
        </div>
    )
}

export default Login;
