import SocialMedia from "./SocialMedia/SocialMedia";

export default function Footer() {
  const urls = [
    { id: 1, name: "facebook", url: "https://www.facebook.com/" },
    { id: 2, name: "twitter", url: "https://twitter.com/" },
    { id: 3, name: "instagram", url: "https://www.instagram.com/" },
    { id: 4, name: "linkedin", url: "https://www.linkedin.com/" },
    { id: 5, name: "github", url: "https://github.com/" },
    { id: 6, name: "google", url: "https://www.google.com/" },
  ];

  return (
    <footer className="flex justify-between items-center w-full bg-gradient-to-r from-slate-800 to-blue-700 h-28 shadow-lg px-6 mt-52">
      <div className="flex items-center justify-center h-full w-1/3 bg-slate-700 rounded-l-xl">
        <span className="text-cyan-300 text-lg font-semibold tracking-wide">this is footer</span>
      </div>
      <ul className="flex w-1/2 justify-center gap-5 items-center">
        {urls.map((url) => (
          <SocialMedia {...url} key={url.id} />
        ))}
      </ul>
    </footer>
  );
}
