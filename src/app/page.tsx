import Fetchdata from "./components/fetchdata";

// Fetch data directly inside the server component (App Router)
export default async function Home() {
  const res = await fetch("http://localhost:1337/api/products");
  const jsonData = await res.json();

  // Ensure that jsonData.data is an array and map to the expected format
  const posts = Array.isArray(jsonData.data) ? jsonData.data.map((item: any) => ({
    id: item.id,
    name: item.attributes.name,
    studentid: item.attributes.studentid,
  })) : [];

  return (
    <>
      <Fetchdata posts={posts} />
    </>
  );
}
