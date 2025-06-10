import SocialMedia from "./SocialMedia/SocialMedia";
import socialLinks from "../Footer/SocialMedia/SocialData";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-800 to-blue-700 shadow-lg px-3 mt-52 py-4">
      <div className="flex flex-col items-center justify-center w-full gap-3 md:flex-row md:justify-between">
        <div className="flex items-center justify-center bg-slate-700 rounded-xl px-4 py-2 mb-3 md:mb-0">
          <span className="text-cyan-300 text-base md:text-lg font-semibold tracking-wide">this is footer</span>
        </div>
        <ul className="
          grid grid-cols-3 gap-3
          md:grid-cols-4
          lg:flex lg:flex-wrap lg:justify-center
          w-full md:w-auto
        ">
          {socialLinks.map(link => (
            <SocialMedia {...link} key={link.id} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
