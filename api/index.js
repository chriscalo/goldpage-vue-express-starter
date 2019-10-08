import { endpoints } from "wildcard-api";
import { file } from "ez-file";

endpoints.greet = async function greet() {
  // The getting started section of the [Wildcard API docs][wildcard-docs] state
  // that `this` will be equal to the `requestProps` object passed to
  // `getApiResponse()`.
  //
  // [wildcard-docs]: https://github.com/reframejs/wildcard-api
  console.log((typeof window==='undefined'?'server':'browser')+'-side `requestProps`:', this);
  return await file("./greeting.txt");
};
