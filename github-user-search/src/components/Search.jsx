// // import { useState } from "react";
// // import { fetchUserData } from "../services/githubService";

// // const Search = () => {
// //   const [username, setUsername] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [user, setUser] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");
// //     setUser(null);

// //     try {
// //       const data = await fetchUserData(username);
// //       setUser(data);
// //     } catch (err) {
// //       setError("Looks like we can't find the user");
// //     }
    
// //     setLoading(false);
// //   };

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>GitHub User Search</h1>

// //       {/* Search form */}
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Enter GitHub username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <button type="submit">Search</button>
// //       </form>

// //       {/* Loading state */}
// //       {loading && <p>Loading...</p>}

// //       {/* Error state */}
// //       {error && <p style={{ color: "red" }}>{error}</p>}

// //       {/* Success state */}
// //       {user && (
// //         <div style={{ marginTop: "20px" }}>
// //           <img src={user.avatar_url} alt="" width="100" />
// //           <h2>{user.name || user.login}</h2>
// //           <a href={user.html_url} target="_blank">
// //             View Profile
// //           </a>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Search;

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
//       setError("Looks like we cant find the user");
//     }

//     setLoading(false);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>GitHub User Search</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       {user && (
//         <div>
//           <img src={user.avatar_url} width="100" />
//           <h2>{user.name || user.login}</h2>
//           <a href={user.html_url} target="_blank">View Profile</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const results = await fetchAdvancedUsers(username, location, minRepos);
      setUsers(results);
    } catch (err) {
      setError("An error occurred while fetching users");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Advanced GitHub User Search</h1>

      {/* FORM */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="text"
          placeholder="Location (e.g. Kenya)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {/* LOADING */}
      {loading && <p className="mt-4">Loading...</p>}

      {/* ERROR */}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {/* RESULTS */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded flex items-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div className="ml-4">
              <h2 className="font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
