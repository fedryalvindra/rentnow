import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setIsHide] = useState(true);
  const [isRemember, setIsRemember] = useState(false);

  const passwordType = isHide ? 'password' : 'text';
  return (
    <div className="flex flex-col items-center gap-5">
      <img src="Logo.png" alt="logo" />
      <form className="flex w-60 flex-col items-center gap-5 border border-sky-100 bg-white p-4">
        <h1 className="text-lg">Login</h1>
        <div className="flex w-full flex-col gap-1">
          <input
            className="w-full border-b border-gray-700 text-sm focus:outline-none"
            autoComplete="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center justify-between border-b border-gray-700">
            <input
              className="w-full= text-sm focus:outline-none"
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
            <label className="text-xs" htmlFor="remember">
              Remember me
            </label>
          </div>
        </div>
        <button className="w-full bg-sky-400 text-white hover:bg-sky-500">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
