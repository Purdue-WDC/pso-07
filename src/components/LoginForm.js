import React, { useState } from "react";

const LoginForm = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleUser = (event) => {
        setUser({
            username: event.target.value,
            password: user.password
        });
    }

    const handlePassword = (event) => {
        setUser({
            username: user.username,
            password: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(user);
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username</label>
					<input type="text" onChange={handleUser} />
				</div>
				<div>
					<label>Password</label>
					<input type="password" onChange={handlePassword} />
				</div>
                <button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
