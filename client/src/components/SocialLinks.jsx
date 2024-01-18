import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
      <Footer.Icon
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/awais.raza.146"
        icon={BsFacebook}
      />
      <Footer.Icon
        href="https://www.instagram.com/awais.rock/"
        target="_blank"
        rel="noopener noreferrer"
        icon={BsInstagram}
      />
      <Footer.Icon
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/AwaisCh5121472"
        icon={BsTwitter}
      />
      <Footer.Icon
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Awais512"
        icon={BsGithub}
      />
      <Footer.Icon
        target="_blank"
        rel="noopener noreferrer"
        href="https://dribbble.com/awais512"
        icon={BsDribbble}
      />
    </div>
  );
};

export default SocialLinks;
