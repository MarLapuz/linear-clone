import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames("mx-auto max-w-[120rem] px-5 md:px-8", className)}
    >
      {children}
    </div>
  );
};
