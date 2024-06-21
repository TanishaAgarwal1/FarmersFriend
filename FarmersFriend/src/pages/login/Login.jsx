import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import backgroundImage from "./grass.jpg";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div
            className='flex items-center justify-center h-screen'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' style={{ color: 'black' }}>
                <h1 className='text-3xl font-semibold text-center '>
                    Login
                </h1>

                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className='label p-2'>
                            <span className=' label-text  text-2xl font-medium' style={{ color: 'black' }}>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <label className='label'>
                            <span className=' label-text text-2xl font-medium' style={{ color: 'black' }}>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <div className="mt-4">
                        <button className='btn btn-block btn-sm' disabled={loading}>
                            {loading ? <span className='loading loading-spinner '></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
