const bodyZones = [
 ["Front et tête",80,30],["Mâchoire",80,50],["Gorge",80,65],["Poitrine",80,89],
 ["Ventre",80,120],["Bassin",80,147],["Épaule gauche",46,79],["Épaule droite",114,79],
 ["Bras gauche",36,115],["Bras droit",124,115],["Main gauche",24,162],["Main droite",136,162],
 ["Jambe gauche",65,203],["Jambe droite",95,203],["Pied gauche",60,263],["Pied droit",100,263],
 ["Nuque",80,64,"back"],["Haut du dos",80,92,"back"],["Bas du dos",80,132,"back"]
];
const sensationChoices = [
 "Tension ou raideur","Serrement ou pression","Boule ou nœud","Chaleur","Froid ou frissons",
 "Picotements","Engourdissement","Tremblement","Battements rapides","Souffle court",
 "Lourdeur","Douleur","Nausée","Relâchement","Autre sensation"
];
const sensationColors = ["#9c304d","#265b87","#65519b","#36694d","#915219","#096a70"];
const bodyEntries = [];
const blankSensation = () => ({zone:"",type:"",detail:"",strength:5});
let bodyDraft = blankSensation();
let bodyEdit = null;
let nextBodyId = 1;
const bodyOutline = "M80 10C56 10 56 44 68 55L68 63C56 66 44 67 39 81L20 148 17 165Q17 178 26 176L36 158 53 112 56 134 52 164 54 215 53 252 48 266Q48 273 65 271L70 264 74 216 80 168 86 216 90 264 95 271Q112 273 112 266L107 252 106 215 108 164 104 134 107 112 124 158 134 176Q143 178 143 165L140 148 121 81C116 67 104 66 92 63L92 55C104 44 104 10 80 10Z";
function sensationLabel(entry) {
 return [entry.type==="Autre sensation"&&entry.detail ? entry.detail : entry.type,
  entry.type!=="Autre sensation" ? entry.detail : ""].filter(Boolean).join(" · ");
}
function bodyRows() {
 return bodyEntries.map(entry=>[bodyZones[entry.zone][0],sensationLabel(entry)+" · "+entry.strength+" / 10"]);
}
function drawBody(side) {
 const items=bodyEntries.filter(entry=>entry.id!==bodyEdit);
 if(bodyDraft.zone!=="")items.push({...bodyDraft,id:bodyEdit??nextBodyId,draft:true});
 const marks=items.filter(entry=>(bodyZones[entry.zone][3]??"front")===side)
  .sort((a,b)=>b.strength-a.strength)
  .map(entry=>{
   const [,x,y]=bodyZones[entry.zone];
   const visualX=side==="front"?160-x:x;
   const color=sensationColors[(entry.id-1)%sensationColors.length];
   return `<circle cx="${visualX}" cy="${y}" r="${3+entry.strength*1.65}" fill="${color}" fill-opacity=".28" stroke="${color}" stroke-width="2" ${entry.draft?'stroke-dasharray="3 2"':""}/>`;
  }).join("");
 return `<figure><svg viewBox="0 0 160 282" aria-hidden="true"><path d="${bodyOutline}" fill="#e9efe7" stroke="#42675a" stroke-width="2"/>${side==="back"?'<path d="M80 66v72" stroke="#91a79a" stroke-width="2" fill="none"/>':'<path d="M67 39q13 5 26 0m-13 62v3" stroke="#91a79a" stroke-width="2" fill="none"/>'}${marks}</svg><figcaption>${side==="front"?"Face":"Dos"}</figcaption></figure>`;
}
function bodyVisual() {
 return drawBody("front")+drawBody("back");
}
function renderBodyMap() {
 return `<section class="body-map" aria-labelledby="body-title"><h3 id="body-title">Mes sensations dans le corps</h3>
 <p class="hint">Repérez où vous sentez quelque chose, puis choisissez son intensité. Vous pouvez ajouter plusieurs sensations, même au même endroit.</p>
 <details><summary>Exemples de sensations et de zones</summary><ul><li>Une mâchoire serrée pendant un désaccord.</li><li>Une boule dans la gorge au moment de parler.</li><li>Des mains chaudes ou qui picotent après un effort.</li><li>Un nœud dans le ventre en attendant une réponse.</li><li>Une tension entre les omoplates après une longue journée.</li><li>Des épaules qui se relâchent à la fin d’un rendez-vous.</li></ul></details>
 <div class="body-layout"><div>
 <label class="field">Où est-ce que je le sens ?<select data-body-field="zone"><option value="">Choisir une zone</option>${bodyZones.map(([label],i)=>`<option value="${i}" ${bodyDraft.zone===String(i)?"selected":""}>${label}</option>`).join("")}</select></label>
 <label class="field">Quel type de sensation ?<select data-body-field="type"><option value="">Choisir une sensation</option>${sensationChoices.map(value=>`<option ${bodyDraft.type===value?"selected":""}>${value}</option>`).join("")}</select></label>
 <label class="field">Mes mots, si je veux préciser<input data-body-field="detail" maxlength="120" value="${escapeHTML(bodyDraft.detail)}" placeholder="Par exemple, ça tire vers la nuque"></label>
 <label class="field body-range">Intensité <output id="body-intensity">${bodyDraft.strength} / 10</output><input type="range" min="0" max="10" value="${bodyDraft.strength}" data-body-field="strength"><span><span>0 · À peine perceptible</span><span>10 · Très intense</span></span></label>
 <div class="body-actions"><button type="button" class="secondary" data-body-save>${bodyEdit===null?"Ajouter la sensation":"Enregistrer la modification"}</button>${bodyEdit===null?"":'<button type="button" class="quiet" data-body-cancel>Annuler</button>'}</div>
 <p class="hint" id="body-status" role="status"></p></div>
 <div class="body-figures" id="body-figures">${bodyVisual()}</div></div>
 ${bodyEntries.length?`<ul class="body-list">${bodyEntries.map(entry=>`<li><div><i style="background:${sensationColors[(entry.id-1)%sensationColors.length]}" aria-hidden="true"></i><b>${bodyZones[entry.zone][0]}</b> · ${escapeHTML(sensationLabel(entry))} · ${entry.strength} / 10</div><div class="body-actions"><button type="button" class="quiet" data-body-edit="${entry.id}">Modifier</button><button type="button" class="quiet" data-body-remove="${entry.id}">Retirer</button></div></li>`).join("")}</ul>`:""}</section>`;
}
function resetBodyDraft() {
 bodyDraft=blankSensation();
 bodyEdit=null;
}
function clearBodyMap() {
 bodyEntries.length=0;
 resetBodyDraft();
 nextBodyId=1;
}
function updateBodyDraft(input) {
 const key=input.dataset.bodyField;
 bodyDraft[key]=key==="strength"?Number(input.value):input.value;
 document.querySelector("#body-intensity").textContent=bodyDraft.strength+" / 10";
 document.querySelector("#body-figures").innerHTML=bodyVisual();
}
function handleBodyAction(button) {
 const data=button.dataset;
 if(!["bodySave","bodyEdit","bodyRemove","bodyCancel"].some(key=>key in data))return false;
 let status="";
 if("bodySave" in data){
  const missing=bodyDraft.zone===""?"zone":!bodyDraft.type?"type":bodyDraft.type==="Autre sensation"&&!bodyDraft.detail.trim()?"detail":"";
  if(missing){
   document.querySelector("#body-status").textContent="Choisissez une zone et indiquez la sensation pour l’ajouter.";
   document.querySelector(`[data-body-field="${missing}"]`).focus();
   return true;
  }
  const entry={...bodyDraft,detail:bodyDraft.detail.trim(),id:bodyEdit??nextBodyId};
  if(bodyEdit===null){bodyEntries.push(entry);nextBodyId++;}
  else bodyEntries[bodyEntries.findIndex(item=>item.id===bodyEdit)]=entry;
  resetBodyDraft();
  status="Sensation enregistrée.";
 }else if("bodyEdit" in data){
  bodyEdit=Number(data.bodyEdit);
  bodyDraft={...bodyEntries.find(entry=>entry.id===bodyEdit)};
 }else if("bodyRemove" in data){
  const id=Number(data.bodyRemove);
  bodyEntries.splice(bodyEntries.findIndex(entry=>entry.id===id),1);
  if(bodyEdit===id)resetBodyDraft();
  status="Sensation retirée.";
 }else resetBodyDraft();
 document.querySelector(".body-map").outerHTML=renderBodyMap();
 document.querySelector("#body-status").textContent=status;
 document.querySelector('[data-body-field="zone"]').focus({preventScroll:true});
 return true;
}
