import { endpoints } from "wildcard-api";
import { file } from "ez-file";

endpoints.greet = async function greet() {
  return await file("./greeting.txt");
};
