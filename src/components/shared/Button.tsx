import Link from "next/link";

const buttonVariants = {
  primary:
    "inline-block text-white bg-green-700 hover:bg-transparent hover:text-black ",
  secondary:
    "inline-block text-black  bg-transparent  hover:bg-green-700 hover:text-white ",
  minimal:
    "inline-flex justify-center text-white gap-2 bg-green-700 hover:bg-transparent hover:text-green-700",
};

interface IProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants; // Use the keys of buttonVariants object as the type for variant
}

const Button = ({
  href,
  className = "",
  children,
  variant = "primary",
}: IProps) => {
  // Determine the classes based on the variant
  const variantClasses = buttonVariants[variant];
  // Combine variant classes with any custom class names provided via props
  const combinedClasses = `${variantClasses} ${className}  px-4 py-2 text-xl font-bold duration-300 border border-green-700 md:w-auto rounded`;

  return (
    <Link href="" className={combinedClasses}>
      {children}
    </Link>
  );
};

export default Button;
