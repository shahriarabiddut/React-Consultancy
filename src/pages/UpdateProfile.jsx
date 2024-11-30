import { getAuth } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.config';
import { AuthContext } from '../provider/AuthProvider';

const auth = getAuth(app);

const UpdateProfile = () => {
    const {user,updateUserProfile,showToast} = useContext(AuthContext);
    const [name,setName] = useState('');
    const [photo,setPhoto] = useState('');
    const navigate = useNavigate();
    const handleUpdate = (e)=>{
        e.preventDefault();
        updateUserProfile({displayName:name,photoURL:photo})
        .then(()=>{
            navigate('/profile')
        }).catch((error) => {
            console.log(error);
        })
        // console.log('Updated ',user);
        showToast('Profile Updated','info')
    }
    useEffect(() => {
        setName(user?.displayName || '');
        setPhoto(user?.photoURL || '');
    }, [user]);
    return (
        <div className='min-h-fit flex justify-center items-center py-10'>
            <Helmet>
                <title>Update Profile | PHConsultancy</title>
            </Helmet>
            <div className="w-11/12 md:w-8/12 lg:w-1/3 mx-auto my-4">
                <h3 className='text-center text-5xl font-bold mb-3'>Update Profile</h3>
                <div className="mx-auto">
                <form className="card-body shadow-lg rounded-lg" onSubmit={handleUpdate}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' value={photo} onChange={(e) => setPhoto(e.target.value)}  placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control my-6">
                    <button type='submit' className="btn bg-teal-700 text-white font-semibold hover:text-teal-800 hover:font-bold hover:bg-white">Update</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;