export function generateUsers() {
  const users = [];
  for (let i = 1; i <= 10; i++) {
    users.push(`User ${i}`);
  }
  return users;
}
