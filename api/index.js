import { endpoints } from "wildcard-api";
import { file } from "ez-file";

endpoints.greet = function greet() {
  return file("./greeting.txt");
};
