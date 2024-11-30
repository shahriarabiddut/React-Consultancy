import React from 'react';

const PageSlogan = ({title,slogan}) => {
    return (
        <>
            <div className='lg:w-6/12 md:w-8/12 w-full mx-auto grid gap-4 mb-4'>
                <h2 className='text-teal-800 text-center text-2xl font-semibold'>{title}</h2>
                <progress className="progress w-56 mx-auto bg-teal-400"></progress>
                <h2 className='text-teal-800 text-center text-5xl font-bold'>{slogan}</h2>
                <div className="divider"></div>
            </div>
        </>
    );
};

export default PageSlogan;