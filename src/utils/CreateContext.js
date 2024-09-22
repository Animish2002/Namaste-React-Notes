import { User } from "lucide-react";

const { createContext } = require("react");

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
