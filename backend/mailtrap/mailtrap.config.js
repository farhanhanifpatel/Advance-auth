import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  // endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};

// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";
// dotenv.config();
// export const mailtrapClient = new MailtrapClient({
//   token: process.env.MAILTRAP_TOKEN,
// });

// console.log(
//   "Mailtrap client initialized with endpoint:",
//   process.env.MAILTRAP_TOKEN
// );
// export const sender = {
//   email: "mailtrap@demomailtrap.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   {
//     email: "rvmpaydeveloper@gmail.com",
//   },
// ];
