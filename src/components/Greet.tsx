type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
          : `Welocme Guest`}
      </h2>
    </div>
  );
}
