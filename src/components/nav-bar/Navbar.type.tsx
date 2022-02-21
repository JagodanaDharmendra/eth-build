export default interface INavbarProps {
  menus: Array<{ label: string; href: string }>;
  onStateChange: (isOpen: boolean) => void;
}
