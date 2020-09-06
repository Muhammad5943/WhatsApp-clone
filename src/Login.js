import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core";
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://scontent.fjog2-1.fna.fbcdn.net/v/t1.0-9/118693075_3813606012033558_8860680461465063682_n.jpg?_nc_cat=109&_nc_sid=730e14&_nc_eui2=AeGqV0HkPC_30Eq6oN1oIVnvxvjkIH4d6fPG-OQgfh3p8wb7Yo58L3B0CvrkzUIWz1eCDSfetFyuy_OX8_2uuiip&_nc_ohc=w6QAgsuQKAUAX-lKVVE&_nc_ht=scontent.fjog2-1.fna&oh=ff81d65af3f366ad4bb1c6912c39ed6a&oe=5F799A7E"
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in to KasirinApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
