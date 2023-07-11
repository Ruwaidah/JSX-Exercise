const App = () => {
  const persone1 = {
    name: "Susana",
    age: 23,
    hobbies: ["Horse Racing", "Gymnastics", " Bowling", "Ice Skating"],
  };
  const persone2 = {
    name: "RuwaidahAlfakhri",
    age: 45,
    hobbies: ["Sewing", "Fishing", "Sky Diving", "Hiking", "Table Tennis"],
  };
  const persone3 = {
    name: "Lester",
    age: 15,
    hobbies: ["Swim", "Soccer", "Football"],
  };
  return (
    <div>
      <Person data={persone1} />
      <Person data={persone2} />
      <Person data={persone3} />
    </div>
  );
};
