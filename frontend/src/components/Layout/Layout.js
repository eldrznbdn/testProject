import React from 'react';
import { StyledHeader } from './Layout.styled';
import Container from '../Container/Container.styled';
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../../reduxFunc/functionality';

const Layout = (props) => {
    const status = useSelector((state) => state.functions.value);
    console.log(status)
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{ backgroundColor: 'rgba(23, 34, 52, 1)', height: '80px' }}>
                <Container>
                    {props.showButton ? (
                    <StyledHeader>
                        {status ? (
                            <Button className='sign_out-btn btn' onClick={() => dispatch(setIsLoggedIn(false))}>Sign Out</Button>
                        ) : (
                            <div>
                                <Link to={`/login`}>
                                    <Button className='log__in-btn btn'>Log In</Button>
                                </Link>
                                <Link to={`/signin`}>
                                    <Button className='sign_up-btn btn'>Sign Up</Button>
                                </Link>
                            </div>
                        )}
                    </StyledHeader>)
                    :(<></>)
                    }
                </Container>
            </div>
        </div>
    );
}

export default Layout;
