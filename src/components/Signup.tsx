import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const drawing = require('../images/steps.png') as string;

export const Signup: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await addToMailchimp(email, null, null);

        if (res.result === 'success') {
            console.log(res);
        } else {
            console.log(res.result);
        }

        setEmail('');
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    return (
        <div className='mx-6'>
            <div className=''>
                <img src={drawing} alt='Email' />
            </div>
            <div className='flex flex-col'>
                <h2 className='font-display text-2xl'>
                    No reason to say 'Nein'
                </h2>
                <p>
                    Easy as drinking a smoothie. Simply sign up and you'll be
                    the first one to know when we go live.
                </p>
                <form onSubmit={handleSubmit} className='w-full my-5'>
                    <div className='flex items-center mb-6'>
                        <div>
                            <div className='my-2 flex flex-row justify-around'>
                                <input
                                    className='w-3/5 mr-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                    id='inline-full-name'
                                    type='text'
                                    name='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <div className='w-2/5 text-base'>
                                    <button
                                        type='submit'
                                        className='bg-indigo-800 text-white px-4 py-2 rounded-sm'
                                    >
                                        Join Waitlist!
                                    </button>
                                </div>
                            </div>
                            <span className='text-xs text-gray-400 mx-2'>
                                We promise, we won't spam you 😉
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
