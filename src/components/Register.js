import { useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const information = {name, email, course};

  const navigate = useNavigate();

  function handleName(e) {
    setName(e.target.value);
  }
  
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  
  function handleCourse(e) {
    setCourse(e.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // Navigate to the confirmation page and pass the data as state
    navigate("/confirmed", { state: information });
  }

  return (
    <div className="container">
      <h1>Register your Interest</h1>
      <p>
        Please register the course that you are interested in!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={emailRef} onChange={handleName} value={name}/>
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} onChange={handleEmail} value={email}/>
        </label>
        <label>
          Course:
          <input type="text" name="course" ref={emailRef} onChange={handleCourse} value={course}/>
        </label>

          <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
