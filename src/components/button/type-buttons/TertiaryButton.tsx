import { Button, IButtonProps, IButtonType } from "..";

function TertiaryButton(props: IButtonProps) {
  const { children, ...rest } = props;

  return (
    <Button {...rest} type={IButtonType.TERTIARY}>
      {children}
    </Button>
  );
}

export default TertiaryButton;
