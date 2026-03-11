export interface Ingredient {
  item: string;
  quantity: string;
}

export interface MealOption {
  id: string;
  label: string;
  ingredients: Ingredient[];
  note?: string;
}

export interface Meal {
  id: string;
  label: string;
  emoji: string;
  tip?: string;
  options: MealOption[];
  extras?: string[];
}

export interface Recipe {
  id: string;
  name: string;
  emoji: string;
  ingredients: string[];
  instructions: string;
}

export interface ShoppingCategory {
  id: string;
  label: string;
  emoji: string;
  items: string[];
}

export interface Tip {
  id: string;
  title: string;
  emoji: string;
  content: string;
  items?: string[];
  recipe?: {
    ingredients: string[];
    instructions: string;
  };
}

export const MEALS: Meal[] = [
  {
    id: 'breakfast',
    label: 'Café da Manhã',
    emoji: '🌅',
    tip: 'Certifique-se de que seu café da manhã tenha proteína, gordura saudável, fibra e carboidrato.',
    options: [
      {
        id: 'breakfast_1',
        label: 'Opção 1 — Tapioca',
        ingredients: [
          { item: 'Goma para tapioca', quantity: '3 col. sopa (70g)' },
          { item: 'Ovo OU frango desfiado OU carne moída (patinho/coxão mole)', quantity: '1 un. OU 2 col. sopa (40g)' },
          { item: 'Queijo coalho ou minas', quantity: '1 fatia pequena (30g)' },
          { item: 'Café', quantity: '1 xícara' },
        ],
      },
      {
        id: 'breakfast_2',
        label: 'Opção 2 — Pão Integral',
        ingredients: [
          { item: 'Pão de forma integral (Speciale, Aipi ou Plus Vita)', quantity: '2 fatias' },
          { item: 'Ovo OU frango desfiado OU carne moída', quantity: '1 un. OU 2 col. sopa (40g)' },
          { item: 'Queijo coalho ou minas', quantity: '1 fatia pequena (30g)' },
          { item: 'Café', quantity: '1 xícara' },
        ],
      },
      {
        id: 'breakfast_3',
        label: 'Opção 3 — Cuscuz',
        ingredients: [
          { item: 'Cuscuz paulistinha fina (pesado cozido)', quantity: '100g' },
          { item: 'Ovo OU frango desfiado OU carne moída', quantity: '1 un. OU 2 col. sopa (40g)' },
          { item: 'Queijo coalho ou minas', quantity: '1 fatia pequena (30g)' },
          { item: 'Café', quantity: '1 xícara' },
        ],
      },
      {
        id: 'breakfast_4',
        label: 'Opção 4 — Pão Francês',
        ingredients: [
          { item: 'Pão francês', quantity: '1 unidade' },
          { item: 'Ovo OU frango desfiado OU carne moída', quantity: '1 un. OU 2 col. sopa (40g)' },
          { item: 'Queijo coalho ou minas', quantity: '1 fatia pequena (30g)' },
          { item: 'Café', quantity: '1 xícara' },
        ],
      },
    ],
  },
  {
    id: 'morning_snack',
    label: 'Lanche da Manhã',
    emoji: '🍌',
    options: [
      {
        id: 'morning_snack_1',
        label: 'Opção 1 — Fruta + Castanhas',
        ingredients: [
          { item: 'Qualquer fruta', quantity: '1 un. OU 1 fatia média (150g) [uva: 100g ≈ 15 un.]' },
          { item: 'Castanha de caju natural sem sal', quantity: '20g (≈ 7 unidades)' },
        ],
      },
      {
        id: 'morning_snack_2',
        label: 'Opção 2 — Fruta + Aveia',
        ingredients: [
          { item: 'Banana (1 média) OU Mamão (1 fatia média, 170g) OU Melão (1 fatia grande, 200g)', quantity: '1 porção' },
          { item: 'Farelo de aveia OU aveia em flocos', quantity: '1 col. sopa (10g)' },
        ],
      },
    ],
  },
  {
    id: 'lunch',
    label: 'Almoço',
    emoji: '☀️',
    tip: 'Não esqueça de tomar água! Leve sua garrafinha. 💧',
    options: [
      {
        id: 'lunch_1',
        label: 'Opção 1 — Arroz e Feijão',
        ingredients: [
          { item: 'Salada', quantity: 'À vontade (qualquer folha ou legume)' },
          { item: 'Arroz (branco, integral ou parboilizado)', quantity: '1,5 escumadeira (100g)' },
          { item: 'Feijão (preto, carioca, etc.)', quantity: '1 concha média (90g)' },
          { item: 'Proteína (ver guia abaixo)', quantity: '2 pedaços médios' },
        ],
        note: '🍊 Pós-almoço: laranja OU tangerina (1 un.) OU abacaxi (1 fatia média, 120g)',
      },
      {
        id: 'lunch_2',
        label: 'Opção 2 — Raízes',
        ingredients: [
          { item: 'Salada', quantity: 'À vontade' },
          { item: 'Macaxeira, batata-doce OU inhame', quantity: '2 pedaços médios (130g) OU batata inglesa — 4 fatias (180g)' },
          { item: 'Feijão', quantity: '1 concha média (90g)' },
          { item: 'Proteína (ver guia abaixo)', quantity: '2 pedaços médios' },
        ],
        note: '🍊 Pós-almoço: laranja OU tangerina (1 un.) OU abacaxi (1 fatia média, 120g)',
      },
      {
        id: 'lunch_3',
        label: 'Opção 3 — Macarrão',
        ingredients: [
          { item: 'Salada', quantity: 'À vontade' },
          { item: 'Macarrão (branco ou integral, cozido)', quantity: '2 porções médias (120g)' },
          { item: 'Feijão', quantity: '1 concha média (90g)' },
          { item: 'Proteína (ver guia abaixo)', quantity: '2 pedaços médios' },
        ],
        note: '🍊 Pós-almoço: laranja OU tangerina (1 un.) OU abacaxi (1 fatia média, 120g)',
      },
    ],
    extras: [
      '🥩 Guia de proteínas do almoço:',
      '• Frango, porco ou carne bovina magra (patinho, coxão mole, músculo) → 2 pedaços médios (120g)',
      '• Peixe (filé) → 2 pedaços médios (150g)',
      '• Coxa de frango (sem pele) → 2 unidades',
      '• Sobrecoxa de frango → 4 unidades',
    ],
  },
  {
    id: 'afternoon_snack',
    label: 'Lanche da Tarde',
    emoji: '🌤️',
    tip: 'Não pule esse lanche! Ele ajuda a evitar picos de fome e mantém sua dieta equilibrada.',
    options: [
      {
        id: 'afternoon_snack_1',
        label: 'Opção 1 — Sanduíche Natural',
        ingredients: [
          { item: 'Pão de forma integral', quantity: '2 fatias' },
          { item: 'Patê de frango OU atum (2 col. sopa / 35g) OU sardinha em lata no azeite (2 peças)', quantity: '1 porção' },
          { item: 'Ricota cremosa light OU requeijão light', quantity: '1 col. sobremesa' },
          { item: 'Tomate, cenoura e temperos frescos', quantity: 'À vontade' },
        ],
      },
      {
        id: 'afternoon_snack_2',
        label: 'Opção 2 — Shake de Proteína',
        ingredients: [
          { item: 'Shake de proteína (Plant Power, Itambé Pró, Piracanjuba c/ whey, Natural Whey Verde Campo, DUX ou +MU)', quantity: '1 unidade' },
          { item: 'Fruta', quantity: '1 un. OU 1 fatia média (150g) [uva: 100g]' },
        ],
      },
      {
        id: 'afternoon_snack_3',
        label: 'Opção 3 — Iogurte com Granola',
        ingredients: [
          { item: 'Iogurte natural integral OU Molico OU Yo Bem Betânia', quantity: '1 unidade' },
          { item: 'Granola light (Tia Sônia, Mãe Terra, Jasmine ou Snackout)', quantity: '2 col. sopa (20g)' },
          { item: 'Fruta', quantity: '1 un. OU 1 fatia média (150g) [uva: 100g]' },
        ],
      },
      {
        id: 'afternoon_snack_4',
        label: 'Opção 4 — Torrada com Ovo',
        ingredients: [
          { item: 'Pão de forma integral', quantity: '2 fatias' },
          { item: 'Ovo', quantity: '1 unidade' },
          { item: 'Queijo coalho ou minas', quantity: '1 fatia pequena (25g)' },
        ],
      },
    ],
    extras: [
      '🏃 Pré-treino (dias de corrida): rapadura — 1 pedacinho (20g) OU banana — 1 unidade',
    ],
  },
  {
    id: 'dinner',
    label: 'Jantar',
    emoji: '🌙',
    options: [
      {
        id: 'dinner_1',
        label: 'Opção 1 — Omelete + Arroz',
        ingredients: [
          { item: 'Omelete: 2 ovos + frango desfiado / carne moída / atum + temperos', quantity: '2 ovos + 2 col. sopa (40g)' },
          { item: 'Salada', quantity: 'À vontade' },
          { item: 'Arroz', quantity: '5 col. sopa (100g)' },
        ],
      },
      {
        id: 'dinner_2',
        label: 'Opção 2 — Wrap / Massa de Pizza',
        ingredients: [
          { item: 'Rap 10 integral OU massa de pizza integral light OU pão de forma integral', quantity: '1 un. OU 2 fatias' },
          { item: 'Recheio: 2 ovos OU frango/carne moída (4 col. sopa / 80g) OU sardinha (2 peças)', quantity: '1 porção' },
          { item: 'Ricota cremosa light OU requeijão light (1 col. sobremesa) OU queijo coalho/minas (25g)', quantity: '1 porção' },
          { item: 'Salada', quantity: 'À vontade' },
          { item: 'Suco de fruta natural ou polpa (maracujá, morango, acerola, caju, cajá, goiaba)', quantity: '1 copo (250ml)' },
        ],
      },
      {
        id: 'dinner_3',
        label: 'Opção 3 — Crepioca',
        ingredients: [
          { item: 'Crepioca: 2 ovos + goma de tapioca (1,5 col. sopa / 20g) + sal e temperos', quantity: '1 porção' },
          { item: 'Recheio: frango / carne moída / atum (3 col. sopa / 50g) OU sardinha (2 peças)', quantity: '1 porção' },
          { item: 'Ricota cremosa light OU requeijão light', quantity: '1 col. sobremesa' },
          { item: 'Suco de fruta natural ou polpa', quantity: '1 copo (250ml)' },
        ],
      },
      {
        id: 'dinner_4',
        label: 'Opção 4 — Cuscuz',
        ingredients: [
          { item: 'Cuscuz (cozido)', quantity: '1 paulistinha (120g)' },
          { item: '2 ovos OU frango/carne moída/atum (4 col. sopa / 80g) OU sardinha (2 peças)', quantity: '1 porção' },
          { item: 'Queijo coalho ou minas', quantity: '1 fatia fina (20g)' },
          { item: 'Cenoura, tomate e temperos frescos', quantity: 'À vontade' },
        ],
      },
      {
        id: 'dinner_5',
        label: 'Opção 5 — Arroz + Proteína',
        ingredients: [
          { item: 'Salada', quantity: 'À vontade' },
          { item: 'Arroz (branco, integral ou parboilizado)', quantity: '1,5 escumadeira (100g)' },
          { item: 'Proteína (ver guia abaixo)', quantity: '2 pedaços médios' },
        ],
      },
      {
        id: 'dinner_6',
        label: 'Opção 6 — Macarrão + Proteína',
        ingredients: [
          { item: 'Macarrão (branco ou integral, cozido)', quantity: '2 porções (100g)' },
          { item: 'Proteína (ver guia abaixo)', quantity: '2 pedaços médios' },
          { item: 'Extrato de tomate sem açúcar (Fugini ou Predilecta) — opcional', quantity: 'A gosto' },
          { item: 'Salada', quantity: 'À vontade' },
        ],
      },
    ],
    extras: [
      '🥩 Guia de proteínas do jantar:',
      '• Frango, porco ou carne bovina magra → 2 pedaços médios (100g)',
      '• Peixe (filé) → 2 pedaços médios (130g)',
      '• Coxa de frango (sem pele) → 2 unidades',
      '• Sobrecoxa de frango → 4 unidades',
      '• Sardinha (lata no azeite) → 2 peças',
    ],
  },
];

