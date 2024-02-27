import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MaxWidthWrapper = ({ children }: IProps) => {
  return <div className="max-w-5xl mx-auto">{children}</div>;
};

export default MaxWidthWrapper;
