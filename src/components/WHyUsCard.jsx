import React from 'react';

const WHyUsCard = ({name,image,description,textAlign}) => {
    const justifyCol = textAlign != 'text-center' ? (textAlign == 'text-right' ? 'lg:justify-end justify-center' : 'lg:justify-start justify-center') :'justify-center' ;
    const textAlignCol = textAlign != 'text-center' ? (textAlign == 'text-right' ? 'lg:text-right text-center' : 'lg:text-left text-center') :'text-center' ;
    return (
        
        <div className='flex'>
            <div className="card flex-1">
                <div className={`flex ${justifyCol} justify-center `}>
                <figure className="my-2">
                    <img className="h-16 p-2 bg-teal-800 rounded-xl" src={image} alt={name} />
                    
                </figure>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className={`${textAlignCol} text-2xl font-semibold`}>{name}</h2>
                    <p className={`${textAlignCol} text-gray-400`}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default WHyUsCard;