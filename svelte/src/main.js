import App from "./App.svelte";
import Map from "./Map.svelte";

const app = new Map({
  target: document.body,
  props: {
    name: "world"
  }
});

export default app;
