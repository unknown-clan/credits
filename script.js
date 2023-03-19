/*document.getElementById('showCredis').addEventListener('click', () =>{*/
const cName = document.getElementById('cName')
const cDesc = document.getElementById('cDesc')

function showCredits(creator) {
if (creator == arda){
cName.innerHTML = "Unknown_Arda"
cDesc.innerHTML = "???"
} else if (creator == laser){
cName.innerHTMl = "laser"
cDesc.innerHTML = "Programmer based in Germany."
} else {
cName.innerHTML = "Unknown Games"
cDesc.innerHTML = "made by arda & laser"
}
