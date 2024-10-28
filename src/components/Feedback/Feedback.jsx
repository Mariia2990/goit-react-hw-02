import style from "./Feedback.module.css";

function Feedback({ feedback, totalFeedback }) {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
          <p>Total feedback: {totalFeedback}</p>
    </div>
  );
}

export default Feedback;