
const users = [
  {
    username: "design.daily",
    name: "Design Daily",
    img: 32
  },
  {
    username: "travel.with.me",
    name: "Travel With Me",
    img: 23
  },
  {
    username: "codewithalex",
    name: "Alex Morgan",
    img: 15
  }
];

function Suggestions() {
  return (
    <div className="suggestions">

      <h4>Suggested for you</h4>

      {users.map((user) => (
        <div className="suggestion" key={user.username}>

          <img
            src={`https://i.pravatar.cc/150?img=${user.img}`}
            alt={user.username}
          />

          <div className="suggestion-info">
            <strong>{user.username}</strong>
            <span>{user.name}</span>
          </div>

          <button>Follow</button>

        </div>
      ))}

    </div>
  );
}

export default Suggestions;
