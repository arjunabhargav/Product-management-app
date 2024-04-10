import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

export const UseFormHook = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLogin = (data) => {
    // Handle login logic here
  };

  return (
    <div>
      UseFormHook
      <Form onSubmit={handleSubmit(handleLogin)}>
        <input type="email" name="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        
        <input type="password" name="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
        
        <input type="submit" value="Login" />
      </Form>
    </div>
  );
};
