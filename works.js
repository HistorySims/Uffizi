// Each work is one self-contained object. Add a new painting by appending a block here.
// stops: cx/cy = point (0-1). box{x,y,w,h} = reveal+tap rectangle (0-1). Tune via the grown-ups tool.
window.WORKS = [
  {
    id:"venus", title:"The Birth of Venus", artist:"Sandro Botticelli",
    card:"A sea breeze, a shell, and a goddess arriving on shore.",
    subtitle:"Let's slow down, then go exploring.",
    alt:"The Birth of Venus by Sandro Botticelli",
    intro:"You looked at the whole painting. Now let's find some things hiding inside it.",
    src:"images/venus.jpg", tiles:"images/venus.jpg",
    prompts:[
      "Just look. You don't have to say anything yet.",
      "Where is she? What is she standing on?",
      "Look at her eyes. What do you think she's dreaming about?",
      "Is anything falling from the sky? Who is blowing the wind?",
      "How does this painting make you feel?"
    ],
    stops:[
      {find:"Can you find Venus's face?", cx:0.549, cy:0.155, hit:0.16, z:2, r:0.22, title:"Her dreaming eyes", body:"Here she is — Venus, the goddess of love. Look at her eyes, gazing far, far away, like someone just waking from a dream. This is the very first moment she has ever been in the world."},
      {find:"Can you find the giant seashell she stands on?", cx:0.395, cy:0.8, hit:0.17, z:2.2, r:0.26, title:"A seashell cradle", body:"She floated to shore standing on a giant shell — her cradle and her little boat. Long ago, a shell like this meant something new and precious had been born out of the sea."},
      {find:"Can you find the two flying friends blowing the wind?", cx:0.356, cy:0.2, hit:0.19, z:2.1, r:0.3, title:"The breath that carries her", body:"These two are the wind. The West Wind holds his flower-wife close, and together they breathe out a soft spring breeze — puff out your cheeks like them! Their gentle breath carries Venus safely to land."},
      {find:"Can you find the pink roses falling through the air?", cx:0.423, cy:0.347, hit:0.16, z:2.3, r:0.22, title:"The very first roses", body:"Watch the flowers fall. The old story says these were the first roses that ever bloomed in the whole world — they opened the moment Venus was born, and the wind sends them tumbling after her."},
      {find:"Can you find her long, flowing hair?", cx:0.622, cy:0.32, hit:0.16, z:2.2, r:0.24, title:"Rivers of gold", body:"See how her hair flows on and on, like rivers of gold in the wind? The painter brushed it with real gold so it would shine — as if Venus glows with a light from somewhere deep inside."},
      {find:"Can you find the lady holding a cloak full of flowers?", cx:0.784, cy:0.403, hit:0.19, z:2, r:0.3, title:"Spring comes to greet her", body:"This is Spring herself, hurrying to meet Venus. Her dress is sprinkled with tiny flowers, and she holds out a soft cloak — covered in blossoms — to wrap around the new goddess and keep her warm."}
    ],
    done:[
      "Here's a secret. This painting isn't really about a lady in the sea. Long ago, people believed Venus <em>was</em> beauty itself — and this is the moment beauty first arrives in the whole world, carried on the wind, with the very first flowers blooming to welcome her.",
      "A painter named Sandro Botticelli made her stand just like the smooth stone goddesses carved thousands of years ago, and brushed her with real gold so it would shine. He painted it in Italy more than 500 years ago.",
      "It lives in a museum called the Uffizi, in a city named Florence — and you're going to stand in front of the real one very soon. When you do, find her dreaming eyes, the wind's puffed-out cheeks, the falling roses, and her rivers of golden hair."
    ]
  },
  {
    id:"primavera", title:"Primavera", artist:"Sandro Botticelli",
    card:"A warm, drifting grove of flowers, dancers, and wind.",
    subtitle:"A warm, drifting garden. Move through it slowly and let each figure show you what is waking.",
    alt:"Primavera by Sandro Botticelli",
    intro:"You let the whole garden settle around you. Now move slowly from figure to figure — each one is part of what is happening here.",
    src:"images/primavera.jpg", tiles:"images/primavera.jpg",
    prompts:[
      "Let your eyes drift slowly into the grove. Feel the cool green shade settle around you.",
      "Breathe in. Imagine orange blossom, crushed grass, and the sweetness of ripe fruit in the air.",
      "Feel the warmth moving through the trees — a soft breeze, bare feet on damp earth, silk against skin.",
      "Listen. Somewhere there is dancing, a rush of wind, the hush of petals falling.",
      "Something is waking here, all at once. Hold the feeling. What season is breathing through this garden?"
    ],
    stops:[
      {find:"Right at the center of the garden, beneath the arch of leaves, one figure stands perfectly still.", cx:0.534, cy:0.318, hit:0.13, z:2, r:0.2, title:"Venus — the heart of the garden", body:"This is Venus, the goddess of love. She stands so still that the whole grove seems to turn gently around her. She is not in a hurry; love never is. She presides over this place, and wherever she is, life softens, opens, and begins to grow."},
      {find:"Look up into the branches above her head — something small is hovering there.", cx:0.517, cy:0.029, hit:0.12, z:2.4, r:0.18, title:"Cupid — blind, glowing love", body:"High above Venus floats her son, Cupid. He is blindfolded, yet he aims a burning arrow into the garden below. Love arrives without looking and without warning — a sudden warmth that lands where it will and makes the heart bloom like everything else here."},
      {find:"To the left, three figures dance with their hands woven lightly together.", cx:0.3, cy:0.327, hit:0.17, z:2, r:0.26, title:"The Three Graces — beauty given and returned", body:"These three dancers are the Graces, companions of Venus. Their thin gowns drift like mist and their fingers barely touch, passing something between them. They stand for the gentle gifts we give, receive, and give again — beauty and kindness flowing in a circle that never stops."},
      {find:"At the far left edge, someone reaches a wand up toward the last grey clouds.", cx:0.109, cy:0.381, hit:0.14, z:2.1, r:0.22, title:"Mercury — keeper of clear skies", body:"This is Mercury, messenger of the gods. With his wand he stirs away the last clouds so no storm can reach the grove. He is the guardian here, holding the sky open so this warm season can stay. Spring is being protected, kept safe to last."},
      {find:"A cold gust is sweeping in from the right, where a blue figure rushes into the garden.", cx:0.817, cy:0.317, hit:0.15, z:2.1, r:0.23, title:"Zephyr — the warm west wind", body:"This blue, breathless figure is Zephyr, the wind of spring. He blows in from the edge of the world and reaches for the nymph fleeing before him. His breath is the first warm gust that wakes the cold earth — wild, alive, and impossible to hold back."},
      {find:"On the right, follow the falling petals to the woman whose dress overflows with flowers.", cx:0.683, cy:0.511, hit:0.16, z:2, r:0.24, title:"Flora — spring made visible", body:"Touched by Zephyr's warm breath, the fleeing nymph is changing — becoming Flora, the goddess of flowers. She steps forward scattering roses from her gown, and wherever she walks the ground blooms. She is spring itself, made into someone you can see."}
    ],
    done:[
      "Now the whole garden makes sense. This painting is called <em>Primavera</em> — the Italian word for <em>Spring</em>. Every figure you found is a different part of one season waking up: love at the calm center, the warm wind on one side, flowers spilling out on the other.",
      "Sandro Botticelli gathered old myths into a single warm afternoon. Zephyr's breath turns a fleeing nymph into Flora, who scatters blossoms; Venus presides while Cupid's arrow sparks love; the Three Graces dance and Mercury keeps the sky clear. Together they tell how spring arrives — wind, then love, then flowers everywhere.",
      "It hangs in the Uffizi in Florence, in the same rooms as <em>The Birth of Venus</em>. When you stand before the real one, move slowly again: find Venus's calm face, the dancing hands of the Graces, the blue wind rushing in, and the roses falling from Flora's dress — and feel the whole garden breathing spring."
    ]
  },
  {
    id:"fruit", title:"Fruit and Insects", artist:"Rachel Ruysch",
    card:"A quiet still life that starts to move when you look closely.",
    subtitle:"A slow mystery: is anything truly still?",
    alt:"Fruit and Insects by Rachel Ruysch",
    intro:"You looked at the whole painting. Now let's hunt for the little creatures hiding inside it.",
    src:"images/fruit.jpg", tiles:"images/fruit.jpg",
    prompts:[
      "First, let it be quiet. Just look at the fruit and the dark leaves.",
      "Imagine the smell here. Is it sweet, damp, sharp, or earthy?",
      "What sound would this little world make if you leaned close?",
      "Is the air cool, warm, heavy, or still?",
      "Now look again. I wonder if anything here is truly still."
    ],
    stops:[
      {find:"I spy a tiny fly that has landed on a ripe peach.", cx:0.478, cy:0.665, box:{x:0.42, y:0.582, w:0.122, h:0.16}, title:"The fly", body:"Look at the fly's feet — notice the tiny shadow Ruysch paints just beneath them. That shadow is what makes the fly sit on the peach instead of floating, and it tricks the eye into reading it as real and close. A painted fly was a way to show off that illusion, and a quiet symbol too: where fruit is this ripe, decay has already arrived."},
      {find:"I spy a butterfly with bright open wings near the bottom.", cx:0.436, cy:0.903, box:{x:0.375, y:0.806, w:0.129, h:0.169}, title:"The butterfly", body:"Look at the wings — notice how Ruysch builds their glow from thin, see-through layers of paint, so light seems to pass through them like stained glass. Setting that warm red against the near-black background makes the colour jump forward and pulls your eye across the canvas. The butterfly carries a meaning as well: reborn from a dull chrysalis, it long stood for the soul and for transformation."},
      {find:"I spy a leaf with little holes nibbled right through it.", cx:0.284, cy:0.587, box:{x:0.129, y:0.421, w:0.2, h:0.262}, title:"The nibbled leaf", body:"Look at the holes — notice how Ruysch lets the dark background show straight through the chewed gaps and browns the torn edges. By painting the damage instead of a perfect leaf, she tells you this little world is being eaten and is already passing. The flaw is the technique: the leaf reads as true precisely because it isn't flawless."},
      {find:"I spy a little nest of pale, speckled eggs in the shadows.", cx:0.252, cy:0.838, box:{x:0.153, y:0.712, w:0.199, h:0.261}, title:"The bird's nest", body:"Look at the eggs — notice how Ruysch keeps them in soft shadow with the faintest speckles, so they whisper while the ripe fruit above shouts in the light. Placing new life down in the dark and ripe decay up in the light is deliberate: birth and ending share one picture, the whole cycle gathered in a single corner."},
      {find:"I spy a lizard creeping along the bottom edge.", cx:0.586, cy:0.848, box:{x:0.46, y:0.79, w:0.22, h:0.16}, title:"The lizard", body:"Look at the pose — notice the arched back and lifted foot caught mid-step, with a crisp highlight along the spine that makes the body feel round and alive. Ruysch uses that diagonal of movement to slip real action into a 'still' life. The lizard is hunting the very insects we just found, turning the tabletop into a tiny stage."},
      {find:"I spy a beetle climbing among the leaves near the top.", cx:0.805, cy:0.233, box:{x:0.724, y:0.117, w:0.154, h:0.202}, title:"The beetle", body:"Look at the beetle's back — notice the small, sharp points of white Ruysch sets along its hard wing-cases. A glossy shell catches light in tiny, bright pinpricks, and placing those exactly is what tells your eye the surface is smooth and polished, not soft. Set high among the drying leaves and wheat, it is one more small life threaded quietly through the scene."}
    ],
    done:[
      "So — was that really a <em>still</em> life? We found a fly feeding, a leaf with nibbled holes, a lizard hunting, a butterfly resting, and a nest of eggs waiting in the dark.",
      "A peach becomes softer. An egg becomes a bird. A caterpillar becomes a butterfly. Nothing here has finished becoming what it will be.",
      "Maybe a still life is not still at all. It is a slow life — and the longer and more carefully you look, the more it begins to move."
    ]
  },
  {
    id:"perseus", title:"Perseus Frees Andromeda", artist:"Piero di Cosimo",
    card:"A flying hero, a sea dragon, and a rescue by the shore.",
    subtitle:"A hero, a chained princess, and a sea dragon.",
    alt:"Perseus Freeing Andromeda by Piero di Cosimo",
    intro:"You looked at the whole painting. Now let's find the people and the monster in this rescue story.",
    src:"images/perseus.jpg", tiles:"images/perseus.jpg",
    prompts:[
      "Just look. Something big and frightening is happening by the sea — can you feel it?",
      "Where is the water? What strange creature is rising up out of it?",
      "Look for someone in danger. Now look for someone rushing in to help.",
      "Are all the people feeling the same thing? Find someone afraid, and someone full of hope.",
      "How does this painting make you feel — scared, excited, or a little of both?"
    ],
    stops:[
      {find:"Can you find the sea dragon rising out of the water?", cx:0.405, cy:0.52, box:{x:0.27, y:0.38, w:0.31, h:0.31}, title:"The sea monster", body:"Here is the monster — a sea dragon sent to eat the princess. Piero invented his own beast: the snout of a wild pig, the body of a great fish, and a long curling tail. It looks fierce and a little sad at once, like a creature that does not quite belong anywhere."},
      {find:"Can you find the hero standing right on the monster's back?", cx:0.435, cy:0.33, box:{x:0.37, y:0.2, w:0.14, h:0.28}, title:"Perseus the hero", body:"That brave young man balancing on the monster is Perseus. He has leapt straight onto its back and raises his curved sword to strike. He is not fighting from a safe distance — he is right on top of the danger, which is exactly what makes him a hero."},
      {find:"Can you find the same hero a second time, up in the sky?", cx:0.77, cy:0.11, box:{x:0.7, y:0.02, w:0.17, h:0.2}, title:"The hero, twice", body:"Look up! There is Perseus again, flying in on winged sandals. The painter shows him twice in one picture — first swooping down from the sky, then landing on the monster — so we can watch the whole rescue happen at once, like two moments in a single breath."},
      {find:"Can you find the girl tied to the rock?", cx:0.19, cy:0.43, box:{x:0.12, y:0.3, w:0.14, h:0.3}, title:"Andromeda", body:"This is Princess Andromeda, chained to a rock and left for the monster. See how still and pale she stands against the dark cliff. She is the reason Perseus came — and in a moment, she will be free."},
      {find:"Can you find the people playing music?", cx:0.64, cy:0.76, box:{x:0.55, y:0.62, w:0.21, h:0.3}, title:"The music begins", body:"Over on the right, people have already begun to play strange, beautiful instruments. They are so sure Perseus will win that they start the celebration before the fight is even over. Music is how the painter tells us this story has a happy ending."},
      {find:"Can you find the people who are too scared to watch?", cx:0.11, cy:0.64, box:{x:0.01, y:0.5, w:0.21, h:0.34}, title:"The watching crowd", body:"On the shore, Andromeda's family huddle together. Some point, some cover their faces, some can hardly look. Piero fills the edges with all these feelings — fear, hope, and wonder — so the whole beach seems to hold its breath along with us."}
    ],
    done:[
      "And he does it. Perseus saves Andromeda, the monster falls, and the waiting music turns into a real celebration. A scary story becomes a happy one, right in front of our eyes.",
      "A painter named Piero di Cosimo made this more than 500 years ago. He loved odd and wonderful animals, and he invented this sea dragon out of his own imagination — which is why it looks like nothing you have ever seen.",
      "It lives in the Uffizi in Florence. When you stand before the real one, find the monster's curling tail, the hero up in the sky and again on the monster's back, the chained princess, and the people who could not stop themselves from making music."
    ]
  },
  {
    id:"annunciation", title:"The Annunciation", artist:"Leonardo da Vinci",
    card:"An angel arrives in a garden with the most important news in the world.",
    subtitle:"Two faces, one message, a meadow full of secrets.",
    alt:"The Annunciation by Leonardo da Vinci",
    intro:"You've looked at the two people and their expressions. Now let's go closer and find what's hiding in this painting.",
    src:"images/annunciation.jpg", tiles:"images/annunciation.jpg",
    prompts:[
      "Just look. Two people are in a garden. Something has just happened between them.",
      "Find their faces. Before you know anything about this painting, what do you think each of them is feeling right now?",
      "One is kneeling, one is sitting. What do you think that tells you?",
      "Now look down at the ground between them. What is growing there?",
      "Look far behind them, past the dark trees. What kind of place do you see way in the distance?"
    ],
    stops:[
      {find:"Can you find the wings?", cx:0.224, cy:0.304, box:{x:0.113, y:0.119, w:0.190, h:0.388}, title:"Wings no painter had seen before", body:"Most painted angels have soft, pretty wings that could never really work. Leonardo studied real birds first. Then he painted real feathers: the thick brown-and-gold kind you see on an eagle, growing in rows just the way they actually do. These wings look like they could truly lift something."},
      {find:"Can you find the angel's face?", cx:0.299, cy:0.373, box:{x:0.245, y:0.242, w:0.140, h:0.286}, title:"A messenger who is certain", body:"Gabriel kneels very still. His face is not big or dramatic. He looks focused and calm, like someone who knows exactly what they are doing. He has come all the way from heaven to say one thing, and he is completely sure of it."},
      {find:"Can you find Mary's face?", cx:0.724, cy:0.275, box:{x:0.666, y:0.143, w:0.107, h:0.219}, title:"Ready for whatever comes next", body:"Most people would be very scared if a glowing angel appeared in front of them. But Mary's face is calm. Her eyes are steady. She raises her hand like she is in the middle of a conversation, not running away. She seems ready for whatever is going to come next."},
      {find:"Can you find the white flower the angel is holding?", cx:0.322, cy:0.394, box:{x:0.229, y:0.311, w:0.172, h:0.351}, title:"A flower that carries a message", body:"Gabriel holds a white lily. In paintings made around this time, that one flower always carried the same meaning: a message straight from heaven. So the angel is bringing her the news two ways at once. With his words, and with the flower."},
      {find:"Can you find the meadow of wildflowers in the foreground?", cx:0.432, cy:0.664, box:{x:0.030, y:0.550, w:0.600, h:0.240}, title:"A field guide disguised as a painting", body:"Leonardo was also a scientist. Every flower in this meadow is a real one he would have studied outside: iris, dandelion, daisy, columbine. He painted each one exactly right, like a scientist making drawings in a notebook. Painters from this time cared just as much about getting a daisy right as they cared about getting an angel right."},
      {find:"Can you find the mountains far away in the distance?", cx:0.489, cy:0.287, box:{x:0.419, y:0.145, w:0.126, h:0.257}, title:"A landscape dissolving into haze", body:"Through the gap in the trees, mountains blur into pale mist and a river bends toward a distant harbor. Leonardo invented a way of painting where things far away fade into air, just the way they look to your real eyes. He called it sfumato. He was about twenty years old when he painted this."}
    ],
    done:[
      "Here is the story. An angel named Gabriel has come to tell a young woman named Mary that she will be the mother of Jesus. Painters across the Renaissance painted this moment again and again. This is Leonardo's version, made when he was barely a teenager in Florence.",
      "Now look at their faces again, knowing what you know. Gabriel makes sense: he came straight from God and he is sure. Mary is harder to explain. She has just heard something that will change everything. But she raises her hand not in fear. More like she is saying: yes. As if some quiet part of her already knew.",
      "Leonardo da Vinci painted this around 1472. It lives in the Uffizi in Florence. When you stand in front of the real one, look at the wings first. Everyone does. Then look at their faces. Then look all the way down at the tiny wildflowers blooming in the grass."
    ]
  }
];
