const App = () => {
  const tweet1 = {
    username: "Gina",
    name: "Gina",
    date: "7-10-2023",
    message: "Hi, Nice to meet you all !"
  };
  const tweet2 = {
    username: "Sarah",
    name: "Sarah",
    date: "6-10-2023",
    message: "HELLO, It's so hot in Texas :("
  };

  const tweet3 = {
    username: "Ruwaidah",
    name: "Ruwaidah",
    date: "7-08-2023",
    message: "Good Morning, Good Luck in your day !"
  };
  return (
    <div className="container">
      <Tweet tweet={tweet1} />
      <Tweet tweet={tweet2} />
      <Tweet tweet={tweet3} />
    </div>
  );
};
