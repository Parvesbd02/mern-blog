import { Button, Navbar, TextInput } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export default function Header() {
const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white "
      >
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Parves's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={IoSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-12 lg:hidden " pill color="gray">
        <IoSearch></IoSearch>
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to={"/signin"}>
          <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
        </Link>
      </div>
      <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse>
          <Navbar.Link active={path === '/home'} as={'div'}>
            <Link to={"/home"}>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to={"/about"}>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to={"/projects"}>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
}
