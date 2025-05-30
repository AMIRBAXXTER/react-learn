import SocialMedia from "./SocialMedia/SocialMedia";
import Counter from "./Counter/Counter";

export default function Footer() {
  const urls = [
    { id: 1, name: "facebook", url: "https://www.facebook.com/" },
    { id: 2, name: "twitter", url: "https://twitter.com/" },
    { id: 3, name: "instagram", url: "https://www.instagram.com/" },
    { id: 4, name: "linkedin", url: "https://www.linkedin.com/" },
    { id: 5, name: "github"},
    { id: 6, name: "google", url: "https://www.google.com/" },
  ];
  return (
    <div>
      <Counter counterName="step counter" />
      <Counter counterName="timer" />
      <ul>
        {urls.map((url) => (
          <SocialMedia {...url} key={url.id} />
        ))}
      </ul>
      <h1>this is footer of the page</h1>
    </div>
  );
}
