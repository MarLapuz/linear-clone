import classNames from "classnames";
import { FC } from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle: FC<HeroElementProps> = ({ children, className }) => {
  return (
    <h1 className={classNames("md:text-8xl text-6xl my-6", className)}>
      {children}
    </h1>
  );
};

export const HeroSubtitle: FC<HeroElementProps> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        "md:text-xl text-primary-text text-lg mb-12",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero: FC<HeroProps> = ({ children }) => {
  return <div className="text-center">{children}</div>;
};
