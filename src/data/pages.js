// src/data/pages.js

const BASE = import.meta.env.BASE_URL;

export const pages = [
  // 1 - couverture début
  { id: 1, type: "cover", img: `${BASE}assets/page_1.png`, title: "Les trois cheveux d’or du diable", text: "" },

  // 2 - présentation
  { id: 2, type: "presentation", img: `${BASE}assets/page_2.png`, title: "Les trois cheveux d’or du diable", translator: "Frédéric Baudry", author: "Les frères Grimm" },

  // Pages pleines haut
  { id: 3, type: "pleine-haut", img: `${BASE}assets/page_3.png`, text: "Il était une fois une pauvre femme qui mit au monde un fils, et, comme il était coiffé quand il naquit, on lui prédit que, dans sa quatorzième année, il épouserait la fille du roi." },
  { id: 4, type: "pleine-haut", img: `${BASE}assets/page_4.png`, text: "Sur ces entrefaites, le roi passa par le village, sans que personne le reconnût ; et comme il demandait ce qu’il y avait de nouveau, on lui répondit qu’il venait de naître un enfant coiffé, que tout ce qu’il entreprendrait lui réussirait, et qu’on lui avait prédit que, lorsqu’il aurait quatorze ans, il épouserait la fille du roi. Le roi avait un mauvais cœur, et cette prédiction le fâcha. Il alla trouver les parents du nouveau-né, et leur dit d’un air tout amical : « Vous êtes de pauvres gens, donnez-moi votre enfant, j’en aurai bien soin. » Ils refusèrent d’abord ; mais l’étranger leur offrit de l’or, et ils se dirent : « Puisque l’enfant est né coiffé, ce qui arrive est pour son bien. » Ils finirent par consentir et par livrer leur fils. Le roi le mit dans une boîte, et chevaucha avec ce fardeau jusqu’au bord d’une rivière profonde où il le jeta, en pensant qu’il délivrait sa fille d’un galant sur lequel elle ne comptait guère." },
  { id: 10, type: "pleine-haut", img: `${BASE}assets/page_10.png`, text: "Texte de la page 10..." },
  { id: 16, type: "pleine-haut", img: `${BASE}assets/page_16.png`, text: "Texte de la page 16..." },

  // Pages pleines bas
  { id: 5, type: "pleine-bas", img: `${BASE}assets/page_5.png`, text: "Texte de la page 5..." },
  { id: 6, type: "pleine-bas", img: `${BASE}assets/page_6.png`, text: "Texte de la page 6..." },
  { id: 7, type: "pleine-bas", img: `${BASE}assets/page_7.png`, text: "Texte de la page 7..." },
  { id: 12, type: "pleine-bas", img: `${BASE}assets/page_12.png`, text: "Texte de la page 12..." },
  { id: 17, type: "pleine-bas", img: `${BASE}assets/page_17.png`, text: "Texte de la page 17..." },
  { id: 19, type: "pleine-bas", img: `${BASE}assets/page_19.png`, text: "Texte de la page 19..." },
  { id: 20, type: "pleine-bas", img: `${BASE}assets/page_20.png`, text: "Texte de la page 20..." },
  { id: 21, type: "pleine-bas", img: `${BASE}assets/page_21.png`, text: "Texte de la page 21..." },
  { id: 22, type: "pleine-bas", img: `${BASE}assets/page_22.png`, text: "Texte de la page 22..." },

  // Pages petites (image à gauche + page_vierge à droite)
  { id: 8, type: "petite", img: `${BASE}assets/page_8.png`, text: "Texte de la page 8..." },
  { id: 9, type: "petite", img: `${BASE}assets/page_9.png`, text: "Texte de la page 9..." },
  { id: 13, type: "petite", img: `${BASE}assets/page_13.png`, text: "Texte de la page 13..." },
  { id: 14, type: "petite", img: `${BASE}assets/page_14.png`, text: "Texte de la page 14..." },
  { id: 15, type: "petite", img: `${BASE}assets/page_15.png`, text: "Texte de la page 15..." },
  { id: 18, type: "petite", img: `${BASE}assets/page_18.png`, text: "Texte de la page 18..." },

  // 23 - couverture fin
  { id: 23, type: "cover", img: `${BASE}assets/page_1.png`, title: "Fin", text: "" },
];
