interface Props {
  className?: string;
  isActive: boolean;
  title: string;
}

export const NavbarItem = (props: Props) => {
  return (
    <button
      className={`${props.className} ${
        props.isActive ? "text-yellow-500" : ""
      } px-2 md:pr-5 space-x-3 transition delay-50 md:space-x-6 hover:text-primary hover:cursor-pointer`}
    >
      {props.title}
    </button>
  );
};
