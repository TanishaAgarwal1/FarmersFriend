import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import backgroundImage from "./grass.jpg"

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex items-center justify-center h-screen'
		style={{
			backgroundImage: `url(${backgroundImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
            color: 'black'
		}}>
            <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
                <h1 className='text-3xl  text-center text-gray-300 font-bold' style={{ color: 'black' }}>
                    Sign Up
                </h1>

                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text' style={{ color: 'black' }}>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='John Doe'
                            className='w-full input input-bordered  h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div className="mt-4">
                        <label className='label p-2 '>
                            <span className='text-base label-text' style={{ color: 'black' }}>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='johndoe'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div className="mt-4">
                        <label className='label'>
                            <span className='text-base label-text' style={{ color: 'black' }}>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className="mt-4">
                        <label className='label'>
                            <span className='text-base label-text' style={{ color: 'black' }}>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link
                        to={"/login"}
                        className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
                    >
                        Already have an account?
                    </Link>

                    <div className="mt-4">
                        <button className='btn btn-block btn-sm border border-slate-700' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUp;
