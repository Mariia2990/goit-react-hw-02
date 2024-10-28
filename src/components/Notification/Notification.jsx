import style from "./Notification.module.css";


function Notification({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default Notification;