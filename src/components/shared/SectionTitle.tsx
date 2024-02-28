interface IProps {
  title: string;
  textSize: "small" | "medium" | "large";
  underline?: string;
}

const textSizeClasses = {
  small: "text-xl md:text-2xl",
  medium: "md:text-2xl lg:text-3xl",
  large: "md:text-3xl lg:text-4xl",
};
const Title = ({ title, textSize, underline }: IProps) => {
  const textSizeClass = textSizeClasses[textSize] || textSizeClasses.medium;

  return (
    <h3
      className={`relative ${textSizeClass} font-bold ${
        underline ? "underlines mb-10 md:mb-0" : ""
      } `}
    >
      {title}
    </h3>
  );
};

export default Title;
