import classNames from "classnames";

interface IProps {
  href: string;
  label: string;
  onClick: () => void;
  active: boolean;
}

function Item(props: IProps) {
  return (
    <>
      <li key={`${props.label}`} onClick={props.onClick}>
        <a
          href={props.href}
          className={classNames(
            "px-3 py-2 flex items-center text-xs uppercase leading-snug  hover:opacity-75",
            props.active ? "text-primary" : "text-white"
          )}
        >
          <p>{props.label}</p>
        </a>
      </li>
    </>
  );
}

export default Item;
