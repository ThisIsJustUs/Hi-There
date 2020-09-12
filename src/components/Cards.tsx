import React from 'react';

const bookmark = require('../images/bookmark.svg') as string;
const code = require('../images/code.svg') as string;
const cube = require('../images/cube.svg') as string;

const data = [
    {
        title: 'Shipping Communication',
        description:
            'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
        image: bookmark,
    },
    {
        title: 'Marketing performance',
        description:
            'Aliquam at bibendum orci. Nullam velit quam, tempor ac feugiat in, sagittis non neque.',
        image: code,
    },
    {
        title: 'Logistic performance',
        description:
            'Donec porta quam et turpis tempus feugiat. Praesent non mi ligula.',
        image: cube,
    },
];

export const Card: React.FC<{
    title: string;
    description: string;
    image: string;
}> = ({ title, description, image }) => {
    return (
        <div className='flex justify-center flex-col m-4 sm:w-1/3'>
            <div className='flex justify-center my-3'>
                <img src={image} alt='bookmark' className='w-10' />
            </div>
            <h4 className='font-display text-2xl text-center'>{title}</h4>
            <p className='text-center m-4'>{description}</p>
            <div className='flex justify-center'>
                <button className='text-indigo-800'>Discover</button>
            </div>
        </div>
    );
};

export const Cards: React.FC = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <h2 className='text-3xl text-center font-display'>
                    Grow your business with better Shipping
                </h2>
                <p className='text-base m-6'>
                    We help the world’s leading organizations follow their
                    shipping
                </p>
            </div>
            <div className='container flex justify-center flex-col sm:flex-row'>
                {data.map((item) => {
                    return (
                        <Card
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};
