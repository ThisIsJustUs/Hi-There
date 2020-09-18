import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div className='bg-soft py-5 px-8 flex flex-col md:px-20'>
            <ul className='font-display text-2xl md:flex md:justify-between'>
                <div>
                    <li className='my-5'>Work with us</li>
                    <li className='my-5'>How Hi Friend was built</li>
                    <li className='my-5'>justus@hifriend.com</li>
                </div>
                <div>
                    <li className='my-5'>Twitter</li>
                    <li className='my-5'> TikTok</li>
                </div>
            </ul>
            <ul className='mt-10 text-grey6 font-bold flex flex-col md:flex-row md:justify-between'>
                <div className='md:flex'>
                    <li className='my-2 md:mx-2'>© 2020 Hi Friend</li>
                    <li className='my-2 md:mx-2'>Imprint</li>
                    <li className='my-2 md:mx-2'>Press</li>
                    <li className='my-2 md:mx-2'>Privacy Policy</li>
                </div>
                <div>
                    <li className='my-2 md:mx-2 self-end'>
                        Crafted with ❤ in 🇪🇺
                    </li>
                </div>
            </ul>
        </div>
    );
};
