import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div className='bg-soft py-5 px-8'>
            <ul className='font-display text-2xl'>
                <li className='my-5'>Work with us</li>
                <li className='my-5'>How Hi Friend was built</li>
                <li className='my-5'>justus@hifriend.com</li>
                <li className='my-5'>Twitter</li>
                <li className='my-5'> TikTok</li>
            </ul>
            <ul className='mt-10'>
                <li className='my-3'>© 2020 Hi Friend</li>
                <li className='my-3'>Imprint</li>
                <li className='my-3'>Press</li>
                <li className='my-3'>Privacy Policy</li>
                <li className='my-3'>Crafted with ❤ in 🇪🇺</li>
            </ul>
        </div>
    );
};
