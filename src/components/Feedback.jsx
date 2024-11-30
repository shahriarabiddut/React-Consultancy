import React, { useContext, useState } from 'react';
import { FaBan, FaCheck, FaComment } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const Feedback = () => {
    const {showToast} = useContext(AuthContext)
    const mentalWellnessFeedback = [
        "Taking care of your mind is just as important as your body.",
        "Regular breaks can work wonders for mental clarity.",
        "It's okay to ask for help; seeking support is a sign of strength.",
        "A little mindfulness every day can make a big difference.",
        "Stay connected with loved ones to nurture emotional well-being."
      ]
    const[feedback,setFeedback] = useState([...mentalWellnessFeedback])
    const[commentBox,setCommentBox] = useState(false)
    const handleFeedback = (e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const comment = form.get('comment');
        setFeedback([...feedback,comment]);
        showToast('Feedback sent','success');
        e.target.reset();
    }
    return (
        <div>
            
            {
                feedback.map((f,index)=> <div key={index} className='flex items-center gap-2'> <FaCheck/> <p  className=' border-b my-2 border-b-orange-300'> {f}</p> </div> )
            }
            {commentBox &&
                <div className='my-2'>
                    <form className="py-2" onSubmit={handleFeedback}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Add Your Feedback</span>
                    </label>
                    <textarea name="comment" className="input input-bordered" required  id=""></textarea>
                    </div>
                    <div className="form-control my-6">
                    <button type='submit' className="btn bg-teal-700 text-white font-semibold">Submit</button>
                    </div>
                </form>
                </div>
            }
            <button onClick={()=>{setCommentBox(!commentBox)}} className='my-2 bg-teal-700 text-white p-3 font-semibold font-montserrat cursor-pointer hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 rounded-lg flex gap-2 items-center'> {commentBox ? <FaBan/> : <FaComment/>} {commentBox ? ' Hide Feedback Form' : 'Add FeedBack'} </button>
        </div>
    );
};

export default Feedback;