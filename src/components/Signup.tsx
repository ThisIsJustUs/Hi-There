import React, { useState } from 'react';
import { SignupButton } from './Navbar';

const drawing = require('../images/steps.png') as string;

export const Signup: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setEmail(e.target.value);
        console.log(email);
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
                <form className='w-full my-5' action='submit'>
                    <div className='flex items-center mb-6'>
                        <div>
                            <div className='my-2 flex flex-row justify-around'>
                                <input
                                    className='w-3/5 mr-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                    id='inline-full-name'
                                    type='text'
                                    placeholder='Email'
                                    onChange={handleChange}
                                />
                                <div className='w-2/5 text-base'>
                                    <SignupButton />
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
