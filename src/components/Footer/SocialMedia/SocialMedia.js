import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';

// رنگ اصلی هر شبکه برای hover
const hoverColors = {
  facebook: 'hover:bg-[#1877f2]',    // فیسبوک: آبی کلاسیک
  twitter: 'hover:bg-[#1da1f2]',     // توییتر: آبی لایت
  instagram: 'hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400', // اینستاگرام: گرادینت
  linkedin: 'hover:bg-[#0077b5]',     // لینکدین: آبی تیره
  github: 'hover:bg-[#21262d]',       // گیت‌هاب: خاکستری تیره
  google: 'hover:bg-[#ea4335]',       // گوگل: قرمز گوگل
};

const icons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
  google: FaGoogle,
};

export default function SocialMedia({ name, url }) {
  const Icon = icons[name.toLowerCase()] || null;
  const hoverClass = hoverColors[name.toLowerCase()] || 'hover:bg-cyan-600';

  return (
    <li>
      <a
        href={url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center px-3 py-2 rounded-full bg-white/10 transition text-white font-medium shadow-sm text-xl ${hoverClass}`}
        title={name}
      >
        {Icon && <Icon />}
        <span className="sr-only">{name}</span>
      </a>
    </li>
  );
}
