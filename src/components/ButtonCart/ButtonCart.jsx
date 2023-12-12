export default function Button(props) {
  return <button onClick={props.event}>{props.text}</button>;
}
