import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 text-center text-sm text-gray-600 py-4 px-15 mx-auto">
      <span className="mr-1">Built with love by Raza ❤️🚀 Check on</span>
      <Link href="https://github.com/keseho/priceticker" className="ml-1">
        <FaGithubSquare size={24} />
      </Link>
    </div>
  );
};

export default Footer;
