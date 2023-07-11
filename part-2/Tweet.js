const Tweet = (props) => {
  console.log(props);
  return (
    <div className="tweet-card">
      <h4 className="username-tweet">{props.tweet.username}</h4>
      <div className="name-date-tweet">
        <p className="name-tweet">{props.tweet.name}</p>
        <p className="date-tweet">{props.tweet.date}</p>
      </div>
      <p className="msg-tweet">{props.tweet.message}</p>
    </div>
  );
};
