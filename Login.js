import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.get('http://localhost:5000/Users') // Replace 'your_json_file.json' with your JSON file URL
            .then(response => {
                const users = response.data;
                const matchingUser = users.find(user => user.email === data.email);
                if (matchingUser) {
                    // Redirect to Product.js if email matches
                    window.location.href = '/product';
                } else {
                    // Display error message if email does not match
                    alert('Invalid email or password');
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div>Login
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span>Email is required</span>}
                <input type="password" {...register("password", { required: true })} placeholder="Password" />
                {errors.password && <span>Password is required</span>}
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};
