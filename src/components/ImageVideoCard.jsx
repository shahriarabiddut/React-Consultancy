import React, { useState } from 'react';

const ImageVideoCard = ({image,video}) => {
    const [isOpen, setIsOpen] = useState(false);
    const showVideo = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="flex cursor-pointer hover:shadow-xl hover:shadow-teal-700 rounded-xl">
                    <figure onClick={showVideo}>
                        <img
                        src={image}
                        alt="Webinar" className='rounded-xl' />
                    </figure>
            </div>

            {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal modal-open">
            <div className="modal-box relative bg-teal-100">
              <button
                className="bg-black text-white p-1 rounded-lg absolute right-1 top-1"
                onClick={showVideo}
              >X</button>
              <div className="flex justify-center items-center py-3">
                <video controls className="w-full rounded-lg"
                autoPlay
                playsInline
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    );
};

export default ImageVideoCard;