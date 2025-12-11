import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function PostsComponent() {
  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

   
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error || isError) return <p>Error loading posts…</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>

      <button 
        onClick={() => refetch()}
        style={{ padding: "8px 12px", marginBottom: "10px" }}
      >
        Refresh Posts
      </button>

      <ul>
        {data?.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
