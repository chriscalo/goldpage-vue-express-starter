import { endpoints } from "wildcard-api";
import { file } from "ez-file";

endpoints.greet = async function greet() {
  // callers may pass a context object
  const context = this;
  return await file("./greeting.txt");
};
