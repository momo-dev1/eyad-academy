interface IProps {
  title: string;
  textSize: "small" | "medium" | "large";
}

const textSizeClasses = {
  small: "text-xl md:text-2xl",
  medium: "md:text-2xl lg:text-3xl",
  large: "md:text-3xl lg:text-4xl",
};
const Title = ({ title, textSize }: IProps) => {
  const textSizeClass = textSizeClasses[textSize] || textSizeClasses.medium;

  return <h3 className={`${textSizeClass} font-bold`}>{title}</h3>;
};

export default Title;
