import React from 'react';

export const SignupButton: React.FC = () => {
    return (
        <button
            type='submit'
            className='bg-indigo-800 text-white px-4 py-2 rounded-sm'
        >
            Join Waitlist
        </button>
    );
};

export const Navbar: React.FC = () => {
    return (
        <div className='bg-purple-100'>
            <div className='container mx-auto p-5'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-display text-2xl'>Hi Friend</h2>
                    <SignupButton />
                </div>
            </div>
        </div>
    );
};
