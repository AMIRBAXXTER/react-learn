import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGoogle
} from 'react-icons/fa';

const socialLinks = [
  {
    id: 1,
    name: "facebook",
    url: "https://www.facebook.com/",
    Icon: FaFacebook,
    colorClass: "bg-[#1877f2]",
  },
  {
    id: 2,
    name: "twitter",
    url: "https://twitter.com/",
    Icon: FaTwitter,
    colorClass: "bg-[#1da1f2]",
  },
  {
    id: 3,
    name: "instagram",
    url: "https://www.instagram.com/",
    Icon: FaInstagram,
    colorClass: "bg-gradient-to-tr from-pink-500 to-yellow-400",
  },
  {
    id: 4,
    name: "linkedin",
    url: "https://www.linkedin.com/",
    Icon: FaLinkedin,
    colorClass: "bg-[#0077b5]",
  },
  {
    id: 5,
    name: "github",
    url: "https://github.com/",
    Icon: FaGithub,
    colorClass: "bg-[#21262d]",
  },
  {
    id: 6,
    name: "google",
    url: "https://www.google.com/",
    Icon: FaGoogle,
    colorClass: "bg-[#ea4335]",
  },
];

export default socialLinks;
