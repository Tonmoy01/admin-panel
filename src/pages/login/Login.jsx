import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='form-container'>
        <form>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='john@email.com' />
          </div>
          <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter your password' />
          </div>
          <button>Sign In</button>
          <p>
            No have an account?{' '}
            <Link to='/register' className='register-link'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
