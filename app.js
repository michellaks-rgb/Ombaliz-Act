const steps = [
 {name:"Revenir au présent", term:"Contact avec le moment présent", icon:"<circle cx='32' cy='32' r='18'/><circle cx='32' cy='32' r='6'/><path d='M32 5v13m0 28v13M5 32h13m28 0h13'/>", short:"Ramener mon attention à ce qui se passe ici.", why:"Quand mon attention part vers hier ou demain, je peux la ramener vers ce que je fais et ce que je perçois maintenant.", exercise:"L’ancrage sensoriel 5–4–3–2–1",instructions:["5 choses que je vois · Une couleur, une ombre, un objet…","4 sensations de contact · Mes pieds au sol, mon pull sur mes bras…","3 sons que j’entends · Une voiture, une voix, le vent…","2 odeurs que je perçois · Du savon, du café…","1 goût que je remarque · Une gorgée d’eau ou le goût déjà présent dans ma bouche."], tip:"Prenez votre temps. Si un sens est moins accessible aujourd’hui, passez-le ou repérez un détail de plus avec un autre sens.",fields:[["Qu’ai-je remarqué ?","La lumière sur le mur, une voiture, le contact du siège."]]},
 {name:"Prendre du recul",term:"Défusion cognitive",icon:"<path d='M13 11h38a5 5 0 0 1 5 5v24a5 5 0 0 1-5 5H32L19 55V45h-6a5 5 0 0 1-5-5V16a5 5 0 0 1 5-5Z'/><path d='M20 28h1m11 0h1m11 0h1'/>",short:"Voir mes pensées comme des pensées.",why:"Une pensée peut capter toute mon attention. La remarquer comme un événement mental m’aide à choisir la place que je lui donne dans mes décisions.",exercise:"Une pensée que je remarque",instructions:["Repérez une ou plusieurs pensées du quotidien. Prenez-en une à la fois pour l’exercice.","Dites-la une fois, puis ajoutez « Je remarque que j’ai la pensée que… » au début.","Voyez si cette formulation vous laisse un peu plus de liberté pour choisir votre réponse."],fields:[["Autres pensées, avec mes mots","Par exemple, « Je vais encore déranger ». Vous pouvez en noter plusieurs."],["Ce que je pourrais faire malgré cette pensée","Poser une question à une personne de confiance."]]},
 {name:"Faire de la place",term:"Acceptation",icon:"<path d='M7 27c1 13 10 23 25 23s24-10 25-23H7Zm4 28h42M23 20c-5-6 3-9 1-14m12 14c-5-6 3-9 1-14'/>",short:"Accueillir une émotion ou une sensation.",why:"Je peux laisser une émotion ou une sensation être là, à une dose supportable. Je peux aussi poser une limite ou agir sur une situation qui me fait du mal.",exercise:"Laisser un peu de place",instructions:["Choisissez un inconfort léger et récent. Gardez les yeux ouverts si vous le préférez.","Nommez ce que vous ressentez. Si plusieurs émotions se mêlent, choisissez-en une à observer et repérez où elle se manifeste. Vous pouvez aussi rester attentif à un objet autour de vous.","Pendant quelques instants, essayez de lui faire de la place. Arrêtez ou revenez à vos appuis si cela devient trop intense."],fields:[["Autres émotions ou précisions, avec mes mots","De l’inquiétude avant l’appel et du soulagement après."],["Qu’ai-je pu faire en sa présence ?","Préparer la première phrase de l’appel."]]},
 {name:"Me placer en observateur",term:"Soi comme contexte",icon:"<path d='M5 32s11-16 27-16 27 16 27 16-11 16-27 16S5 32 5 32Z'/><circle cx='32' cy='32' r='8'/><path d='M32 5v5m0 44v5'/>",short:"Observer ce que je traverse et élargir mon point de vue.",why:"Je peux prendre le point de vue de la personne qui remarque ce qui se passe. Mes pensées, émotions et rôles changent, et je peux observer ces changements.",exercise:"Le point de vue qui observe",instructions:["Remarquez un son, une pensée ou une émotion, l’un après l’autre.","Pour chacun, commencez par « Je remarque… ».","Notez ce qui change et prenez un instant pour retrouver ce même point de vue d’observation."],fields:[["Qu’ai-je pu observer ?","Le bruit a changé et une pensée a pris la place d’une autre."]]},
 {name:"Choisir ma direction",term:"Valeurs",icon:"<circle cx='32' cy='32' r='24'/><path d='m40 23-5 13-13 5 5-13 13-5Zm-8-19v8m0 40v8M4 32h8m40 0h8'/>",short:"Nommer une manière d’agir qui compte pour moi.",why:"Une valeur indique comment j’aimerais agir au quotidien. Par exemple, terminer un projet est un objectif. Cultiver la curiosité peut me guider pendant ce projet et après.",exercise:"Ma boussole du quotidien",instructions:["Choisissez un domaine qui compte pour vous, comme les relations, le travail, la santé ou les loisirs.","Demandez-vous quelle qualité vous aimeriez y incarner, même dans une petite action.","Essayez une valeur proposée ci-dessous ou écrivez la vôtre. Demandez-vous à quoi elle ressemblerait dans un geste ordinaire."],fields:[["Ma valeur choisie","La présence."],["Dans quel domaine et comment l’incarner ?","En famille, écouter jusqu’au bout avant de répondre."]]},
 {name:"Faire un petit pas",term:"Action engagée",icon:"<path d='M7 53h16V39h15V25h18M42 11h14v14M33 34l22-22'/><circle cx='12' cy='16' r='5'/>",short:"Transformer une valeur en action réalisable.",why:"Un petit acte, répété ou ajusté selon la situation, donne corps à ce qui compte pour moi. Si un obstacle survient, je peux revoir la taille du pas.",exercise:"Un pas dans les prochains jours",instructions:["Choisissez une action précise et assez petite pour être réalisable.","Prévoyez où et quand la tenter.","Anticipez un obstacle et imaginez une version plus simple ou une autre occasion."],fields:[["Mon action, où et quand","Mercredi après dîner, écouter mon enfant cinq minutes sans écran."],["L’obstacle et mon plan de repli","Si je rentre tard, je lui propose cinq minutes le lendemain."]]}
];
const scales = [
 {prompt:"À quel point mon attention est-elle ici, maintenant ?", anchors:["Mon attention est ailleurs","J’y reviens par moments","Mon attention est ici"], art:["Nuage","Point d’appui","Cible"], color:"sage"},
 {prompt:"Quelle distance puis-je prendre avec la pensée que j’observe ?", anchors:["Elle occupe tout l’espace","Je la remarque par moments","Je la vois comme une pensée"], art:["Bulle","Œil","Fenêtre"], color:"lilac"},
 {prompt:"Quelle est l’intensité de l’émotion que j’observe maintenant ?", anchors:["Absente","Modérée","Très forte"], art:["Goutte","Ondes","Vague"], color:"coral"},
 {prompt:"À quel point puis-je observer ce qui se passe en moi ?", anchors:["Difficile à observer","J’en remarque une partie","J’observe avec recul"], art:["Loupe","Œil","Horizon"], color:"blue"},
 {prompt:"À quel point ma direction est-elle claire pour moi ?", anchors:["Encore floue","Elle se précise","Très claire"], art:["Nuage","Boussole","Étoile"], color:"gold"},
 {prompt:"À quel point mon premier pas me paraît-il réalisable ?", anchors:["Très difficile à envisager","Possible avec un ajustement","Tout à fait réalisable"], art:["Obstacle","Pas","Drapeau"], color:"sage"},
 {prompt:"À quel point puis-je repérer un choix dans cette situation ?", anchors:["Je ne vois pas encore d’option","J’entrevois une autre réponse","Je vois comment choisir ma réponse"], art:["Obstacle","Boussole","Drapeau"], color:"lilac"}
];
const art = {
 "Nuage":"<path d='M9 24h15a5 5 0 0 0 0-10 8 8 0 0 0-15-2 6 6 0 0 0 0 12Z'/>",
 "Point d’appui":"<path d='M5 25h22m-18-6h14l3 6H6Zm7-15v11m-4-4 4 4 4-4'/>",
 "Cible":"<circle cx='16' cy='16' r='12'/><circle cx='16' cy='16' r='7'/><circle cx='16' cy='16' r='2'/>",
 "Bulle":"<path d='M4 6h24v16H15l-7 5v-5H4Z'/><path d='M9 12h14m-14 5h9'/>",
 "Œil":"<path d='M2 16s6-9 14-9 14 9 14 9-6 9-14 9S2 16 2 16Z'/><circle cx='16' cy='16' r='4'/>",
 "Fenêtre":"<rect x='5' y='5' width='22' height='22' rx='3'/><path d='M16 5v22M5 16h22'/>",
 "Goutte":"<path d='M16 4c4 7 8 11 8 17a8 8 0 0 1-16 0c0-6 4-10 8-17Z'/>",
 "Ondes":"<path d='M3 12q7-8 13 0t13 0M3 21q7-8 13 0t13 0'/>",
 "Vague":"<path d='M2 25h28M3 20c8 1 9-14 18-14 4 0 6 3 6 6-6-5-11 5-3 8h5'/>",
 "Loupe":"<circle cx='13' cy='13' r='8'/><path d='m19 19 9 9'/>",
 "Horizon":"<path d='M3 23h26M7 18l6-8 7 8 4-4 4 4'/><circle cx='23' cy='7' r='2'/>",
 "Boussole":"<circle cx='16' cy='16' r='12'/><path d='m21 10-3 8-8 4 3-9Z'/>",
 "Étoile":"<path d='m16 3 4 9 10 1-8 6 2 10-8-5-8 5 2-10-8-6 10-1Z'/>",
 "Obstacle":"<path d='M3 25h26M7 25l9-16 9 16m-9-10v4m0 3v.1'/>",
 "Pas":"<ellipse cx='10' cy='20' rx='4' ry='7' transform='rotate(-18 10 20)'/><ellipse cx='22' cy='11' rx='4' ry='7' transform='rotate(18 22 11)'/>",
 "Drapeau":"<path d='M7 29V5m0 1c7-5 13 5 20 0v13c-7 5-13-5-20 0'/>"
};
const thoughtGroups = [
 ["Estime de soi",[
  ["Je ne suis pas à la hauteur.","Honte","Découragement","Inquiétude"],
  ["Je ne compte pas pour les autres.","Tristesse","Solitude","Déception"],
  ["Je dois être irréprochable pour être accepté·e.","Appréhension","Honte","Frustration"],
  ["Je ne mérite pas qu’on m’aide.","Honte","Tristesse","Gêne"],
  ["Si je me trompe, on verra que je suis incapable.","Appréhension","Embarras","Honte"],
  ["Mes réussites ne comptent pas, j’ai juste eu de la chance.","Doute","Inquiétude","Déception"],
  ["On va trouver que je suis ridicule.","Appréhension","Gêne","Honte"]
 ]],
 ["Responsabilité",[
  ["Tout est de ma faute.","Culpabilité","Regret","Honte"],
  ["J’aurais dû savoir quoi faire.","Regret","Culpabilité","Frustration"],
  ["J’ai déçu quelqu’un qui comptait sur moi.","Culpabilité","Tristesse","Regret"],
  ["Dire non, c’est être égoïste.","Culpabilité","Appréhension","Honte"],
  ["J’ai blessé quelqu’un en parlant trop vite.","Culpabilité","Regret","Tristesse"],
  ["C’est à moi de régler le problème de tout le monde.","Inquiétude","Pression ressentie","Culpabilité"]
 ]],
 ["Sécurité et confiance",[
  ["Je ne peux compter sur personne.","Méfiance","Solitude","Colère"],
  ["Je ne sais pas comment me protéger.","Peur","Vulnérabilité","Inquiétude"],
  ["Si je me confie, on risque de me juger.","Appréhension","Gêne","Méfiance"],
  ["Je risque d’être mis·e de côté.","Inquiétude","Tristesse","Solitude"],
  ["La personne qui compte pour moi pourrait me préférer quelqu’un d’autre.","Jalousie","Inquiétude","Tristesse"],
  ["Si je montre ce que je ressens, on pourrait se moquer de moi.","Appréhension","Honte","Gêne"]
 ]],
 ["Contrôle et capacité d’agir",[
  ["Je n’ai aucune prise sur la situation.","Impuissance","Frustration","Colère"],
  ["Je ne suis pas capable de faire face.","Peur","Découragement","Impuissance"],
  ["Je ne peux pas faire confiance à mon jugement.","Doute","Appréhension","Frustration"],
  ["Si je demande de l’aide, je perds le contrôle.","Appréhension","Vulnérabilité","Gêne"],
  ["On a décidé à ma place.","Colère","Indignation","Impuissance"],
  ["Tous mes efforts n’ont servi à rien.","Découragement","Déception","Frustration"]
 ]]
];
const emotionGroups = [
 ["Face à une menace ou à l’incertitude",["Peur","Inquiétude","Appréhension","Méfiance","Doute","Vulnérabilité","Pression ressentie"]],
 ["Face à une perte ou à une attente déçue",["Tristesse","Déception","Découragement","Solitude","Nostalgie","Regret"]],
 ["Quand quelque chose me heurte ou me bloque",["Colère","Irritation","Frustration","Indignation","Ressentiment","Dégoût","Impuissance"]],
 ["Dans le regard sur moi et dans les relations",["Honte","Culpabilité","Gêne","Embarras","Jalousie","Envie","Fierté","Gratitude"]],
 ["Quand le vécu change ou se mélange",["Soulagement","Joie","Tendresse","Admiration","Émerveillement","Soulagement et culpabilité","Fierté et gêne","Joie et tristesse"]]
];
const valueGroups = [
 ["Relations",["Présence","Écoute","Honnêteté","Tendresse","Réciprocité","Loyauté","Respect"]],
 ["Rapport à soi",["Bienveillance envers soi","Respect de mes limites","Autonomie","Courage","Patience","Authenticité"]],
 ["Travail et apprentissage",["Curiosité","Créativité","Persévérance","Coopération","Fiabilité","Transmission"]],
 ["Vie quotidienne et engagement",["Prendre soin de mon corps","Cultiver la joie","Solidarité","Justice","Respect du vivant","Simplicité","Ouverture"]]
];
const situations = [
 [["À la maison","Je vois une poignée brillante et des motifs sur un coussin. Je sens la chaise sous moi et j’entends le réfrigérateur."],["Dehors","Je repère des feuilles, une façade et un reflet. Je sens la poignée de mon sac, j’entends des pas et je remarque l’odeur de la terre."],["Dans les transports","Je remarque une couleur sur un siège, la pression de mes chaussures et le bruit des portes."]],
 [["Avant une réunion","Je remarque que j’ai la pensée que je ne suis pas à la hauteur. Je peux quand même lire la première phrase que j’ai préparée."],["Après un désaccord","Je remarque que j’ai la pensée que tout est de ma faute. Je peux attendre un moment et demander comment l’autre a vécu la discussion."]],
 [["Avant un appel","Je remarque de l’appréhension et ma mâchoire se serre. Je laisse mes pieds au sol et je prépare ma première phrase."],["Après un rendez-vous annulé","Je ressens de la déception et de l’agacement. Je prends le temps de les remarquer, puis je décide comment occuper ma soirée."],["Après avoir posé une limite","Je ressens à la fois du soulagement et de la culpabilité. Je peux remarquer les deux et prendre quelques instants avant de répondre."]],
 [["Un son et une pensée","Je remarque des pas dans le couloir, puis la pensée « On va me déranger ». Le son s’arrête et une autre pensée arrive."],["Plusieurs points de vue sur moi","Au travail, je me vois comme la personne qui doit tout régler. Avec des amis, je peux être celle qui écoute. Je remarque comment l’image que j’ai de moi varie selon le contexte."],["Des émotions qui bougent","Je remarque d’abord l’irritation, puis la déception. Je peux les observer même quand elles se chevauchent."]],
 [["Écoute","Je laisse mon proche terminer avant de lui poser une question."],["Curiosité","Face à un problème, je demande à un collègue comment il s’y prend."],["Respect de mes limites","Je propose un autre horaire quand une demande dépasse ce que je peux faire aujourd’hui."]],
 [["Entretenir un lien","Mardi, après le déjeuner, j’envoie un message à une amie. Si je manque de temps, je commence par une phrase."],["Prendre soin de mon corps","Jeudi après le travail, je marche dix minutes près de chez moi. S’il pleut, je marche cinq minutes dans un lieu couvert."],["Cultiver la curiosité","Dimanche matin, je lis deux pages d’un livre que j’ai envie de découvrir. Si je suis pressé·e, je lis un paragraphe."]],
 [["Un proche attend ma réponse","Je redoute de l’appeler. Reporter me soulage sur le moment. Envoyer un bref message peut m’aider à entretenir ce lien."],["Une demande de dernière minute","J’ai peur de décevoir. Dire oui d’emblée apaise mon inquiétude. Demander un délai me permet de vérifier mes disponibilités et de répondre avec honnêteté."],["Une activité que j’aimerais essayer","Je pense que je serai ridicule. Renoncer soulage ma gêne. Contacter le groupe pour poser une question peut servir ma curiosité."]]
];
const extraSituations = [
 ["Avant une consultation", "Dans la salle d’attente, je vois le contour d’une affiche, je sens mes semelles au sol et j’entends une porte s’ouvrir."],
 ["Face à une demande imprévue", "Je remarque que j’ai la pensée que je dois régler le problème de tout le monde. Je peux demander ce qui est urgent avant de proposer mon aide."],
 ["Quand mon avis est écarté", "Je remarque de l’indignation et mes épaules se raidissent. Je peux prendre un instant, puis demander comment la décision a été prise."],
 ["En lisant un message", "Je remarque une pensée inquiète, puis l’envie de relire le message. Je prends un instant pour observer les deux avant de répondre."],
 ["Solidarité", "Je propose à un voisin de l’aider à porter ses courses quand j’ai un moment."],
 ["Poser une limite", "Demain matin, je demande un délai avant de m’engager. Si je suis pris·e de court, je dis simplement que je répondrai dans l’après-midi."],
 ["Une décision a été prise sans moi", "Je pense qu’on a décidé à ma place et je ressens de la colère. Répondre immédiatement risque d’envenimer l’échange. Demander un rendez-vous peut m’aider à exprimer mon désaccord avec clarté."]
];
const selectedThoughts=new Set();
const selectedEmotions=new Set();
const allThoughts=thoughtGroups.flatMap(([,thoughts])=>thoughts);
const scores=scales.map(()=>null);
const app=document.querySelector("#app");
const info={}; const answers=steps.map(s=>s.fields.map(()=>"")); const choice=["","",""];
let page=-1;
const mail="contact@ombaliz.com";
const wa="33626751917";
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const icon=s=>`<svg class="symbol" viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg>`;
const keys=[["given","Prénom","text","given-name"],["family","Nom","text","family-name"],["email","Adresse e-mail","email","email"],["phone","Téléphone","tel","tel"]];
const diagram=`<svg viewBox="0 0 390 350" role="img" aria-label="Les six processus reliés à la flexibilité psychologique"><path d="M195 45 306 107v128l-111 65-111-65V107Z M195 45v255 M84 107l222 128m0-128L84 235" stroke="#b6cbb8" stroke-opacity=".55" fill="none" stroke-width="1.5"/><circle cx="195" cy="172" r="70" fill="#edd7ad"/><text x="195" y="167" fill="#194742" text-anchor="middle" font-family="Georgia" font-size="21"><tspan x="195">Flexibilité</tspan><tspan x="195" dy="23">psychologique</tspan></text>${[[195,45,"Présent"],[306,107,"Défusion"],[306,235,"Acceptation"],[195,300,"Soi observateur"],[84,235,"Valeurs"],[84,107,"Action"]].map(([x,y,t])=>`<circle cx="${x}" cy="${y}" r="8" fill="#eccaa2"/><text x="${x}" y="${y+27}" text-anchor="middle" fill="#fff6e7" font-size="14" font-family="system-ui">${t}</text>`).join("")}</svg>`;
function move(next){page=next;render();window.scrollTo(0,0);app.querySelector("h1").focus({preventScroll:true});}
function render(){
 if(page===-1){
  app.innerHTML=`<section class="hero"><div class="hero-copy"><div class="eyebrow">Mon parcours ACT</div><h1 tabindex="-1">Avancer vers ce qui compte.</h1><p>Six exercices pour faire de la place à ce que vous ressentez et choisir des actions qui ont du sens pour vous.</p><button class="primary" data-next="0">Commencer le parcours →</button></div><div class="diagram">${diagram}</div></section>
  <section class="explain"><div><h2>Comprendre l’hexaflex</h2><p>Ce dessin relie les six processus de l’ACT. Ensemble, ils développent la <b>flexibilité psychologique</b>, c’est-à-dire la capacité à rester en contact avec ce que je vis ici et maintenant, puis à poursuivre ou ajuster mes actions selon la situation et ce qui compte pour moi.</p><p>Vous allez les essayer dans un ordre guidé. Dans la vie quotidienne, ils se combinent et vous pouvez revenir à celui qui vous aide sur le moment.</p><p class="hint">Exemple · Je remarque mon inquiétude avant de passer un appel, je sens mes pieds au sol et je compose le numéro parce que ce lien compte pour moi.</p></div><div class="cards">${steps.map(s=>`<article class="tile">${icon(s)}<h3>${s.name}</h3><p>${s.short}</p></article>`).join("")}</div></section>
  <details><summary>Références et utilisation</summary><p>Les exercices sont des adaptations pour ce parcours, inspirées de Russ Harris, <a href="https://www.deboecksuperieur.com/livre/9782807329980-passez-a-l-act">Passez à l’ACT</a>, 3e édition, De Boeck Supérieur, 2022. Pour le modèle de l’hexaflex, voir aussi la <a href="https://doi.org/10.1016/j.jcbs.2024.100734">présentation du modèle de flexibilité psychologique</a> dans le Journal of Contextual Behavioral Science.</p><p>Sources complémentaires : <a href="https://www.nhsinform.scot/healthy-living/mental-wellbeing/breathing-and-relaxation-exercises/grounding-exercises">ancrage sensoriel 5–4–3–2–1 (NHS Inform)</a> et <a href="https://www.emdria.org/resource/inclusive-negative-and-positive-cognitions-and-emotions-list/">exemples de cognitions (EMDRIA)</a>.</p><p><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3083636/">Tangney, Stuewig et Mashek, 2007 · émotions liées au regard sur soi</a> et <a href="https://doi.org/10.1073/pnas.1702247114">Cowen et Keltner, 2017 · diversité et continuité des ressentis</a>.</p><p><a href="https://pubmed.ncbi.nlm.nih.gov/24379370/">Nummenmaa et collègues, 2014 · cartographie du ressenti corporel</a>.</p><p>Vous pouvez passer un exercice, faire une pause ou en parler en séance si une étape vous remue.</p></details>`;return;
 }
 const meter=`<div class="progress"><label for="progress"><span>${page===0?"Coordonnées":page===7?"La Question du Choix":page===8?"Synthèse":"Exercice "+page+" sur 6"}</span><span>${page+1} / 9</span></label><progress id="progress" value="${page+1}" max="9"></progress></div>`;
 let body="";
 if(page===0){
  body=`<form id="identity" class="panel"><h1 tabindex="-1">Mes coordonnées</h1><p>Ces quatre champs figurent dans votre PDF. Vos réponses restent dans cet onglet jusqu’à ce que vous téléchargiez ou partagiez la synthèse. Fermer ou actualiser la page efface la saisie.</p><div class="fields">${keys.map(([id,label,type,auto])=>`<label class="field">${label}<input name="${id}" type="${type}" autocomplete="${auto}" required maxlength="${id==="email"?254:id==="phone"?30:80}" value="${escapeHTML(info[id]??"")}"></label>`).join("")}</div><div class="actions"><button type="button" class="secondary" data-next="-1">Retour</button><button class="primary">Continuer →</button></div></form>`;
 }else if(page<=6){
  const s=steps[page-1];
  body=`<section class="panel">${icon(s)}<div class="eyebrow">${s.term}</div><h1 tabindex="-1">${s.name}</h1><p>${s.why}</p><div class="exercise"><h3>${s.exercise}</h3><ol>${s.instructions.map(x=>`<li>${x}</li>`).join("")}</ol>${s.tip?`<p class="hint">${s.tip}</p>`:""}</div>${renderIdeas(page-1)}${renderSituations(page-1)}<p class="hint">Vous pouvez garder une trace de l’exercice ou continuer sans écrire.</p>${s.fields.map(([label,example],i)=>field(label,example,answers[page-1][i],"answer",i)).join("")}${renderScale(page-1)}${page===3?renderBodyMap():""}${nav("Continuer")}</section>`;
 }else if(page===7){
  body=`<section class="panel">${icon(steps[4])}<h1 tabindex="-1">La Question du Choix</h1><p>Prenez une situation concrète. Quand des pensées ou des émotions difficiles apparaissent, observez ce que vous faites et les effets que cela a pour vous. Un même geste peut vous rapprocher ou vous éloigner de ce qui compte selon le contexte.</p>${renderSituations(6)}${[["Ce qui se passe et ce qui apparaît en moi","Un proche attend ma réponse. Je sens une boule au ventre."],["Ce qui risque de m’éloigner de ce qui compte","Laisser le message sans réponse toute la semaine."],["Ce qui pourrait m’en rapprocher","Envoyer un message bref pour proposer un moment pour parler."]].map(([l,e],i)=>field(l,e,choice[i],"choice",i)).join("")}${renderScale(6)}${nav("Voir ma synthèse")}</section>`;
 }else{
  body=`<section class="panel"><h1 tabindex="-1">Ma synthèse ACT</h1><p>Relisez vos réponses, puis choisissez si vous souhaitez garder ou transmettre le PDF. Le document contient vos coordonnées et les réponses affichées ici.</p><div class="actions"><button class="primary" data-export="download">Télécharger le PDF</button><button class="secondary" data-export="share">Partager le PDF</button></div><p id="status" class="status" role="status"></p><p class="hint">Pour un envoi ciblé, téléchargez le PDF, ouvrez votre messagerie ou WhatsApp avec les boutons ci-dessous, puis joignez le fichier avant d’envoyer. Si le menu de partage de votre téléphone s’ouvre, vous pouvez y choisir votre application et le destinataire.</p><div class="actions"><a href="mailto:${mail}?subject=Ma%20synth%C3%A8se%20ACT">E-mail · ${mail}</a><a href="https://wa.me/${wa}" target="_blank" rel="noopener noreferrer">WhatsApp · 06 26 75 19 17</a></div><dl class="review">${sections().map(s=>`<dt>${escapeHTML(s.title)}</dt>${s.rows.map(([label,value])=>`<dd><b>${escapeHTML(label)}</b> · ${escapeHTML(value)}</dd>`).join("")}`).join("")}</dl><div class="actions"><button class="secondary" data-next="7">← Modifier mes réponses</button><button class="quiet" id="reset">Effacer et recommencer</button></div></section>`;
 }
 app.innerHTML=`<div class="flow">${meter}${body}</div>`;
}
function renderSituations(index){
 return `<details class="situations"><summary>Voir des exemples dans la vie quotidienne</summary>${[...situations[index],extraSituations[index]].map(([label,example])=>`<p><b>${label}</b> · ${example}</p>`).join("")}</details>`;
}
function chip(value,kind){
 const selected=kind==="thought"?selectedThoughts:selectedEmotions;
 return `<button type="button" data-kind="${kind}" data-value="${escapeHTML(value)}" aria-pressed="${selected.has(value)}">${escapeHTML(value)}</button>`;
}
function renderGroups(groups,renderChip){
 return groups.map(([label,options])=>`<div class="example-group"><b>${label}</b><div class="chips">${options.map(renderChip).join("")}</div></div>`).join("");
}
function emotionSuggestions(){
 const thoughts=allThoughts.filter(([thought])=>selectedThoughts.has(thought));
 if(!thoughts.length)return "";
 return `<div class="suggestions"><h3>Qu’est-ce que cette pensée pourrait éveiller en moi ?</h3><p class="hint">Selon la situation, une même pensée peut s’accompagner de plusieurs émotions. Par exemple, après un désaccord, « Tout est de ma faute » peut éveiller de la culpabilité si je repense à un geste, du regret si j’aurais voulu agir autrement, ou de la honte si je me juge dans mon ensemble. Choisissez seulement les mots qui vous correspondent.</p>${renderGroups(thoughts.map(([thought,...emotions])=>[thought,emotions]),value=>chip(value,"emotion"))}</div>`;
}
function renderIdeas(index){
 if(index===1)return `<section class="examples"><h3>Mes pensées à observer</h3><p class="hint">Touchez plusieurs pensées si elles vous parlent. Touchez de nouveau pour retirer un choix. Les exemples s’inspirent des cognitions explorées en EMDR.</p>${renderGroups(thoughtGroups,([thought])=>chip(thought,"thought"))}<div id="emotion-suggestions">${emotionSuggestions()}</div></section>`;
 if(index===2)return `<section class="examples"><h3>Mes émotions et ressentis</h3><p class="hint">Plusieurs mots peuvent correspondre à ce que vous vivez. Pour l’exercice, partez d’une situation qui vous touche à une intensité supportable.</p><div id="emotion-suggestions">${emotionSuggestions()}</div>${renderGroups(emotionGroups,value=>chip(value,"emotion"))}<details><summary>Quelques nuances entre émotions proches</summary><p><b>Honte et culpabilité.</b> La honte peut porter sur l’image que j’ai de moi (« Je me sens nul·le »). La culpabilité peut porter sur un geste (« Je regrette de lui avoir parlé ainsi »).</p><p><b>Jalousie et envie.</b> La jalousie peut apparaître quand je crains de perdre une relation qui compte. L’envie peut naître quand j’aimerais avoir quelque chose que l’autre possède.</p><p><b>Émotions mêlées.</b> Je peux ressentir de la joie pour une personne et de la tristesse à l’idée qu’elle parte. Je peux aussi ressentir du soulagement et de la culpabilité après avoir dit non.</p></details></section>`;
 if(index===4)return `<section class="examples"><h3>Explorer des valeurs</h3><p class="hint">Touchez une valeur pour la reprendre dans votre réponse. Vous pourrez la modifier.</p>${renderGroups(valueGroups,value=>`<button type="button" data-value-idea="${escapeHTML(value)}">${value}</button>`)}</section>`;
 return "";
}
function renderScale(index){
 const scale=scales[index];
 const marks=scale.anchors.map((label,i)=>`<div><svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${art[scale.art[i]]}</svg><b>${i*5}</b><span>${label}</span></div>`).join("");
 return `<fieldset class="rating" data-color="${scale.color}"><legend>${scale.prompt}</legend><div class="rating-marks" id="rating-marks">${marks}</div><div class="rating-options" aria-describedby="rating-marks">${Array.from({length:11},(_,i)=>`<label style="--level:${i}"><input type="radio" name="rating" value="${i}" aria-label="${i} sur 10${i%5===0?", "+scale.anchors[i/5]:""}" ${scores[index]===i?"checked":""}><span>${i}</span></label>`).join("")}</div><div class="rating-caption"><span id="rating-value" aria-live="polite">${scores[index]===null?"Repère facultatif":scores[index]+" / 10"}</span><button class="quiet" type="button" data-clear-rating ${scores[index]===null?"hidden":""}>Effacer le repère</button></div></fieldset>`;
}
function field(label,example,value,group,i){return `<label class="field">${label}<textarea maxlength="1200" placeholder="${escapeHTML(example)}" data-group="${group}" data-i="${i}">${escapeHTML(value)}</textarea></label>`;}
function nav(label){return `<div class="actions"><button class="secondary" data-next="${page-1}">← Retour</button><button class="primary" data-next="${page+1}">${label} →</button></div>`;}
function sections(){
 return [
  {title:"Mes coordonnées",rows:keys.map(([id,label])=>[label,info[id]])},
  ...steps.map((s,i)=>({title:s.name,rows:[...(i===1?[["Pensées choisies",[...selectedThoughts].join("\n")]]:[]),...(i===2?[["Émotions et ressentis choisis",[...selectedEmotions].join(", ")]]:[]),...s.fields.map(([l],j)=>[l,answers[i][j].trim()]),[scales[i].prompt,scores[i]===null?"":scores[i]+" / 10"]].filter(([,a])=>a)})),
  {title:"Mes sensations dans le corps",rows:bodyRows()},
  {title:"La Question du Choix",rows:[...["Situation et vécu intérieur","Ce qui m’éloigne","Ce qui me rapproche"].map((l,i)=>[l,choice[i].trim()]),[scales[6].prompt,scores[6]===null?"":scores[6]+" / 10"]].filter(([,a])=>a)}
 ].filter(s=>s.rows.length);
}
app.addEventListener("submit",e=>{
 e.preventDefault();
 const form=e.target;
 for(const [id] of keys){const input=form.elements[id];if(!input.value.trim()){input.setCustomValidity("Renseignez ce champ.");input.reportValidity();return;}}
 const phone=form.elements.phone;
 if(!/^\+?[0-9().\s-]+$/.test(phone.value.trim())||!/^\d{7,15}$/.test(phone.value.replace(/\D/g,""))){phone.setCustomValidity("Saisissez un numéro de téléphone valide.");phone.reportValidity();return;}
 move(1);
});
app.addEventListener("input",e=>{
 const t=e.target;
 if(t.dataset.bodyField){updateBodyDraft(t);return;}
 if(t.closest("#identity")){info[t.name]=t.value.trim();t.setCustomValidity("");}
 if(t.dataset.group==="answer")answers[page-1][Number(t.dataset.i)]=t.value;
 if(t.dataset.group==="choice")choice[Number(t.dataset.i)]=t.value;
});
app.addEventListener("change",e=>{
 if(e.target.dataset.bodyField){updateBodyDraft(e.target);return;}
 if(e.target.name!=="rating")return;
 scores[page-1]=Number(e.target.value);
 document.querySelector("#rating-value").textContent=scores[page-1]+" / 10";
 app.querySelector("[data-clear-rating]").hidden=false;
});
app.addEventListener("click",async e=>{
 const btn=e.target.closest("button");if(!btn)return;
 if(handleBodyAction(btn))return;
 if(btn.dataset.kind){
  const {kind,value}=btn.dataset;
  const selected=kind==="thought"?selectedThoughts:selectedEmotions;
  if(selected.has(value))selected.delete(value);else selected.add(value);
  if(kind==="thought")app.querySelector("#emotion-suggestions").innerHTML=emotionSuggestions();
  for(const option of app.querySelectorAll(`[data-kind="${kind}"]`)){
   option.setAttribute("aria-pressed",String(selected.has(option.dataset.value)));
  }
  return;
 }
 if(btn.dataset.valueIdea!==undefined){
  const field=app.querySelector('textarea[data-group="answer"][data-i="0"]');
  field.value=btn.dataset.valueIdea;
  field.dispatchEvent(new Event("input",{bubbles:true}));
  field.focus();
  return;
 }
 if(btn.hasAttribute("data-clear-rating")){
  scores[page-1]=null;
  const checked=app.querySelector('input[name="rating"]:checked');
  if(checked)checked.checked=false;
  app.querySelector("#rating-value").textContent="Repère facultatif";
  app.querySelector('input[name="rating"]').focus({preventScroll:true});
  btn.hidden=true;
  return;
 }
 if(btn.dataset.next!==undefined){move(Number(btn.dataset.next));return;}
 if(btn.id==="reset"&&confirm("Effacer toutes les informations saisies dans cet onglet ?")){Object.keys(info).forEach(k=>delete info[k]);answers.forEach(a=>a.fill(""));choice.fill("");scores.fill(null);selectedThoughts.clear();selectedEmotions.clear();clearBodyMap();move(-1);return;}
 if(!btn.dataset.export)return;
 const status=document.querySelector("#status");
 try{
  const pdf=buildActPdf(sections(),document.querySelector("#logo"));
  const file=new File([pdf],"Ma-synthese-ACT.pdf",{type:"application/pdf"});
  if(btn.dataset.export==="share"&&navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:"Ma synthèse ACT"});return;}
  const url=URL.createObjectURL(file);
  const link=document.createElement("a");link.href=url;link.download=file.name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
  status.textContent=btn.dataset.export==="share"?"PDF téléchargé. Joignez-le à votre e-mail ou à votre message WhatsApp.":"Le téléchargement du PDF a été lancé.";
 }catch(error){if(error.name!=="AbortError")status.textContent="Le PDF n’a pas pu être préparé ou partagé. Réessayez avec Télécharger le PDF.";}
});
document.querySelector("#install").onclick=()=>document.querySelector("#help").showModal();
if("serviceWorker" in navigator && /^https?:$/.test(location.protocol))navigator.serviceWorker.register("sw.js").catch(()=>{});
render();
