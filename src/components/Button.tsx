import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

const Button: FC<ButtonProps> = (props) => {
  const ButtonSlot = props.asChild ? Slot : 'button';

  return (
    <ButtonSlot
      className='px-4 py-2 rounded bg-violet-600 text-white font-bold'
      {...props}
    />
  );
};

export { Button };
