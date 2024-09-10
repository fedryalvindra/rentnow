import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import Button from '../../ui/Button.jsx';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setIsHide] = useState(true);
  const passwordType = isHide ? 'password' : 'text';
  
  return (
    <div className="mt-[-10rem] flex flex-col items-center p-3">
      <img src="Logo.png" alt="logo" />
      <form className="flex w-60 flex-col items-center gap-5 rounded-md border border-gray-100 bg-white p-4 lg:w-80 lg:gap-10">
        <h1 className="text-lg font-semibold lg:text-2xl">Login</h1>
        <div className="flex w-full flex-col gap-4">
          <input
            className="w-full border-b border-gray-400 text-sm focus:outline-none lg:text-base"
            autoComplete="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-between border-b border-gray-400">
            <input
              className="w-full= text-sm focus:outline-none lg:text-base"
              autoComplete="current-password"
              placeholder="Password"
              type={passwordType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isHide ? (
              <HiOutlineEyeOff
                className="cursor-pointer"
                onClick={() => setIsHide(false)}
              />
            ) : (
              <HiOutlineEye
                className="cursor-pointer"
                onClick={() => setIsHide(true)}
              />
            )}
          </div>
        </div>
        <Button type="full">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;
