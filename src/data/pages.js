// src/data/pages.js

const BASE = import.meta.env.BASE_URL;

export const pages = [
  // 1 - couverture début
  {
    id: 1,
    type: "cover",
    img: `${BASE}assets/page_1.png`,
    title: "Les trois cheveux d’or du diable",
    text: "",
  },

  // 2 - présentation
  {
    id: 2,
    type: "presentation",
    img: `${BASE}assets/page_2.png`,
    title: "Les trois cheveux d’or du diable",
    translator: "Frédéric Baudry",
    author: "Les frères Grimm",
  },

  // --- Pages pleines haut ---
  {
    id: 3,
    type: "pleine-haut",
    img: `${BASE}assets/page_3.png`,
    text: "Il était une fois une pauvre femme qui mit au monde un fils, et, comme il était coiffé quand il naquit, on lui prédit que, dans sa quatorzième année, il épouserait la fille du roi.",
  },
  {
    id: 4,
    type: "pleine-haut",
    img: `${BASE}assets/page_4.png`,
    text: "Sur ces entrefaites, le roi passa par le village, sans que personne le reconnût ; et comme il demandait ce qu’il y avait de nouveau, on lui répondit qu’il venait de naître un enfant coiffé, que tout ce qu’il entreprendrait lui réussirait, et qu’on lui avait prédit que, lorsqu’il aurait quatorze ans, il épouserait la fille du roi. Le roi avait un mauvais cœur, et cette prédiction le fâcha. Il alla trouver les parents du nouveau-né, et leur dit d’un air tout amical : « Vous êtes de pauvres gens, donnez-moi votre enfant, j’en aurai bien soin. » Ils refusèrent d’abord ; mais l’étranger leur offrit de l’or, et ils se dirent : « Puisque l’enfant est né coiffé, ce qui arrive est pour son bien. » Ils finirent par consentir et par livrer leur fils. Le roi le mit dans une boîte, et chevaucha avec ce fardeau jusqu’au bord d’une rivière profonde où il le jeta, en pensant qu’il délivrait sa fille d’un galant sur lequel elle ne comptait guère.",
  },
  {
    id: 10,
    type: "pleine-haut",
    img: `${BASE}assets/page_10.png`,
    text: "Les voleurs rentrèrent bientôt après, et ils demandèrent avec colère pourquoi cet étranger était là. « Ah ! dit la vieille, c’est un pauvre enfant qui s’est égaré dans le bois ; je l’ai recu par compassion. Il porte une lettre à la reine. » Les voleurs prirent la lettre pour la lire, et virent qu’elle enjoignait de mettre à mort le messager. Malgré la dureté de leur cœur, ils eurent pitié du pauvre diable ; leur capitaine déchira la lettre, et en mit une autre à la place, qui enjoignait qu’aussitôt que le jeune homme arriverait, on lui fît immédiatement épouser la fille du roi. Puis les voleurs le laissèrent dormir sur son banc jusqu’au matin, et, quand il fut éveillé, ils lui remirent la lettre et lui montrèrent son chemin.",
  },
  {
    id: 16,
    type: "pleine-haut",
    img: `${BASE}assets/page_16.png`,
    text: "Texte de la page 16...",
  },

  // --- Pages pleines bas ---
  {
    id: 5,
    type: "pleine-bas",
    img: `${BASE}assets/page_5.png`,
    text: "Mais la boîte, loin de couler à fond, se mit à flotter comme un petit batelet, sans qu’il entrât dedans une seule goutte d’eau ; elle alla ainsi à la dérive jusqu’à deux lieues de la capitale, et s’arrêta contre l’écluse d’un moulin. Un garcon meunier qui se trouvait là par bonheur l’apercut et l’attira avec un croc ; il s’attendait, en l’ouvrant, à y trouver de grands trésors : mais c’était un joli petit garcon, frais et éveillé. Il le porta au moulin ; le meunier et sa femme, qui n’avaient pas d’enfants, recurent celui-là comme si Dieu le leur eût envoyé.",
  },
  {
    id: 6,
    type: "pleine-bas",
    img: `${BASE}assets/page_6.png`,
    text: "Ils traitèrent de leur mieux le petit orphelin, qui grandit chez eux en forces et en bonnes qualités.",
  },
  {
    id: 7,
    type: "pleine-bas",
    img: `${BASE}assets/page_7.png`,
    text: "Un jour, le roi, surpris par la pluie, entra dans le moulin et demanda au meunier si ce grand jeune homme était son fils. « Non, sire, répondit-il : c’est un enfant trouvé qui est venu dans une boîte échouer contre notre écluse, il y a quatorze ans ; notre garcon meunier l’a tiré de l’eau. »",
  },
  {
    id: 12,
    type: "pleine-bas",
    img: `${BASE}assets/page_12.png`,
    text: "Il demanda au jeune homme ce qu’était devenue la lettre qu’il lui avait confiée, et pourquoi il en avait remis une autre. « Je n’en sais rien, répliqua celui-ci ; il faut qu’on l’ait changée la nuit, quand j’ai couché dans la forêt. » Le roi en colère lui dit : « Cela ne se passera pas ainsi. Celui qui prétend à ma fille doit me rapporter de l’enfer trois cheveux d’or de la tête du diable. Rapporte-les-moi, et ma fille t’appartiendra. » <br> Le roi espérait bien qu’il ne reviendrait jamais d’une pareille commission. Le jeune homme répondit : « Le diable ne me fait pas peur ; j’irai chercher les trois cheveux d’or, » Et il prit congé du roi et se mit en route.",
  },
  {
    id: 17,
    type: "pleine-bas",
    img: `${BASE}assets/page_17.png`,
    text: "Texte de la page 17...",
  },
  {
    id: 19,
    type: "pleine-bas",
    img: `${BASE}assets/page_19.png`,
    text: "Texte de la page 19...",
  },
  {
    id: 20,
    type: "pleine-bas",
    img: `${BASE}assets/page_20.png`,
    text: "Texte de la page 20...",
  },
  {
    id: 21,
    type: "pleine-bas",
    img: `${BASE}assets/page_21.png`,
    text: "Texte de la page 21...",
  },
  {
    id: 22,
    type: "pleine-bas",
    img: `${BASE}assets/page_22.png`,
    text: "Texte de la page 22...",
  },

  // --- Pages petites (image à gauche + page blanche à droite) ---
  {
    id: 8,
    type: "petite",
    img: `${BASE}assets/page_8.png`,
    text: "Le roi reconnut alors que c’était l’enfant né coiffé qu’il avait jeté à la rivière. « Bonnes gens, dit-il, ce jeune homme ne pourrait-il pas porter une lettre de ma part à la reine ? je lui donnerais deux pièces d’or pour sa peine. — Comme Votre Majesté l’ordonnera, » répondirent-ils ; et ils dirent au jeune homme de se tenir prêt. Le roi écrivit à la reine une lettre où il lui mandait de se saisir du messager, de le mettre à mort et de l’enterrer, de facon à ce qu’il trouvât la chose faite à son retour.",
  },
  {
    id: 9,
    type: "petite",
    img: `${BASE}assets/page_9.png`,
    text: "Le garcon se mit en route avec la lettre, mais il s’égara et arriva le soir dans une grande forêt. Au milieu des ténèbres, il apercut de loin une faible lumière, et, se dirigeant de ce côté, il atteignit une petite maisonnette où il trouva une vieille femme assise près du feu. Elle parut toute surprise de voir le jeune homme et lui dit : « D’où viens-tu et que veux-tu? —Je viens du moulin, répondit-il ; je porte une lettre à la reine ; j’ai perdu mon chemin, et je voudrais bien passer la nuit ici. — Malheureux enfant, répliqua la femme, tu es tombé dans une maison de voleurs, et, s’ils te trouvent ici, c’est fait de toi. — A la grâce de Dieu ! dit le jeune homme, je n’ai pas peur ; et, d’ailleurs, je suis si fatigué qu’il m’est impossible d’aller plus loin. » Il se coucha sur un banc et s’endormit.",
  },
  {
    id: 11,
    type: "petite",
    img: `${BASE}assets/page_11.png`,
    text: "La reine, ayant recu la lettre, exécuta ce qu’elle contenait : on fit des noces splendides ; la fille du roi épousa l’enfant né coiffé ; et, comme il était beau et aimable, elle fut enchantée de vivre avec lui.<br> Quelque temps après, le roi revint dans son palais, et trouva que la prédiction était accomplie et que l’enfant né coiffé avait épousé sa fille. <br> « Comment cela s’est-il fait ? dit-il ; j’avais donné dans ma lettre un ordre tout différent. »  <br>La reine lui montra la lettre, et lui dit qu’il pouvait voir ce qu’elle contenait. Il la lut et vit bien qu’on avait changé la sienne.",
  },
  {
    id: 13,
    type: "petite",
    img: `${BASE}assets/page_13.png`,
    text: "Texte de la page 13...",
  },
  {
    id: 14,
    type: "petite",
    img: `${BASE}assets/page_14.png`,
    text: "Texte de la page 14...",
  },
  {
    id: 15,
    type: "petite",
    img: `${BASE}assets/page_15.png`,
    text: "Texte de la page 15...",
  },
  {
    id: 18,
    type: "petite",
    img: `${BASE}assets/page_18.png`,
    text: "Texte de la page 18...",
  },

  // 23 - couverture fin
  {
    id: 23,
    type: "cover",
    img: `${BASE}assets/page_1.png`,
    title: "Fin",
    text: "",
  },
];