export const RECIPES: Recipe[] = [
  {
    id: 'banana_muffin',
    name: 'Bolinho de Banana',
    emoji: '🍌',
    ingredients: [
      '1 ovo',
      '1 banana madura',
      '1 col. sopa de farinha de aveia',
      '1 col. sobremesa de farinha de coco',
      'Canela ou cacau em pó a gosto',
      '1 col. café de fermento em pó',
    ],
    instructions:
      'Amasse a banana com um garfo até virar um purê. Adicione todos os outros ingredientes e misture bem. Despeje em uma caneca e leve ao micro-ondas por 2–3 minutos. Ou asse em forminhas de silicone (teste do palito).',
  },
  {
    id: 'banana_pancake',
    name: 'Paqueca de Banana',
    emoji: '🥞',
    ingredients: [
      '1 ovo',
      '1 banana madura',
      '1 col. sopa de farinha de aveia',
      '1 col. sobremesa de farinha de coco',
      'Canela a gosto',
      'Uma pitada de fermento em pó',
    ],
    instructions:
      'Amasse a banana e misture todos os ingredientes até obter uma massa homogênea. Aqueça uma frigideira antiaderente com um fio de azeite. Despeje a massa e doure os dois lados. Sirva imediatamente.',
  },
  {
    id: 'crepioca',
    name: 'Crepioca',
    emoji: '🫓',
    ingredients: [
      '1 ovo',
      '1 col. sopa de goma de tapioca',
      '1 col. sopa rasa de farinha de aveia',
      'Sal a gosto',
      'Temperos naturais a gosto',
      'Recheio: queijo coalho/minas, frango, carne moída, atum ou sardinha',
    ],
    instructions:
      'Misture todos os ingredientes com um garfo. Cozinhe em frigideira antiaderente seca pré-aquecida, virando uma vez. Adicione o recheio após cozinhar.',
  },
  {
    id: 'healthy_pastry',
    name: 'Esfirra Saudável',
    emoji: '🫔',
    ingredients: [
      '1 batata-doce média cozida (sem sal)',
      '2,5 col. sopa de farinha de arroz integral',
      '1 col. sopa rasa de manteiga de qualidade',
      '1 ovo',
      '1 col. sopa de queijo ralado',
      'Sal e temperos a gosto',
    ],
    instructions:
      'Amasse a batata-doce e misture com os demais ingredientes até uma massa homogênea. Abra círculos, adicione o recheio desejado e feche as bordas. Pincele com gema de ovo. Asse a 180–200°C por 25 minutos.',
  },
  {
    id: 'tomato_sauce',
    name: 'Molho de Tomate Caseiro',
    emoji: '🍅',
    ingredients: [
      '3 tomates médios',
      '2 dentes de alho',
      '1 col. sopa de azeite extra-virgem',
      '½ cebola (picada)',
      '1 cenoura pequena',
      'Manjericão fresco ou seco',
      'Sal a gosto',
    ],
    instructions:
      'Refogue cebola, alho e cenoura ralada no azeite. Adicione os tomates picados e cozinhe em fogo médio, mexendo às vezes. Bata no liquidificador se quiser. Guarde em pote de vidro: geladeira até 5 dias ou congelado por 60 dias.',
  },
  {
    id: 'fit_burger',
    name: 'Hambúrguer Fit',
    emoji: '🍔',
    ingredients: [
      '250g de carne bovina magra moída',
      '1 cenoura pequena ralada fino',
      '4 col. sopa cheias de farelo de aveia',
      'Cebola, alho, pimenta-do-reino e temperos frescos',
      '1 ovo batido',
    ],
    instructions:
      'Misture todos os ingredientes, modele os hambúrgueres. Asse a 200°C ou grelhe na chapa sem óleo. Pode ser congelado.',
  },
  {
    id: 'vegetable_soup',
    name: 'Sopa de Legumes',
    emoji: '🥣',
    ingredients: [
      '½ abobrinha',
      '½ cenoura',
      '1 batata-doce pequena',
      '½ berinjela pequena',
      '1 pedaço pequeno de abóbora',
      '1 xuxu médio',
      'Temperos a gosto',
      '5 col. sopa de carne moída ou frango desfiado',
    ],
    instructions:
      'Corte os legumes em cubos. Refogue com azeite, cebola, alho e temperos. Adicione água e cozinhe até amolecer.',
  },
  {
    id: 'pate',
    name: 'Patê de Frango ou Atum',
    emoji: '🍗',
    ingredients: [
      '200g de frango cozido e desfiado OU 1 lata de atum no azeite (escorrido completamente)',
      '3 col. sopa de cenoura ralada',
      '½ pote de ricota cremosa light OU 2 col. sopa de requeijão light',
      'Temperos a gosto',
    ],
    instructions: 'Misture todos os ingredientes. Sirva na hora ou guarde na geladeira.',
  },
  {
    id: 'omelet',
    name: 'Omelete',
    emoji: '🍳',
    ingredients: [
      '2 ovos',
      '2 col. sopa de carne moída / frango desfiado / atum OU 1 pedaço de sardinha',
      '1 pedaço pequeno de queijo coalho ou minas',
      '1 col. sopa de beterraba e cenoura raladas',
      'Temperos a gosto',
      'Uma pitada de fermento em pó',
    ],
    instructions:
      'Bata os ovos e adicione os outros ingredientes (o fermento por último). Cozinhe em frigideira untada com azeite, dourando os dois lados.',
  },
  {
    id: 'green_juice',
    name: 'Suco Verde',
    emoji: '🥤',
    ingredients: [
      '1 folha de couve',
      '1 pedaço pequeno de fruta (abacaxi, kiwi, maçã, caju, pera, melão ou laranja — pera/maçã com casca)',
      '1 pedacinho de gengibre',
      'Hortelã ou manjericão fresco',
      'Suco de 1 limão',
    ],
    instructions: 'Bata tudo no liquidificador. Não coe nem adoce. Tome na hora.',
  },
  {
    id: 'tapioca_cheese_bread',
    name: 'Pão de Queijo de Tapioca',
    emoji: '🧀',
    ingredients: [
      '1 ovo',
      '5 col. sopa de goma de tapioca',
      '1 col. sopa de requeijão light ou ricota cremosa',
      '3 col. sopa de queijo coalho ou minas ralado',
      'Uma pitada de sal',
    ],
    instructions:
      'Misture tudo com um garfo. Despeje em forminhas de silicone. Asse a 200°C até dourar.',
  },
];

