import { Button, IButtonProps, IButtonType } from "..";

function PrimaryButton(props: IButtonProps) {
  const { children, ...rest } = props;

  return (
    <Button {...rest} type={IButtonType.PRIMARY}>
      {children}
    </Button>
  );
}

export default PrimaryButton;
