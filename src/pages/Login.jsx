import { getAdditionalUserInfo, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaBan, FaEye, FaGoogle } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.config';
import { AuthContext } from '../provider/AuthProvider';

const auth = getAuth(app);

const Login = () => {
    const [showPass,setShowPass] = useState(false);
    const [error,setError] = useState([]);
    const {logIn,setUser,updateUserProfile,passwordResetEmail,showToast} = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const handleSignInWithGoogle = ()=>{
        setError([]);
        signInWithPopup(auth,provider)
        .then((result)=>{
            const additionalInfo = getAdditionalUserInfo(result);
            // console.log(result);
            // console.log("Additional User Info:", additionalInfo);
            showToast('Logged In','');
            setUser(result.user);
            navigate('/');
            if (additionalInfo.isNewUser) {
                updateUserProfile(user, {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                })
                    .then(() => {
                        console.log("Profile updated successfully And Signed Up");
                    })
                    .catch((error) => {
                        console.error("Signed Up but Error updating profile:", error);
                    });
            }
        })
        .catch((error)=>{
            console.log(error);
            showToast('Invalid Email/Password','error');
            setUser(null);
            setError([errorMessage]);
        })
        
    }
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const handleLogin = (e)=>{
        e.preventDefault();
        setError([]);
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email,password);
        passwordResetEmail(email);
        logIn(email,password)
        .then((userCredential) => {
            showToast('Logged In','');
            const user = userCredential.user;
            setUser(user);
            // console.log('Signed In ',user);
            navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
            showToast('Invalid Email/Password','error');
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            setError([errorMessage]);
        });
    }
    return (
        <div className='min-h-fit flex justify-center items-center py-10'>
            <Helmet>
                <title>Login | PHConsultancy</title>
            </Helmet>
            <div className="w-10/12 md:w-10/12 lg:w-1/3 mx-auto my-4">
                <h3 className='text-center text-5xl font-bold mb-3'>Login</h3>
                <div className="mx-auto">
                {
                    error && error.length > 0 && (<div className='bg-red-500 text-center rounded-xl p-3 my-3 grid gap-1 text-white'>
                    { error.map((e,i) => <p key={i}>{e}</p>)}
                    </div>)
                }
                <form className="card-body shadow-lg rounded-lg" onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPass ? 'text':"password"} name='password' placeholder="Enter Your Password" className=" input input-bordered" required />
                    <button className=" bg-cyan-400 p-2 rounded-2xl absolute right-2 top-11" type='button' onClick={() => setShowPass(!showPass)}>
                    {showPass ? <FaBan/> : <FaEye/>}</button>
                    </div>
                    <div className="form-control my-6">
                    <button type='submit' className="btn bg-teal-700 text-white font-semibold hover:text-teal-800 hover:font-bold hover:bg-white">Login</button>
                    </div>
                    <div className="label font-semibold mx-auto gap-2">
                        <span className="label-text">Don't Have An Account? <NavLink className='text-teal-700 font-bold hover:text-blue-800' to='/auth/register'>Register</NavLink> </span>
                        <div className='divider divider-horizontal'></div>
                        <span className="label-text">Forgot Password ? <NavLink className='text-teal-700 font-bold hover:text-blue-800' to='/auth/changePassword'>Request New</NavLink> </span>
                    </div>
                </form>
                <div className="divider">OR</div>
                    <div className="form-control grid gap-3">
                    <button className='btn btn-success' onClick={handleSignInWithGoogle}><FaGoogle/> Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;