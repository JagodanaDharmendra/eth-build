import { IButtonItemProps } from ".";

function ButtonItem({ href, title, titleIcon, Button }: IButtonItemProps) {
  return (
    <a
      href={href}
      className="flex w-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button onClick={() => {}} styleClassNames="flex-1">
        {titleIcon && <span>{titleIcon}</span>}
        <span>{title}</span>
      </Button>
    </a>
  );
}

export default ButtonItem;
