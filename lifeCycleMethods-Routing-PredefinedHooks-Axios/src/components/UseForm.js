import React from 'react';
import { useForm } from 'react-hook-form';

export default function UseFormHandling() {
    // Initialize the useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        alert(`name:${data.name}, email: ${data.email}`)
    };

    return (
        <div className='row w-100 user-form-container'>
            <div className='w-25'>
                <h3>User Details</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                {...register('name', { required: '*Name is required' })}
                            />
                            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                {...register('email', {
                                    required: '*Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message: '*Invalid email format',
                                    },
                                })}
                            />
                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                type="password"
                                {...register('password', { required: '*Password is required' })}
                            />
                            {errors.password && <p className='text-danger'>{errors.password.message}</p>}

                        </label>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className='btn btn-primary rounded py-0'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
