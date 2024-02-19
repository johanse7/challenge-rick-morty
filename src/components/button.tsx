import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10  items-center  justify-center disabled:opacity-40 hover:enabled:text-white text-gray-500  rounded-lg bg-gray-100 px-4 text-sm font-medium  transition-colors hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100 active:enabled:bg-primary-600 disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
};
