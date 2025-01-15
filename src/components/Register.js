import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", { state: { name: nameRef.current.value, email: emailRef.current.value, course: courseRef.current.value, course: courseRef.current.value } });
  }

  return (
    <div className="container">
      <h1>Register your interest!</h1>
      <p>
        Ensure you register for your course!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Course:
          <input type="text" name="course" ref={courseRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
