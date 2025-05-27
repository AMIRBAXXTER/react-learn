export default function SocialMedia({name: userName, url = "#"}) {
  return (
    <div>
      <li>
        <a href={url}>{userName}</a>
      </li>
    </div>
  );
}
