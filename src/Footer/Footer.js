import SocialMedia from "./SocialMedia/SocialMedia";

const urls = [
  {name: "facebook", url: "https://www.facebook.com/"},
  {name: "twitter", url: "https://twitter.com/"},
  {name: "instagram", url: "https://www.instagram.com/"},
  {name: "linkedin", url: "https://www.linkedin.com/"},
  {name: "github", url: "https://github.com/"}
]

export default function Footer() {
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <ul>
          {urls.map((url) => (
            <SocialMedia name={url.name} url={url.url} />
          ))}
        </ul>
      <h1>this is footer of the page</h1>
      <SocialMedia />
    </div>
  );
}
