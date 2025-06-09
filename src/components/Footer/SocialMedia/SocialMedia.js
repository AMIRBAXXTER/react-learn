export default function SocialMedia({name: userName, url = "#"}) {
  return (
      <li className="list-none text-center bg-red-300 p-3 rounded-2xl">
        <a href={url}>{userName}</a>
      </li>
  );
}