export const SHOPPING_CATEGORIES: ShoppingCategory[] = [
  {
    id: 'grains',
    label: 'Grãos e Carboidratos',
    emoji: '🌾',
    items: [
      'Arroz branco ou parboilizado',
      'Arroz integral 7 grãos (Raris, Camil, Tio João)',
      'Goma de tapioca',
      'Flocos de milho para cuscuz',
      'Pão de forma integral (Plus Vita, Aipi, Speciale ou Artesano integral)',
      'Macarrão integral (Vilma, Excelsa)',
      'Rap 10 integral / Tortioca',
      'Torradas integrais (Magic Toast, Bauducco multigrain)',
    ],
  },
  {
    id: 'proteins',
    label: 'Proteínas',
    emoji: '🥩',
    items: [
      'Ovos',
      'Peito de frango',
      'Peixe (filé ou posta)',
      'Carne bovina magra moída (patinho ou coxão mole)',
      'Atum e sardinha (lata no azeite)',
    ],
  },
  {
    id: 'dairy',
    label: 'Laticínios e Queijos',
    emoji: '🧀',
    items: [
      'Iogurte natural integral',
      'Iogurte: Molico, Verde Campo lacfree, Sabor e Vida Zero, Belle Light',
      'Queijo coalho ou minas',
      'Ricota cremosa light (Tirolez ou Verde Campo)',
      'Requeijão light (Sabor e Vida, Verde Campo, Nestlé, Danúbio Zero)',
      'Manteiga de qualidade (Itacolomy, Jaguaribe, Maranguape, Itambé ou ghee)',
      'Leite integral (pó: Ninho ou Itambé / líquido: integral, desnatado ou semidesnatado)',
    ],
  },
  {
    id: 'fruits',
    label: 'Frutas',
    emoji: '🍎',
    items: [
      'Banana',
      'Mamão',
      'Melão',
      'Goiaba',
      'Limão',
      'Abacate',
      'Pera',
      'Kiwi',
      'Ameixa fresca',
      'Uva',
      'Laranja',
      'Polpa de fruta sem açúcar (Nossa Fruta / Petruz)',
    ],
  },
  {
    id: 'vegetables',
    label: 'Vegetais e Raízes',
    emoji: '🥦',
    items: [
      'Abobrinha',
      'Berinjela',
      'Abóbora (jerimum)',
      'Brócolis',
      'Couve-flor',
      'Cenoura',
      'Beterraba',
      'Alface',
      'Tomate',
      'Xuxu (chuchu)',
      'Pimentão',
      'Batata-doce',
      'Macaxeira (aipim/mandioca)',
      'Inhame',
      'Batata inglesa',
    ],
  },
  {
    id: 'fats',
    label: 'Gorduras e Óleos',
    emoji: '🫒',
    items: [
      'Azeite extra-virgem (Andorinha)',
      'Castanha de caju natural sem sal',
      'Castanha-do-pará natural',
      'Pasta de amendoim sem açúcar (Mandubim, Power One)',
      'Chocolate amargo 70% ou 85% (Cacau Show, Ama, Only 4, Talento Nibs)',
    ],
  },
  {
    id: 'pantry',
    label: 'Despensa',
    emoji: '🫙',
    items: [
      'Aveia em flocos / farelo de aveia',
      'Granola light (Snackout, Kobber, Jasmine, Mãe Terra, Tia Sônia Light, Vitallin)',
      'Chia',
      'Sementes de abóbora',
      'Sementes de girassol',
      'Gergelim',
      'Linhaça dourada',
      'Canela em pó',
      'Extrato de tomate sem açúcar (Predilecta) ou molho de tomate (Paganini)',
      'Extrato de própolis verde alcoólico (Apis Flora ou Néctar)',
    ],
  },
  {
    id: 'spices',
    label: 'Temperos e Condimentos',
    emoji: '🌿',
    items: [
      'Orégano',
      'Salsinha',
      'Manjericão',
      'Alecrim',
      'Chimichurri',
      'Pimenta-do-reino',
      'Açafrão (cúrcuma)',
      'Páprica',
      'Gengibre em pó',
      'Alho',
      'Cebola',
      'Temperos frescos em geral',
    ],
  },
];

