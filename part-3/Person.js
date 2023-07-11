const Person = (props) => {
  const name =
    props.data.name.length > 8 ? props.data.name.slice(0, 6) : props.data.name;
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>name: {name}</p>
      <p>age: {props.data.age}</p>
      {props.data.age > 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>}
      <h4>Hobbies:</h4>
      <ul>
        {props.data.hobbies &&
          props.data.hobbies.map((hobbie, i) => <li key={i}>{hobbie}</li>)}
      </ul>{" "}
    </div>
  );
};
