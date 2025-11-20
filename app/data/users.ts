const users = [
  {
    email: "smalamin.dev@gmail.com",
    password: "password",
  },
  {
    email: "smalamin.sde@gmail.com",
    password: "password",
  },
  {
    email: "john.doe@example.com",
    password: "password",
  },
];

export const getUserByEmail = (email: string) => {
  const found = users.find((user) => user.email === email);
  return found;
};
