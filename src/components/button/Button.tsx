import classNames from "classnames";
import { IButtonType, IButtonProps } from ".";

function Button({
  onClick,
  type = IButtonType.PRIMARY,
  block = false,
  children = <>NULL</>,
  styleClassNames = "",
}: IButtonProps) {
  const styles = classNames(
    "h-10 md:h-12 xl:h-14 max-h-14 rounded-md items-center justify-center content-center text-white px-4 py-1 gap-3 space-x-3 text-xl",
    styleClassNames,
    type === IButtonType.PRIMARY && "bg-primary",
    type === IButtonType.SECONDARY && "bg-transparent border border-primary",
    type === IButtonType.TERTIARY && "bg-secondary",
    block && "flex"
  );

  return (
    <>
      <button onClick={onClick} className={styles}>
        {children}
      </button>
    </>
  );
}

export default Button;
