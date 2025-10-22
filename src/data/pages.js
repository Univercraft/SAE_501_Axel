// src/data/pages.js

const BASE = import.meta.env.BASE_URL;

export const pages = [
  // --- 1 - couverture début ---
  {
    id: 1,
    type: "cover",
    img: `${BASE}assets/page_1.png`,
    title: "Les trois cheveux d’or du diable",
    text: "",
  },

  // --- 2 - présentation ---
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
    text: "De l’autre côté de l’eau, il trouva la bouche de l’enfer. Elle était noire et enfumée. Le diable n’était pas chez lui ; il n’y avait que son hôtesse, assise dans un large fauteuil. « Que demandes-tu ? lui dit-elle d’un ton assez doux. — Il me faut trois cheveux d’or de la tête du diable, sans quoi je n’obtiendrai pas ma femme.<br>— C’est beaucoup demander, dit-elle, et si le diable t’aperçoit quand il rentrera, tu passeras un mauvais quart d’heure. Cependant tu m’intéresses, et je vais tâcher de te venir en aide. » Elle le changea en fourmi et lui dit : « Monte dans les plis de ma robe ; là tu seras en sûreté. » — Merci, répondit-il, voilà qui va bien ; mais j’aurais besoin en outre de savoir trois choses : pourquoi une fontaine qui versait toujours du vin ne fournit plus même d’eau ; pourquoi un arbre qui portait des pommes d’or n’a plus même de feuilles ; et si un certain passager doit toujours rester à son poste sans jamais être relevé. — Ce sont trois questions difficiles, dit-elle ; mais tiens-toi bien tranquille, et sois attentif à ce que le diable dira quand je lui arracherai les trois cheveux d’or. »",
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
    style: "mt-[3%]", // texte un peu plus bas
    text: "Il demanda au jeune homme ce qu’était devenue la lettre qu’il lui avait confiée, et pourquoi il en avait remis une autre. « Je n’en sais rien, répliqua celui-ci ; il faut qu’on l’ait changée la nuit, quand j’ai couché dans la forêt. » Le roi en colère lui dit : « Cela ne se passera pas ainsi. Celui qui prétend à ma fille doit me rapporter de l’enfer trois cheveux d’or de la tête du diable. Rapporte-les-moi, et ma fille t’appartiendra. » <br> Le roi espérait bien qu’il ne reviendrait jamais d’une pareille commission. Le jeune homme répondit : « Le diable ne me fait pas peur ; j’irai chercher les trois cheveux d’or, » Et il prit congé du roi et se mit en route.",
  },
  {
    id: 19,
    type: "pleine-bas",
    img: `${BASE}assets/page_19.png`,
    text: "Plus loin, il retrouva la ville à l’arbre stérile ; la sentinelle attendait aussi sa réponse : « Tuez la souris qui ronge les racines, dit-il, et les pommes d’or reviendront. » La sentinelle, pour le remercier, lui donna deux ânes chargés d’or.",
  },
  {
    id: 20,
    type: "pleine-bas",
    img: `${BASE}assets/page_20.png`,
    text: "Enfin il parvint à la ville dont la fontaine était à sec. Il dit à la sentinelle : « Il y a un crapaud sous une pierre dans la fontaine ; cherchez-le et tuez-le, et le vin recommencera à couler en abondance. » La sentinelle le remercia et lui donna encore deux ânes chargés d’or.",
  },
  {
    id: 21,
    type: "pleine-bas",
    img: `${BASE}assets/page_21.png`,
    text: "Enfin, l’enfant né coiffé revint près de sa femme, qui se réjouit dans son cœur en le voyant de retour et en apprenant que tout s’était bien passé. Il remit au roi les trois cheveux d’or du diable. Celui-ci, en apercevant les quatre ânes chargés d’or, fut grandement satisfait et lui dit : « Maintenant toutes les conditions sont remplies, et ma fille est à toi. Mais, mon cher gendre, dis-moi d’où te vient tant d’or, car c’est un trésor énorme que tu rapportes.— Je l’ai pris, dit-il, de l’autre côté d’une rivière que j’ai traversée ; c’est le sable du rivage. — Pourrais-je m’en procurer autant ? lui demanda le roi, qui était un avare. — Tant que vous voudrez, répondit-il. Vous trouverez un passager ; adressez-vous à lui pour passer l’eau, et vous pourrez remplir vos sacs. »",
  },
  {
    id: 22,
    type: "pleine-bas",
    img: `${BASE}assets/page_22.png`,
    text: "L’avide monarque se mit aussitôt en route, et, arrivé au bord de l’eau, il fit signe au passager de lui amener sa barque. Le passager le fit entrer, et, quand ils furent à l’autre bord, il lui mit la rame à la main et sauta dehors. Le roi devint ainsi passager en punition de ses péchés. « L’est-il encore ? — Eh ! sans doute, puisque personne ne lui a repris la rame. »",
  },

  // --- Pages petites (image à gauche + fond vierge à droite) ---
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
    text: "Il arriva devant une grande ville. A la porte, la sentinelle lui demanda quel était son état et ce qu’il savait : <br> « Tout, répondit-il. <br>— Alors, dit la sentinelle, rends-nous le service de nous apprendre pourquoi la fontaine de notre marché, qui nous donnait toujours du vin, s’est desséchée et ne fournit même plus d’eau. <br>— Attendez, répondit-il, je vous le dirai à mon retour. »",
  },
  {
    id: 14,
    type: "petite",
    img: `${BASE}assets/page_14.png`,
    text: "Plus loin, il arriva devant une autre ville. La sentinelle de la porte lui demanda son état et ce qu’il savait. <br>« Tout, répondit-il. <br>— Rends-nous alors le service de nous apprendre pourquoi le grand arbre de notre ville, qui nous rapportait des pommes d’or, n’a plus même de feuilles.<br> — Attendez, répondit-il, je vous le dirai à mon retour. »",
  },
  {
    id: 15,
    type: "petite",
    img: `${BASE}assets/page_15.png`,
    text: "Plus loin encore il arriva devant une grande rivière qu’il s’agissait de passer. Le passager lui demanda son état et ce qu’il savait.<br>« Tout, répondit-il.<br>— Alors, dit le passager, rends-moi le service de m’apprendre si je dois toujours rester a ce poste, sans jamais être relevé.<br>— Attends, répondit-il, je te le dirai à mon retour. »",
  },
  {
  id: 17,
  type: "petite",
  img: `${BASE}assets/page_17.png`,
  text: `Quand le soir arriva, le diable revint chez lui. A peine était-il entré qu’il remarqua une odeur extraordinaire. « Il y a du nouveau ici, dit-il ; je sens la chair humaine. » Et il alla fureter dans tous les coins, mais sans rien trouver.<br>

L’hôtesse lui chercha querelle : « Je viens de balayer et de ranger, dit-elle, et tu vas tout bouleverser ici, tu crois toujours sentir la chair humaine. Assieds-toi et mange ton souper. »<br>

Quand il eut soupé, il était fatigué ; il posa sa tête sur les genoux de son hôtesse, et lui dit de lui chercher un peu les poux ; mais il ne tarda pas à s’endormir et à ronfler.
La vieille saisit un cheveu d’or, l’arracha et le mit de côté. « Hé, s’écria le diable, qu’as-tu donc fait ?<br>
— J’ai eu un mauvais rêve, dit l’hôtesse, et je t’ai pris par les cheveux.<br>
— Qu’as-tu donc rêvé ? demanda le diable.<br>
— J’ai rêvé que la fontaine d’un marché, qui versait toujours du vin, s’était arrêtée et qu’elle ne donnait plus même d’eau ; quelle en peut être la cause ?<br>
— Ah ! si on le savait ! répliqua le diable : il y a un crapaud sous une pierre dans la fontaine ; on n’aurait qu’à le tuer, le vin recommencerait à couler. »<br>

L’hôtesse se remit à lui chercher les poux ; il se rendormit et ronfla de façon à ébranler les vitres. Alors elle lui arracha le second cheveu. « Heu ! que fais-tu ? s’écria le diable en colère.<br>
— Ne t’inquiète pas, répondit-elle, c’est un rêve que j’ai fait.<br>
— Qu’as-tu rêvé encore ? demanda-t-il.<br>
— J’ai rêvé que dans un pays il y a un arbre qui portait toujours des pommes d’or, et qui n’a plus même de feuilles ; quelle en pourrait être la cause ?<br>
— Ah ! si on le savait ! répliqua le diable : il y a une souris qui ronge la racine ; on n’aurait qu’à la tuer, il reviendrait des pommes d’or à l’arbre ; mais si elle continue à la ronger, l’arbre mourra tout à fait. Maintenant laisse-moi en repos avec tes rêves. Si tu me réveilles encore, je te donnerai un soufflet. »<br> 

L’hôtesse l’apaisa et se remit à lui chercher ses poux jusqu’à ce qu’il fût rendormi et ronflant. Alors elle saisit le troisième cheveu d’or et l’arracha. Le diable se leva en criant et voulait la battre ; elle le radoucit encore en disant : « Qui peut se garder d’un mauvais rêve ?<br>
— Qu’as-tu donc rêvé encore ? demanda-t-il avec curiosité.<br>
— J’ai rêvé d’un passager qui se plaignait de toujours passer l’eau avec sa barque, sans que personne le remplaçât jamais.<br>
— Hé ! le sot ! répondit le diable : le premier qui viendra pour passer la rivière, il n’a qu’à lui mettre sa rame à la main, il sera libre et l’autre sera obligé de faire le passage à son tour. »<br>

Comme l’hôtesse lui avait arraché les trois cheveux d’or, et qu’elle avait tiré de lui les trois réponses, elle le laissa en repos, et il dormit jusqu’au matin. Quand le diable eut quitté la maison, la vieille prit la fourmi dans les plis de sa robe et rendit au jeune homme sa figure humaine.<br>

<i>Voilà les trois cheveux, lui dit-elle ; mais as-tu bien entendu les réponses du diable à tes questions ?<br>
— Très-bien, répondit-il, et je m’en souviendrai.<br>
— Te voilà donc hors d’embarras, dit-elle, et tu peux reprendre ta route.</i>`
},
  {
    id: 18,
    type: "petite",
    img: `${BASE}assets/page_18.png`,
    text: "Quand il arriva au passager, avant de lui donner la réponse promise, il se fit d’abord passer de l’autre côté, et alors il lui fit part du conseil donné par le diable : « Le premier qui viendra pour passer la rivière, tu n’as qu’à lui mettre ta rame à la main. »",
  },

  // --- 23 - couverture fin ---
  {
    id: 23,
    type: "cover",
    img: `${BASE}assets/page_1.png`,
    title: "Fin",
    text: "",
  },
];
