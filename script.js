const cName = document.getElementById("cName");
const cDesc = document.getElementById("cDesc");

document.getElementById("showCredisLaser").addEventListener("click", () => {
  console.log("laser");
  cName.innerHTML = "laser";
  cDesc.innerHTML = "Programer based in Germany.";
});

document.getElementById("showCredisArda").addEventListener("click", () => {
  console.log("arda");
  cName.innerHTML = "Unknown_Arda";
  cDesc.innerHTML = "???";
});
