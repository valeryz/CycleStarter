import { CycleStarter } from "../../declarations/CycleStarter";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with CycleStarter actor, calling the greet method
  const greeting = await CycleStarter.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
