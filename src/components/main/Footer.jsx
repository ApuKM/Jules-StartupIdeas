import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 md:mt-18">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* About Section */}
          <div className="">
            <h2 className="text-xl font-semibold text-white mb-4">Jules</h2>
            <p className="text-sm leading-relaxed">
              Jules is a startup-focused idea-sharing platform designed to
              connect innovators, entrepreneurs, and creators in one
              collaborative space.
            </p>
          </div>

          {/* Platform info */}
          <div className="md:flex justify-center">
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Platform
              </h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-1 hover:underline">
                  <span>Browse Ideas</span>
                </li>
                <li className="flex items-center gap-1 hover:underline">
                  <span>Startups</span>
                </li>
                <li className="flex items-center gap-1 hover:underline">
                  <span>Community</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:flex justify-center">
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-1">
                  <CiLocationOn /> <span>Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-center gap-1">
                  <BiPhone /> <span>+880 1234-567890</span>
                </li>
                <li className="flex items-center gap-1">
                  <MdEmail /> <span>support@qurbanihat.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:flex justify-center">
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 text-left">
                Follow Us
              </h2>
              <div className="flex space-x-4 text-lg">
                <FaFacebookF className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Jules. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
