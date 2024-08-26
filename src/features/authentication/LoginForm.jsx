import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import Button from '../../ui/Button.jsx';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setIsHide] = useState(true);
  const [isRemember, setIsRemember] = useState(false);

  const passwordType = isHide ? 'password' : 'text';
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-14">
      <img src="Logo.png" alt="logo" />
      <form className="flex w-60 flex-col items-center gap-5 border border-sky-100 bg-white p-4 lg:w-80 lg:gap-10">
        <h1 className="text-lg lg:text-2xl">Login</h1>
        <div className="flex w-full flex-col gap-2">
          <input
            className="w-full border-b border-gray-700 text-sm focus:outline-none lg:text-base"
            autoComplete="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-between border-b border-gray-700">
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

          <div className="space-x-1">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              checked={isRemember}
              onChange={(e) => setIsRemember(e.target.checked)}
            />
            <label
              className="content-center text-xs lg:text-sm"
              htmlFor="remember"
            >
              Remember me
            </label>
          </div>
        </div>
        <Button type="full">Login</Button>
      </form>
    </div>
  );
}

export default LoginForm;
