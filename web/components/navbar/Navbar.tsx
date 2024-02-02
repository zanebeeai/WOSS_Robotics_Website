import Link from "next/link";
import { NavbarItem } from "./NavbarItem";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  className?: string;
}

export const Navbar = (props: Props) => {
  const navbarItems = [
    { title: "About", path: "/about" },
    { title: "History", path: "/history" },
    // { title: "Events", path: "/events" },
    { title: "Sponsors", path: "/sponsors" },
    { title: "Contact Us", path: "/contact" },
  ];

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div
        className={`${props.className} flex flex-col mt-10 space-y-2 text-gray-300`}
      >
        <div className="flex-wrap md:flex justify-center items-center md:pr-0 md:pl-0 pr-10 pl-10 transition delay-50 hover:text-gray-500">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                className="md:mr-5 mr-1 md:mb-0 mb-3 logo6070 px-2"
                src="/yellowWildcatsLogo.png"
                alt="Wildcats Logo"
                width="40"
                height="40"
                priority={true}
                quality={1}
              />
            </a>
          </Link>

          {navbarItems.map(
            (item: { title: string; path: string }, key: number) => {
              const isActive = item.path === currentPath;

              return (
                <Link href={item.path} legacyBehavior key={key}>
                  <a>
                    <NavbarItem title={item.title} isActive={isActive} />
                  </a>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
