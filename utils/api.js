export const fetchUsers = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users.map(u => ({
    id: u.id,
    name: u.firstName + " " + u.lastName,
    email: u.email
  }));
};
