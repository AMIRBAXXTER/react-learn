export default function SocialMedia(props) {
  return (
    <div>
      <li>
        <a href={props.url}>{props.name}</a>
      </li>
    </div>
  );
}
