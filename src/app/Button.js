import Link from 'next/link';

const Button = ({ href, onClick, children }) => {
  if (href) {
    return (
      
        <a className=" text-white text-m border-r-2 p-2 border-indigo-500 ... sm:text-lg font-Barlow  px-4 py-2 duration-300" onClick={onClick}>
          {children}
        </a>
    );
  } else {
    return (
      <button className="border-r-2 p-2 border-indigo-500 ... text-white text-m sm:text-lg font-Barlow py-2 duration-300" onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
