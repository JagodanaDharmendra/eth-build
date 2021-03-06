import { FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex w-full justify-center items-center content-center space-x-4 py-8 text-xs sm:text-base">
      <div className="flex flex-col md:flex-row gap-3">
        <Icon
          href="https://github.com/austintgriffith/eth.build"
          IconView={FaGithub}
        />
        <Icon href="https://twitter.com/austingriffith" IconView={FaTwitter} />
      </div>
      <p className="text-white">©2022 ETH.Build. All Rights Reserved.</p>
    </div>
  );
}

function Icon({ href, IconView }: any) {
  return (
    <a
      href="https://twitter.com/austingriffith"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconView className="w-6 sm:w-8 h-6 sm:h-8" />
    </a>
  );
}

export default Footer;
