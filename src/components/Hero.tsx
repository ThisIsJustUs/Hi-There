import React from 'react';
import { SignupButton } from './Navbar';

export const Hero: React.FC = () => {
    return (
        <div className='bg-purple-100 py-8 lg:py-16'>
            <div className='container mx-auto flex justify-center flex-col text-center my-5'>
                <h1 className='text-5xl font-display lg:text-6xl'>
                    Adopt, don't shop 🐶
                </h1>
                <div className='flex justify-center my-8'>
                    <p className='w-4/5 lg:w-3/5 text-gray-700'>
                        Support your local or an international shelter. There
                        are thousand of animals waiting to find a new home.
                        Change your and your new best friend’s life for the
                        better! Join the waitlist, now!
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button className='mx-3 border-2 px-4 py-2 rounded-sm text-indigo-800 border-solid border-indigo-800'>
                        Learn More
                    </button>
                    <div className='mx-3'>
                        <SignupButton />
                    </div>
                </div>
            </div>
        </div>
    );
};
