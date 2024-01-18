import { Footer } from "flowbite-react";

const FooterLinks = () => {
  return (
    <>
      <div>
        <Footer.Title title="About" />
        <Footer.LinkGroup col>
          <Footer.Link
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 JS Projects
          </Footer.Link>
          <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
            Awi&apos;s Blog
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Follow us" />
        <Footer.LinkGroup col>
          <Footer.Link
            href="https://www.github.com/sahandghavidel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Footer.Link>
          <Footer.Link href="#">Discord</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Legal" />
        <Footer.LinkGroup col>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
        </Footer.LinkGroup>
      </div>
    </>
  );
};

export default FooterLinks;
