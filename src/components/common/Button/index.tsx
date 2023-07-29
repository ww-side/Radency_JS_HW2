import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color: string;
}

enum Colors {
  BLACK = 'bg-black hover:bg-zinc-700 text-white',
  BLUE = 'bg-blue-500 hover:bg-blue-600 text-white',
  WHITE = 'bg-white hover:bg-gray-300 text-black',
}

const Button: FC<ButtonProps> = ({ onClick, children, color }) => {
  const BLACK_COLOR = 'black';
  const BLUE_COLOR = 'blue';
  const WHITE_COLOR = 'white';

  const getColor = (color: string) => {
    switch (color) {
      case BLACK_COLOR:
        return Colors.BLACK;
      case BLUE_COLOR:
        return Colors.BLUE;
      case WHITE_COLOR:
        return Colors.WHITE;
      default:
        return Colors.BLACK;
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-1 font-normal ${getColor(
        color
      )} py-3 px-5 rounded-xl shadow-2xl transition duration-300 ease-in-out mb-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