export const TIPS: Tip[] = [
  {
    id: 'flavored_water',
    title: 'Água Saborizada',
    emoji: '💧',
    content: 'Hidratação com sabor e benefícios! Uma forma deliciosa de beber mais água ao longo do dia.',
    recipe: {
      ingredients: [
        '1 litro de água',
        '1 limão siciliano com casca (fatiado) OU casca de abacaxi limpa',
        'Folhas de hortelã fresca',
        '1 pedaço médio de gengibre descascado (fatiado)',
      ],
      instructions:
        'Coloque o gengibre em uma garrafinha ou pote de vidro. Adicione as fatias de limão. Complete com água. Adicione a hortelã. Deixe descansar pelo menos 1 hora. Adicione gelo e sirva.',
    },
  },
  {
    id: 'daytime_teas',
    title: 'Chás Diurnos',
    emoji: '🍵',
    content: 'Chás para tomar ao longo do dia — desintoxicantes, diuréticos e antioxidantes.',
    items: ['Hibisco', 'Dente-de-leão', 'Chá verde', 'Cavalinha', 'Erva-mate'],
  },
  {
    id: 'sleep_teas',
    title: 'Chá para Dormir',
    emoji: '🌙',
    content: 'Mistura relaxante para melhorar a qualidade do sono. Prepare 1 hora antes de dormir.',
    items: ['Camomila', 'Cidreira', 'Mulungu', 'Hortelã', 'Melissa', 'Erva-doce'],
    recipe: {
      ingredients: [
        'Camomila',
        'Cidreira (melissa)',
        'Mulungu',
        'Erva-doce',
      ],
      instructions:
        'Use 1 col. sobremesa de cada erva por 200ml de água quente (85°C). Deixe em infusão por 10 minutos. Coe com coador fino ou filtro de papel. Dica: kiwi melhora a qualidade do sono — inclua como lanchinho antes de dormir!',
    },
  },
  {
    id: 'preworkout',
    title: 'Pré-Treino (Dias de Corrida)',
    emoji: '🏃',
    content: 'Antes da corrida, consuma uma fonte rápida de energia para ter mais disposição e rendimento.',
    items: [
      'Rapadura — 1 pedacinho (20g)',
      'OU Banana — 1 unidade',
    ],
  },
  {
    id: 'general_tips',
    title: 'Dicas Gerais',
    emoji: '✅',
    content: 'Hábitos simples que fazem grande diferença na sua alimentação.',
    items: [
      'Beba água ao longo de todo o dia — sempre com sua garrafinha!',
      'Não pule refeições, especialmente o lanche da tarde.',
      'Prefira alimentos naturais e minimamente processados.',
      'Use temperos naturais e ervas frescas para dar sabor.',
      'Inclua salada em todos os almoços e jantares (à vontade).',
      'Kiwi antes de dormir melhora a qualidade do sono.',
      'Nos dias de corrida, lembre do pré-treino (banana ou rapadura).',
    ],
  },
];
