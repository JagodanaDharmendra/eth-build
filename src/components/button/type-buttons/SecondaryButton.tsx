import { Button, IButtonProps, IButtonType } from "..";

function SecondaryButton(props: IButtonProps) {
  const { children, ...rest } = props;

  return (
    <Button {...rest} type={IButtonType.SECONDARY}>
      {children}
    </Button>
  );
}

export default SecondaryButton;
