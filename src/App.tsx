import { useState } from 'react';
import classNames from 'classnames';
import { Button } from './components/Button';
import './styles/global.css';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const handleChangeActive = () => {
    setIsActive(!isActive);
  };

  // 'flex items-center flex-col gap-2 bg-zinc-800 rounded p-4 text-purple-300 w-[600px] max-w-full text-center ease-in'
  return (
    <div className='w-screen h-screen bg-zinc-900 flex flex-col items-center justify-center gap-4'>
      <div className='flex gap-4'>
        <Button>Button</Button>
        <Button asChild>
          <a href='https://www.linkedin.com/in/jessejonass/'>
            Button asChild (Link)
          </a>
        </Button>
      </div>

      <div
        className={classNames(
          'flex items-center flex-col gap-2 rounded p-4 text-purple-300 w-[600px] max-w-full text-center',
          {
            'bg-zinc-800': isActive,
            'bg-zinc-700': !isActive,
          }
        )}
      >
        <span>
          Changing styles with classNames. The current status is:{' '}
          <strong className='text-zinc-100'>
            {isActive ? 'active' : 'inactive'}
          </strong>
        </span>
        <Button onClick={handleChangeActive}>
          Change status and className
        </Button>
      </div>
    </div>
  );
};

export { App };
