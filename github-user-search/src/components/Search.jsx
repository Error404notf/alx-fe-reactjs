// import { useState } from "react";
// import { fetchUserData } from "../services/githubService";

// const Search = () => {
//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [user, setUser] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setUser(null);

//     try {
//       const data = await fetchUserData(username);
//       setUser(data);
//     } catch (err) {
//       setError("Looks like we can't find the user");
//     }
    
//     setLoading(false);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>GitHub User Search</h1>

//       {/* Search form */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {/* Loading state */}
//       {loading && <p>Loading...</p>}

//       {/* Error state */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Success state */}
//       {user && (
//         <div style={{ marginTop: "20px" }}>
//           <img src={user.avatar_url} alt="" width="100" />
//           <h2>{user.name || user.login}</h2>
//           <a href={user.html_url} target="_blank">
//             View Profile
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} width="100" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
