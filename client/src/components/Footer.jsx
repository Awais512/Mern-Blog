import { Footer as FooterCom } from "flowbite-react";
import Logo from "./Logo";
const Footer = () => {
  return (
    <FooterCom container className="border border-t-8 border-teal-500">
      <Logo
        className="self-center whitespace-nowrap text-lg sm:text-xl dark:text-white"
        spanClassName="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"
      />
    </FooterCom>
  );
};

export default Footer;
