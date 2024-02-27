import React from "react";

interface IProps {
  title: string;
}

const SectionTitle = ({ title }: IProps) => {
  return (
    <h3 className="md:text-2xl lg:text-4xl text-xl font-bold text-center">
      {title}
    </h3>
  );
};

export default SectionTitle;
