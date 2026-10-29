// Museums shown on the home screen. Each work below names its museum by id.
window.MUSEUMS = [
  {
    id:"uffizi", name:"The Uffizi", city:"Florence, Italy",
    card:"Goddesses, angels, heroes, and a garden full of spring.",
    intro:"Paintings made in Italy more than 500 years ago. Pick one to look at slowly.",
    cover:"images/venus.jpg"
  },
  {
    id:"whitney", name:"The Whitney", city:"New York",
    card:"A brass band at night, a sleepy street, a counter full of pie, and a glowing bridge.",
    intro:"American art from the last hundred years. Follow the numbers for the whole visit, from the street band to the bridge, or pick any one.",
    cover:"images/early-sunday-morning.jpg"
  }
];

// Each work is one self-contained object. Add a new painting by appending a block here.
// stops: cx/cy = point (0-1). box{x,y,w,h} = reveal+tap rectangle (0-1). Tune via the grown-ups tool.
// Optional per stop: areas/exclude = exact tap region (tap anywhere inside areas, outside exclude), hint = custom hint wording.
// Activity stops (instead of tap-to-find), zoomed to box:
//   paint:{look, check, brushes, brush, colors, say, mirror?, wobble?} = paint along. look = how strokes look
//     (wax, oil, frosting, gold, wire, soft, glow, streak); check = how the painting is judged
//     (any, shortBroad, broadSwoosh, thinLong, colorUsed, oneLine, sameSlant, smoothLong); say = words for each result.
//   stickers:{set, ground, area, real, done, word, start, outside, depth?, flip?, jitter?} = place stickers, then slide a
//     divider to compare with the real painting (there's no right way). set = the tray (each sticker's size w,h in painting
//     pixels, its anchor ax,ay = the point that sits where you tap, spin = how much it can tilt, y = where it was cut from);
//     ground = an image drawn over the painting first; area = where stickers can go; depth = {y0,s0,y1,s1}, sizes at two
//     heights for things that shrink with distance.
//   light:{hopper, horizon, objects, walls, patches, relight} = drag the sun. objects stand on the ground and cast
//     shadows along it (len = painted shadow length at the artist's sun, hopper in degrees; back = how much a long
//     shadow drifts up; offscreen = standing outside the painting); walls = flat signs sticking straight out of the
//     wall (dx, dy = where the painted shadow's far edge is at the artist's sun). The painted shadows are hidden:
//     relight brightens a shadow's shape back to the lit color; patches cover it with nearby clean background
//     (copied from sx,sy; a narrower source width sw is repeated across).
// Optional: role = its part in the visit (shown on the card), kind = "sculpture" etc. (default "painting"),
// onView:false = not on display right now (card is darkened; still playable).
window.WORKS = [
  {
    id:"venus", museum:"uffizi", title:"The Birth of Venus", artist:"Sandro Botticelli",
    card:"A sea breeze, a shell, and a goddess arriving on shore.",
    subtitle:"Let's slow down, then go exploring.",
    alt:"The Birth of Venus by Sandro Botticelli",
    intro:"You looked at the whole painting. Now let's find some things hiding inside it.",
    src:"images/venus.jpg", tiles:"images/venus.jpg",
    music:"audio/la-mer.mp3", musicStart:75,
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
      {find:"Can you find the pink roses falling through the air?", cx:0.423, cy:0.347, hit:0.16, z:2.3, r:0.22, areas:[{x:0.33, y:0.24, w:0.125, h:0.33},{x:0.261, y:0.35, w:0.05, h:0.07},{x:0.269, y:0.505, w:0.05, h:0.07},{x:0.058, y:0.000, w:0.05, h:0.07},{x:0.075, y:0.015, w:0.05, h:0.07},{x:0.005, y:0.025, w:0.05, h:0.07},{x:0.015, y:0.085, w:0.05, h:0.07},{x:0.092, y:0.145, w:0.05, h:0.07},{x:0.139, y:0.102, w:0.05, h:0.07},{x:0.200, y:0.049, w:0.05, h:0.07},{x:0.245, y:0.071, w:0.05, h:0.07},{x:0.228, y:0.142, w:0.05, h:0.07},{x:0.219, y:0.205, w:0.05, h:0.07},{x:0.045, y:0.205, w:0.05, h:0.07},{x:0.015, y:0.160, w:0.05, h:0.07},{x:0.125, y:0.248, w:0.05, h:0.07},{x:0.028, y:0.295, w:0.05, h:0.07},{x:0.114, y:0.355, w:0.05, h:0.07},{x:0.105, y:0.385, w:0.05, h:0.07},{x:0.008, y:0.365, w:0.05, h:0.07},{x:0.203, y:0.435, w:0.05, h:0.07},{x:0.108, y:0.575, w:0.05, h:0.07},{x:0.000, y:0.650, w:0.05, h:0.07}], focus:{x:0.31, y:0.24, w:0.15, h:0.20}, hint:"all around the wind, floating toward Venus", title:"The very first roses", body:"Watch the flowers fall. The old story says these were the first roses that ever bloomed in the whole world — they opened the moment Venus was born, and the wind sends them tumbling after her."},
      {find:"Can you find her long, flowing hair?", cx:0.622, cy:0.32, hit:0.16, z:2.2, r:0.24, title:"Rivers of gold", body:"See how her hair flows on and on, like rivers of gold in the wind? The painter brushed it with real gold so it would shine — as if Venus glows with a light from somewhere deep inside."},
      {find:"Can you find the lady holding a cloak full of flowers?", cx:0.784, cy:0.403, hit:0.19, z:2, r:0.3, title:"Spring comes to greet her", body:"This is Spring herself, hurrying to meet Venus. Her dress is sprinkled with tiny flowers, and she holds out a soft cloak — covered in blossoms — to wrap around the new goddess and keep her warm."},
      {find:"Look how fine each strand of Venus's hair is! Pick a brush and a gold from her hair, and paint some strands blowing in the wind.", cx:0.586, cy:0.135, box:{x:0.566, y:0.102, w:0.04, h:0.065},
        paint:{ look:"hair", check:"thinLong", brushes:[0.003, 0.006, 0.012, 0.03], brush:1,
          colors:[{name:"Deep gold", hex:"#5a3617"}, {name:"Gold", hex:"#6b461f"}, {name:"Light gold", hex:"#815b2b"}, {name:"Shining gold", hex:"#9c763d"}],
          say:{ good:"Beautiful! Long, thin, flowing strands, just like Botticelli's golden hair.",
                notThin:"Try the thinnest brush. Botticelli painted each golden strand as a fine line.",
                notLong:"Try long, flowing lines, like hair blowing in the wind.",
                more:"Lovely! Add a few more long, flowing strands." } },
        title:"Real gold", body:"Botticelli painted Venus's hair with thin lines of real gold, so it would shimmer and catch the light. Each strand flows and curls, as if the sea breeze is blowing it."}
    ],
    done:[
      "Here's a secret. This painting isn't really about a lady in the sea. Long ago, people believed Venus <em>was</em> beauty itself — and this is the moment beauty first arrives in the whole world, carried on the wind, with the very first flowers blooming to welcome her.",
      "A painter named Sandro Botticelli made her stand just like the smooth stone goddesses carved thousands of years ago, and brushed her with real gold so it would shine. He painted it in Italy more than 500 years ago.",
      "It lives in a museum called the Uffizi, in a city named Florence — and you're going to stand in front of the real one very soon. When you do, find her dreaming eyes, the wind's puffed-out cheeks, the falling roses, and her rivers of golden hair."
    ]
  },
  {
    id:"primavera", museum:"uffizi", title:"Primavera", artist:"Sandro Botticelli",
    card:"A warm, drifting grove of flowers, dancers, and wind.",
    subtitle:"A warm, drifting garden. Move through it slowly and let each figure show you what is waking.",
    alt:"Primavera by Sandro Botticelli",
    intro:"You let the whole garden settle around you. Now move slowly from figure to figure — each one is part of what is happening here.",
    src:"images/primavera.jpg", tiles:"images/primavera.jpg",
    music:"audio/vivaldi-spring.mp3",
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
      {find:"On the right, follow the falling petals to the woman whose dress overflows with flowers.", cx:0.683, cy:0.511, hit:0.16, z:2, r:0.24, title:"Flora — spring made visible", body:"Touched by Zephyr's warm breath, the fleeing nymph is changing — becoming Flora, the goddess of flowers. She steps forward scattering roses from her gown, and wherever she walks the ground blooms. She is spring itself, made into someone you can see."},
      {find:"Oh no, someone picked all the flowers! Choose a flower, then tap the ground to plant it.", cx:0.585, cy:0.88, box:{x:0.505, y:0.785, w:0.16, h:0.19},
        stickers:{ ground:{src:"images/primavera-meadow-cleared.jpg", x:0.40, y:0.74, w:0.40, h:0.2398},
          area:{x:0.40, y:0.795, w:0.40, h:0.1848}, real:"Botticelli's", word:["flower", "flowers"],
          start:"Choose a flower, then tap the ground.", outside:"Flowers grow on the ground. Try lower down!",
          set:[
            {id:"pink-rose", name:"Pink rose", src:"images/stickers/primavera/pink-rose.png", w:85, h:35, ax:0.51, ay:0.55, spin:25},
            {id:"white-rose", name:"White rose", src:"images/stickers/primavera/white-rose.png", w:70, h:47, ax:0.5, ay:0.55, spin:25},
            {id:"red-flower", name:"Red flower", src:"images/stickers/primavera/red-flower.png", w:79, h:41, ax:0.5, ay:0.55, spin:25},
            {id:"daisies", name:"Daisies", src:"images/stickers/primavera/daisies.png", w:61, h:53, ax:0.52, ay:0.55, spin:30},
            {id:"dandelion", name:"Dandelion", src:"images/stickers/primavera/dandelion.png", w:34, h:37, ax:0.5, ay:0.5, spin:40},
            {id:"campion", name:"Red campion", src:"images/stickers/primavera/campion.png", w:56, h:121, ax:0.5, ay:0.97, spin:6},
            {id:"orange-flowers", name:"Orange flowers", src:"images/stickers/primavera/orange-flowers.png", w:104, h:141, ax:0.49, ay:0.98, spin:5},
            {id:"golden-flowers", name:"Golden flowers", src:"images/stickers/primavera/golden-flowers.png", w:70, h:110, ax:0.5, ay:0.98, spin:6},
            {id:"star-flowers", name:"White star flowers", src:"images/stickers/primavera/star-flowers.png", w:72, h:85, ax:0.5, ay:0.97, spin:6},
            {id:"purple-flowers", name:"Purple flowers", src:"images/stickers/primavera/purple-flowers.png", w:58, h:73, ax:0.48, ay:0.95, spin:6},
            {id:"strawberry", name:"Wild strawberry", src:"images/stickers/primavera/strawberry.png", w:88, h:79, ax:0.49, ay:0.9, spin:6} ],
          done:"Slide to compare your meadow with Botticelli's!" },
        title:"A carpet of flowers", body:"Botticelli painted about 500 kinds of plants in this painting, including almost 200 kinds of flowers, and scientists who study plants have been able to name most of them! He scattered his flowers all over the dark ground, like a carpet, or like the flower-covered tapestries people hung on their walls in his time."}
    ],
    done:[
      "Now the whole garden makes sense. This painting is called <em>Primavera</em> — the Italian word for <em>Spring</em>. Every figure you found is a different part of one season waking up: love at the calm center, the warm wind on one side, flowers spilling out on the other.",
      "Sandro Botticelli gathered old myths into a single warm afternoon. Zephyr's breath turns a fleeing nymph into Flora, who scatters blossoms; Venus presides while Cupid's arrow sparks love; the Three Graces dance and Mercury keeps the sky clear. Together they tell how spring arrives — wind, then love, then flowers everywhere.",
      "It hangs in the Uffizi in Florence, in the same rooms as <em>The Birth of Venus</em>. When you stand before the real one, move slowly again: find Venus's calm face, the dancing hands of the Graces, the blue wind rushing in, and the roses falling from Flora's dress — and feel the whole garden breathing spring."
    ]
  },
  {
    id:"fruit", museum:"uffizi", title:"Fruit and Insects", artist:"Rachel Ruysch",
    card:"A quiet still life that starts to move when you look closely.",
    subtitle:"A slow mystery: is anything truly still?",
    alt:"Fruit and Insects by Rachel Ruysch",
    intro:"You looked at the whole painting. Now let's hunt for the little creatures hiding inside it.",
    src:"images/fruit.jpg", tiles:"images/fruit.jpg",
    music:"audio/gnossienne-1.mp3",
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
    id:"perseus", museum:"uffizi", title:"Perseus Frees Andromeda", artist:"Piero di Cosimo",
    card:"A flying hero, a sea dragon, and a rescue by the shore.",
    subtitle:"A hero, a chained princess, and a sea dragon.",
    alt:"Perseus Freeing Andromeda by Piero di Cosimo",
    intro:"You looked at the whole painting. Now let's find the people and the monster in this rescue story.",
    src:"images/perseus.jpg", tiles:"images/perseus.jpg",
    music:"audio/vivaldi-2-cellos.mp3",
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
      {find:"Can you find the people who are too scared to watch?", cx:0.11, cy:0.64, box:{x:0.01, y:0.5, w:0.21, h:0.34}, areas:[{x:0.01, y:0.5, w:0.21, h:0.45},{x:0.16, y:0.72, w:0.34, h:0.26}], focus:{x:0.01, y:0.5, w:0.21, h:0.34}, hint:"on the left side of the beach", title:"The watching crowd", body:"On the shore, Andromeda's family huddle together. Some point, some cover their faces, some can hardly look. Piero fills the edges with all these feelings — fear, hope, and wonder — so the whole beach seems to hold its breath along with us."}
    ],
    done:[
      "And he does it. Perseus saves Andromeda, the monster falls, and the waiting music turns into a real celebration. A scary story becomes a happy one, right in front of our eyes.",
      "A painter named Piero di Cosimo made this more than 500 years ago. He loved odd and wonderful animals, and he invented this sea dragon out of his own imagination — which is why it looks like nothing you have ever seen.",
      "It lives in the Uffizi in Florence. When you stand before the real one, find the monster's curling tail, the hero up in the sky and again on the monster's back, the chained princess, and the people who could not stop themselves from making music."
    ]
  },
  {
    id:"annunciation", museum:"uffizi", title:"The Annunciation", artist:"Leonardo da Vinci",
    card:"An angel arrives in a garden with the most important news in the world.",
    subtitle:"Two faces, one message, a meadow full of secrets.",
    alt:"The Annunciation by Leonardo da Vinci",
    intro:"You've looked at the two people and their expressions. Now let's go closer and find what's hiding in this painting.",
    src:"images/annunciation.jpg", tiles:"images/annunciation.jpg",
    music:"audio/biber-annunciation.mp3",
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
  },
  {
    id:"adoration", museum:"uffizi", title:"Adoration of the Magi", artist:"Gentile da Fabriano",
    card:"The whole world arrives to see one baby, and everyone brings everything they have.",
    subtitle:"Gold everywhere, and a crowd from every corner of the earth.",
    alt:"Adoration of the Magi by Gentile da Fabriano",
    intro:"You've looked at the whole scene. Now let's go find specific things that prove what you just read.",
    src:"images/adoration.jpg", tiles:"images/adoration.jpg",
    music:"audio/adeste-fideles.mp3",
    prompts:[
      "Just look. In 1423, the richest man in Florence paid for the most expensive painting ever made and hung it in his private chapel. Gold everywhere. Hundreds of people. Animals from three continents.",
      "This is the story of the Magi: three kings who followed a star from the far ends of the earth to bring gifts to the newborn Jesus. The old tradition said they came from every part of the world. So Gentile filled this painting with every face and costume and animal from everywhere he could imagine.",
      "Gentile was the most celebrated painter of his time. He pressed real gold into flowers and animals with a pointed tool, thousands of tiny marks at a time. In 1423, being beautiful and being rich meant the same thing.",
      "This painting is from fifty years before Leonardo's Annunciation. Something new was starting to come into the world, very quietly. See if you can find it hiding here.",
      "The baby is in here somewhere."
    ],
    stops:[
      {find:"Can you find the baby? He has a golden circle above his head.", cx:0.305, cy:0.66, box:{x:0.26, y:0.61, w:0.09, h:0.10}, title:"The smallest person in the room", body:"He is tiny and almost hidden in the corner, while hundreds of people, horses, and a lifetime of gold are all pointing toward him. The oldest and most powerful king in the procession has dropped to his knees to be at the same height as a newborn. That is what this whole painting is about."},
      {find:"Can you find the oldest king kneeling down? Look at his face as he looks at the baby.", cx:0.33, cy:0.67, box:{x:0.27, y:0.58, w:0.12, h:0.14}, title:"The oldest king", body:"He is called Caspar, and he went first. He has dropped to his knees in the grass, his enormous golden robe pooling around him. Look at his face: this is a man who has traveled across the world to be in this exact moment, and he knows it."},
      {find:"Can you find the crown he took off? It is sitting on the ground near his feet.", cx:0.28, cy:0.81, box:{x:0.22, y:0.77, w:0.13, h:0.07}, title:"The crown in the grass", body:"He did not just kneel. He took his crown off first and left it in the grass. That crown represents everything: kingdoms, armies, power over thousands of people. He set it down to kneel before a baby who has none of those things yet. Find the crown, lying there."},
      {find:"Can you zoom into the patterns on the kneeling king's robe?", cx:0.37, cy:0.78, box:{x:0.27, y:0.71, w:0.20, h:0.13}, title:"Flowers made of gold", body:"Look at the tiny patterns pressed into the fabric: flowers, vines, birds, all hammered into real gold leaf with a pointed tool, one small mark at a time. This is how they made beauty in 1423. Not by looking carefully at a real flower in a garden, but by turning the idea of a flower into gold. Fifty years later, Leonardo would go outside and study a real iris, petal by petal. Here, flowers become treasure."},
      {find:"Can you find the ox and the donkey, peeking out of the dark cave?", cx:0.39, cy:0.55, box:{x:0.33, y:0.49, w:0.14, h:0.12}, title:"The original witnesses", body:"While three kings and hundreds of courtiers and horses all arrive for the occasion, the ox and the donkey were already there. They were there at the birth, in the hay, before any star appeared or any king set out. They are the calmest creatures in this entire chaotic painting, because for them, none of this is a surprise."},
      {find:"Can you find the big white horse on the right side?", cx:0.70, cy:0.65, box:{x:0.645, y:0.52, w:0.11, h:0.27}, title:"The one thing that looks real", body:"Almost everything in this painting is decorative: flat, golden, designed to impress. But look at this horse. Gentile watched real horses and painted what he actually saw: the curve of the neck, the weight on each leg, the way the coat catches light differently depending on the angle. This horse could walk off the panel. The Renaissance is hiding right here."},
      {find:"Can you find a greyhound lying down near the bottom of the scene?", cx:0.72, cy:0.75, box:{x:0.63, y:0.70, w:0.18, h:0.105}, title:"The dog who came along", body:"Right at the feet of the crowd, a greyhound lies down and waits. Noblemen in 1423 brought their hunting dogs everywhere, even to the most important event imaginable. This dog has traveled as far as anyone in the procession, seen as much as anyone, and has decided that the right response to this moment is to lie down in the grass."},
      {find:"Can you find a camel somewhere in the procession behind the crowd?", cx:0.54, cy:0.33, box:{x:0.43, y:0.25, w:0.20, h:0.16}, title:"Proof of how far they came", body:"The Magi came from the East, and they traveled the way people traveled from the East in 1423: on camels. Gentile tucked one into the procession winding through the hills behind the main crowd. It is almost hidden. But it tells you something the gold and the crowns don't: this journey was real, and it was very, very long."},
      {find:"Can you find the youngest king? He is wearing the most elaborate crown in the whole painting.", cx:0.55, cy:0.61, box:{x:0.48, y:0.50, w:0.13, h:0.23}, title:"The youngest, from the farthest away", body:"The three kings were said to represent three ages of man and three parts of the world. The youngest one, called Balthasar, traditionally came from the farthest place of all. Look at his crown and his clothes: different from the others, telling you he comes from somewhere else entirely. Gentile made all three of them look like they arrived from different civilizations."},
      {find:"Can you find someone in the crowd wearing a hat or helmet you have never seen before?", cx:0.74, cy:0.51, box:{x:0.64, y:0.40, w:0.17, h:0.20}, areas:[{x:0.50, y:0.37, w:0.37, h:0.15},{x:0.62, y:0.37, w:0.25, h:0.25}], focus:{x:0.64, y:0.40, w:0.17, h:0.20}, title:"Someone from very far away", body:"Gentile painted faces and costumes he would have seen in Florence: traders and ambassadors from the Middle East, from Africa, from Central Asia, passing through on their way somewhere else. He put them all in the procession because the whole point of the Magi story is that the whole world came. Find one person whose hat or face or outfit belongs somewhere far away."}
    ],
    done:[
      "You found the baby. You found the crown in the grass and the greyhound and the camel and the horse that almost looks like a photograph. Gentile put all of it in because the whole point was the whole world arriving in one place.",
      "This painting was finished in 1423. Within seven years, Leonardo da Vinci was born. By the time Leonardo painted his Annunciation, painters had started going outside to study real wildflowers instead of pressing them into gold. This painting is the old world at its most magnificent, right at the moment everything was about to change.",
      "When you stand in front of the real one at the Uffizi, it is much bigger than you expect, and the gold actually glows. Find the crown in the grass first."
    ]
  },

  /* ---------- The Whitney, New York: in visit order (works off view are listed after) ---------- */
  {
    id:"motley", museum:"whitney", title:"Gettin' Religion", artist:"Archibald J. Motley Jr.",
    role:"The Hook",
    card:"A blue night, a brass band, and a whole street dancing.",
    subtitle:"It's night, the band is playing, and everybody's out.",
    alt:"Gettin' Religion by Archibald J. Motley Jr.: a crowded street at night in deep blue light, with brass musicians, dancers, and neighbors watching from porches and windows",
    intro:"You've soaked up the whole noisy night. Now let's find the people and the tiny details hiding in the blue.",
    src:"images/gettin-religion.jpg", tiles:"images/gettin-religion.jpg",
    music:"audio/solace.mp3",
    prompts:[
      "Just look. It's nighttime, and the whole street is full of people. Can you almost hear it?",
      "Everything is blue and purple, like the night is glowing. Where is the brightest light?",
      "Find someone making music. What instrument are they playing?",
      "Find someone dancing, someone walking, and someone just watching. Who would you be?",
      "If you could step into this painting, what would you do first?"
    ],
    stops:[
      {find:"Can you find the glowing streetlamp?", cx:0.63, cy:0.06, box:{x:0.58, y:0.0, w:0.1, h:0.13}, title:"The streetlamp", body:"The streetlamp glows like a little moon, and the whole street is bathed in its blue light. Motley was famous for his night scenes, painted in deep blues and purples, so the darkness feels warm and alive instead of scary."},
      {find:"Can you find someone playing a shiny trumpet?", cx:0.37, cy:0.48, box:{x:0.3, y:0.42, w:0.14, h:0.14}, title:"The trumpet", body:"Here's a man blowing hard on his trumpet, cheeks full of air. A brass band is marching right down the middle of the street, and the music pulls everyone along with it."},
      {find:"Can you find someone with both hands raised high in the air?", cx:0.21, cy:0.4, box:{x:0.14, y:0.31, w:0.15, h:0.2}, title:"Hands up high", body:"This tall man throws his head back and lifts both hands toward the sky. Is he singing? Shouting? Praising? The painting is called Gettin' Religion, and he looks like he's feeling the music all the way down to his shoes."},
      {find:"Can you find a tambourine?", cx:0.59, cy:0.71, box:{x:0.54, y:0.67, w:0.1, h:0.08}, title:"Shake, shake", body:"Someone is holding a tambourine, ready to shake it in time with the band. Look how many ways people make music here: trumpets, a trombone, a tambourine, and voices."},
      {find:"Can you find a little dog trotting through the crowd?", cx:0.57, cy:0.95, box:{x:0.51, y:0.9, w:0.12, h:0.1}, title:"The little dog", body:"Down at everyone's feet, a small white dog trots along on a leash. Even the dog came out tonight! Motley packed the street so full that you could look for a long time and still find someone new."},
      {find:"Can you find a child sitting on the porch steps?", cx:0.54, cy:0.46, box:{x:0.51, y:0.41, w:0.06, h:0.1}, title:"Front-row seat", body:"A child sits on the porch steps, watching everything go by. Up on the porch, a woman leans on the railing to watch too. Porches and steps are the best seats in the house when the street turns into a party."},
      {find:"Look up at the tall building. Can you find people watching from the windows?", cx:0.86, cy:0.2, box:{x:0.73, y:0.0, w:0.27, h:0.4}, title:"Faces in the windows", body:"High in the windows, neighbors look down at the parade below. Some people join the crowd, and some watch from upstairs. Motley painted everyone, so the whole neighborhood is part of the picture."},
      {find:"We took Motley's night away! Drag your finger around the color wheel to bring the night back. Is it black? Tap Compare to check it against Motley's.", cx:0.5, cy:0.5, box:{x:0, y:0, w:1, h:1},
        // filter: the painting's overall color (its average, scaled so the brightest channel is 1)
        night:{ filter:[0.406, 0.363, 1.0], real:"Motley's" },
        title:"Night is blue", body:"To take the night away, we took out blue, not black! Motley didn't paint the night black. Black would hide everyone and make the street gloomy. Instead he washed the whole scene in deep blue, so it feels like night but you can still see every dancer. And next to all that cool blue, the red dresses, the yellow windows and the glowing lamp shine even brighter."}
    ],
    done:[
      "Archibald Motley Jr. painted city life in Chicago, especially the busy streets of Black neighborhoods at night: the music, the dancing, the fancy clothes, and the neighbors talking on their porches.",
      "He loved to fill a painting with people, each one doing something different, and to bathe the whole scene in deep, glowing blue. He painted Gettin' Religion in 1948.",
      "Here's a fun connection: the Whitney got this painting in 2016 by trading in some works left to the museum by Josephine Hopper, Edward Hopper's wife. When you see it, find the streetlamp, the trumpet, the little dog, and the faces in the windows."
    ]
  },
  {
    id:"sevenam", museum:"whitney", title:"Seven A.M.", artist:"Edward Hopper",
    role:"The Wake-Up",
    card:"A shop at dawn, a clock on the wall, and nobody there yet.",
    subtitle:"Early light, an empty shop, and a clock that tells you the time.",
    alt:"Seven A.M. by Edward Hopper: a white corner shop with a clock and a few bottles in the window, next to a dark green wood, in early morning light",
    intro:"You've watched the morning light. Now let's look closely at this quiet little shop.",
    src:"images/seven-am.jpg", tiles:"images/seven-am.jpg",
    music:"audio/wild-rose.mp3",
    prompts:[
      "Just look. It's very early. The sun is just coming up, and nobody is here yet.",
      "Where is the light coming from? Find the brightest spot, and the darkest.",
      "Look at the trees next to the shop. How do they feel: friendly, or a little mysterious?",
      "Look in the shop window. What's for sale? Can you tell what kind of shop this is?",
      "Who do you think will be the first person to walk in today?"
    ],
    stops:[
      {find:"Can you find the clock? What time does it say?", cx:0.525, cy:0.42, box:{x:0.49, y:0.34, w:0.07, h:0.17}, title:"Seven o'clock", body:"The clock on the wall says seven o'clock, just like the painting's name. Look at its shadow, too: the low morning sun throws it sideways across the wall. Hopper uses the clock and the light together to tell you exactly what time it is."},
      {find:"Can you find the green bottles in the window?", cx:0.56, cy:0.76, box:{x:0.47, y:0.72, w:0.18, h:0.08}, title:"A few odd things", body:"A few green bottles and some little signs stand in the window. That's all. The museum says no one can tell what this shop sells. Hopper wanted it to feel a bit mysterious."},
      {find:"Look inside. Can you find the cash register?", cx:0.75, cy:0.63, box:{x:0.71, y:0.58, w:0.08, h:0.1}, title:"Nobody at the register", body:"Inside, a cash register sits on the counter, waiting for the first customer. The shelves behind it look almost empty. Is the shop about to open, or has it been closed for a long time?"},
      {find:"Look upstairs. Can you find a window with its blind pulled down?", cx:0.55, cy:0.05, box:{x:0.5, y:0.0, w:0.1, h:0.11}, title:"Someone upstairs?", body:"An upstairs window has its green blind pulled down, just like the sleepy windows in Early Sunday Morning. In his early sketches Hopper put a person in that window. Then he took them out, so the whole building feels empty."},
      {find:"Can you find the dark woods right next to the shop?", cx:0.2, cy:0.4, box:{x:0.0, y:0.05, w:0.4, h:0.75}, title:"The woods next door", body:"On one side, a bright white shop. On the other, a dark green wood. Hopper put them right next to each other, so the painting feels split in two: light and dark, neat and wild."}
    ],
    done:[
      "Edward Hopper painted Seven A.M. in 1948. His wife, Josephine, wrote in her diary that he finished it in just sixteen days, which was very fast for him.",
      "Like Early Sunday Morning, this painting has no people in it. Hopper liked painting places in that quiet moment just before the day begins, when everything seems to be waiting.",
      "When you see it at the Whitney, find the clock first and check the time. Then see if you can find Early Sunday Morning nearby, and compare: which street feels sleepier?"
    ]
  },
  {
    id:"hopper", museum:"whitney", title:"Early Sunday Morning", artist:"Edward Hopper",
    role:"The Slow-Down",
    card:"Quiet sunlight & counting window blinds.",
    subtitle:"A whole city street, still asleep. Let's be quiet with it.",
    alt:"Early Sunday Morning by Edward Hopper: a row of red brick shops and apartments on an empty street in morning sun",
    intro:"You've let the quiet street settle around you. Now let's walk along it slowly and notice the small things.",
    src:"images/early-sunday-morning.jpg", tiles:"images/early-sunday-morning.jpg",
    music:"audio/gymnopedie-1.mp3",
    prompts:[
      "Shh. It's very early on a Sunday morning. The whole street is still asleep.",
      "Count the windows upstairs, slowly. One… two… three… Take your time.",
      "Look at the window blinds. Some are pulled down, some are up. Who might still be in bed?",
      "Find where the sunlight is warm and where the shadows are cool. Which one would you sit in?",
      "Listen. What would you hear on this street right now? What wouldn't you hear?"
    ],
    stops:[
      {find:"Can you find a window with its blind pulled all the way down?", cx:0.31, cy:0.37, box:{x:0.22, y:0.26, w:0.18, h:0.21}, title:"Still asleep", body:"These two windows have dark green blinds pulled all the way down. Whoever lives there is still fast asleep! Did you count all the windows upstairs? There are ten, and every one is a little different: blinds up, blinds halfway, curtains, no curtains. Hopper wants you to wonder about the people inside."},
      {find:"Can you find the striped barber pole?", cx:0.633, cy:0.76, box:{x:0.6, y:0.63, w:0.07, h:0.27}, title:"The barber pole", body:"Red, white and blue stripes mean there's a barber shop here. Barbers put these poles outside so you could find them from far down the street. But it's Sunday morning. No haircuts today, so the pole stands all alone."},
      {find:"Can you find the fire hydrant on the sidewalk?", cx:0.262, cy:0.87, box:{x:0.22, y:0.8, w:0.08, h:0.14}, title:"A long morning shadow", body:"Look at the hydrant's shadow stretching across the sidewalk. Shadows get long when the sun is low, just after it comes up. That's how Hopper tells you what time it is without painting a single clock."},
      {find:"Near the top left, a big slanting shadow lies across the bricks. Can you find it?", cx:0.17, cy:0.42, box:{x:0.028, y:0.363, w:0.217, h:0.115}, areas:[{poly:[[0.245,0.363],[0.245,0.478],[0.028,0.478],[0.028,0.452]]}], hint:"on the bricks near the top left, just under the windows", title:"A sign you can barely see", body:"That shadow comes from a sign sticking straight out from the wall, right beside the third window. We're looking at the sign from its thin edge, so it almost disappears. But its shadow gives it away! The yellow sign hanging lower down sticks out the same way, and it casts a slanting shadow too."},
      {find:"Can you find a long, dark shadow stretching all the way across the sidewalk?", cx:0.5, cy:0.945, box:{x:0.32, y:0.62, w:0.68, h:0.38}, areas:[{poly:[[0,0.922],[1,0.929],[1,0.962],[0,0.955]]}], hint:"near the bottom, along the edge of the sidewalk", title:"A shadow from somewhere else", body:"That long shadow comes from something we can't see: a telephone pole standing just past the right edge of the painting. Hopper lets the street keep going beyond the frame, so you can imagine the rest of the block."},
      {find:"Can you find some letters on a shop window? Try to read them.", cx:0.47, cy:0.695, box:{x:0.42, y:0.64, w:0.1, h:0.11}, areas:[{x:0.02, y:0.64, w:0.10, h:0.09},{x:0.19, y:0.64, w:0.09, h:0.09},{x:0.39, y:0.64, w:0.13, h:0.10},{x:0.61, y:0.64, w:0.09, h:0.08},{x:0.74, y:0.63, w:0.09, h:0.07}], exclude:[{x:0.615, y:0.63, w:0.04, h:0.27}], focus:{x:0.40, y:0.63, w:0.12, h:0.12}, hint:"in the shop windows, down low", title:"Signs you can't read", body:"Try to read the sign... you can't! Hopper painted the letters as smudges on purpose. If you could read them, you'd start thinking about what the shop sells. Instead, you just feel the quiet."},
      {find:"Can you find the tall dark building peeking in at the top right corner?", cx:0.95, cy:0.08, box:{x:0.89, y:0.0, w:0.11, h:0.17}, title:"A big city waiting", body:"A tall dark building pokes up behind the shops. It reminds you that this little street is part of a huge city. In a few hours it will be busy and loud. But not yet."},
      {find:"Now you be the sun! Drag it across the sky and watch every shadow move, even the ones from things you can't see.", cx:0.36, cy:0.5, box:{x:0.0, y:0.0, w:0.72, h:1.0},
        light:{ hopper:18, horizon:0.93,
          objects:[ {name:"fire hydrant", x:0.262, y:0.923, t:0.012, w:0.04, len:0.194, back:0.02},
                    {name:"barber pole", x:0.641, y:0.8875, t:0.009, w:0.027, len:0.225},
                    {name:"telephone pole (just past the right edge)", x:1.12, y:0.9475, t:0.016, w:0.02, len:1.3, back:0.006, color:"57,66,44", alpha:0.85, offscreen:true} ],
          walls:[ {name:"sign beside the third window, seen edge-on", x:0.2375, top:0.371, bottom:0.476, dx:-0.21, dy:0.081, clip:{x:0, y:0.23, w:1, h:0.246}, color:"40,25,25", alpha:0.5},
                  {name:"yellow hanging sign", x:0.1405, top:0.486, bottom:0.6, dx:-0.16, dy:0.0704, clip:{x:0, y:0.5135, w:1, h:0.036}, color:"40,40,15", alpha:0.42} ],
          patches:[ {x:0.055, y:0.912, w:0.192, h:0.022, sx:0.29, sy:0.912},
                    {x:0.355, y:0.881, w:0.273, h:0.015, sx:0.285, sy:0.881, sw:0.07},
                    {x:0.0, y:0.9295, w:1.0, h:0.029, sx:0.0, sy:0.9585} ],
          relight:[ {poly:[[0.2375,0.369],[0.2375,0.474],[0.03,0.474],[0.03,0.456],[0.077,0.456],[0.077,0.433]], lit:{x:0.19, y:0.335, w:0.04, h:0.025}, dark:{x:0.19, y:0.43, w:0.04, h:0.035}},
                    {poly:[[0.1405,0.5135],[0.1405,0.5495],[0.0,0.5495],[0.0,0.5455],[0.078,0.5135]], lit:{x:0.003, y:0.52, w:0.04, h:0.015}, dark:{x:0.09, y:0.52, w:0.04, h:0.025}} ] },
        title:"Hopper's sun", body:"When the sun is low, shadows stretch out long, like the telephone pole's shadow reaching across the whole sidewalk. When it's high at noon, they shrink to almost nothing. Hopper chose a low morning sun so the long, quiet shadows would make the street feel sleepy. Here's a secret: on the real Seventh Avenue, the sun could never make shadows like these. Hopper made up the light to get the feeling he wanted."}
    ],
    done:[
      "Did you notice? There isn't a single person in this whole painting. No cars, no dogs, no birds. Just sunlight, shadows, and windows. Hopper made it that quiet on purpose, so you would slow down and feel it.",
      "Edward Hopper lived in New York for more than fifty years. He said this painting was 'almost a literal translation of Seventh Avenue,' a real street not far from the Whitney. But he changed things: he blurred the signs, and made the shadows longer than they could ever really be on that street.",
      "The Whitney bought it in 1931, just months after Hopper finished it. It was the very first Hopper painting the museum owned. When you see it, count the windows, find the barber pole, and stand still for a moment, just like the street."
    ]
  },
  {
    id:"thiebaud", museum:"whitney", title:"Pie Counter", artist:"Wayne Thiebaud",
    role:"The Sensory Treat",
    card:"Bakery desserts & thick \"frosting\" paint.",
    subtitle:"Rows and rows of cake and pie. Look with your eyes, and your sweet tooth.",
    alt:"Pie Counter by Wayne Thiebaud: rows of cake and pie slices on white plates along a counter",
    intro:"You've looked at every slice. Now let's find a few special ones, and look at how the paint itself is made like frosting.",
    src:"images/pie-counter.jpg", tiles:"images/pie-counter.jpg",
    music:"audio/waltz-of-the-flowers.mp3",
    prompts:[
      "Just look. Rows and rows of cake and pie, all lined up and waiting for you.",
      "Which slice would you choose? Don't say it yet. Just pick it with your eyes.",
      "Imagine the smells: chocolate, lemon, warm pumpkin, sweet whipped cream.",
      "Look at the paint. Is it thin and flat, or thick and swooshy, like frosting on a cake?",
      "Look at the shadows under the plates. What color are they? Is that what you expected?"
    ],
    stops:[
      {find:"Can you find a slice of chocolate layer cake?", cx:0.15, cy:0.75, box:{x:0.0, y:0.23, w:0.34, h:0.77},
        areas:[{poly:[[0.0,0.23],[0.11,0.23],[0.17,0.33],[0.21,0.42],[0.25,0.52],[0.27,0.62],[0.29,0.75],[0.30,1.0],[0.0,1.0]]}], focus:{x:0.06, y:0.655, w:0.19, h:0.12},
        hint:"all down the left side", title:"Thick as frosting", body:"Look at the white frosting on top. Thiebaud didn't paint it flat. He piled the paint on thick and swooshed it around like a baker with a knife, so up close the ridges and swirls stand right up off the canvas, just like real frosting."},
      {find:"Now find a lemon meringue pie, with its fluffy white top.", cx:0.66, cy:0.74, box:{x:0.34, y:0.26, w:0.53, h:0.74},
        areas:[{x:0.340, y:0.260, w:0.100, h:0.080}, {x:0.360, y:0.330, w:0.190, h:0.130}, {x:0.430, y:0.430, w:0.200, h:0.140}, {x:0.510, y:0.540, w:0.210, h:0.150}, {x:0.545, y:0.660, w:0.255, h:0.180}, {x:0.630, y:0.840, w:0.240, h:0.160}], focus:{x:0.58, y:0.655, w:0.17, h:0.12},
        hint:"in the row running down the middle", title:"Meringue mountains", body:"That fluffy top is meringue, and Thiebaud painted it with big, thick strokes so it looks soft and puffy enough to poke. Now look under the plates: the shadows aren't gray, they're bright blue!"},
      {find:"Look up above the counter. What's up there?", cx:0.5, cy:0.12, box:{x:0.0, y:0.0, w:1.0, h:0.25}, areas:[{x:0.0, y:0.0, w:1.0, h:0.25}],
        hint:"at the top", title:"Nothing at all!", body:"Almost half of the painting is plain white wall. No people, no windows, no price tags. Thiebaud left it empty on purpose, so your eyes go straight to the desserts, like a bright, clean bakery case."},
      {find:"Can you find where the artist signed his name?", cx:0.9, cy:0.02, box:{x:0.82, y:0.0, w:0.17, h:0.05}, areas:[{x:0.80, y:0.0, w:0.20, h:0.06}],
        title:"Signed and dated", body:"Up in the top corner Thiebaud signed his name and the year, 1963. He kept painting cakes and pies for the rest of his long life. He lived to be 101!"},
      {find:"Now you be the baker! Pick a brush and a frosting color, and frost this slice of cake.", cx:0.165, cy:0.895, box:{x:0.07, y:0.79, w:0.19, h:0.21},
        paint:{ look:"frosting", check:"broadSwoosh", brushes:[0.02, 0.045, 0.08], brush:1,
          colors:[{name:"Vanilla", hex:"#f3ead6"}, {name:"Pink", hex:"#f1b3bd"}, {name:"Chocolate", hex:"#5b3421"}, {name:"Lemon", hex:"#f3d667"}],
          say:{ good:"Mmm, that looks like real frosting! Big, thick swooshes, just like Thiebaud's.",
                notBroad:"Load up the biggest brush! Thiebaud's paint is thick, like frosting.",
                notLong:"Try a big swoosh, like spreading frosting with a knife.",
                more:"Keep frosting! Try a few big, thick swooshes." } },
        title:"Paint like frosting", body:"Thiebaud loaded his brush with thick, creamy paint and swooped it on, just like a baker spreading frosting. Up close, the paint on his cakes really is thick and swirly, so it looks good enough to eat."},
      {find:"The counter is empty! Choose a dessert, then tap the counter to set it out. Arrange them any way you like.", cx:0.5, cy:0.6, box:{x:0.0, y:0.18, w:1.0, h:0.82},
        stickers:{ ground:{src:"images/pie-counter-empty.jpg", x:0, y:0, w:1, h:1},
          area:{x:0.0, y:0.335, w:1.0, h:0.645}, depth:{y0:0.33, s0:0.64, y1:0.58, s1:1.0}, flip:false, jitter:0.04,
          real:"Thiebaud's", word:["dessert", "desserts"],
          start:"Choose a dessert, then tap the counter.", outside:"Desserts go on the counter. Try lower down!",
          done:"Slide to compare your counter with Thiebaud's!",
          set:[
            {id:"chocolate-cake", name:"Chocolate cake", src:"images/stickers/pie-counter/chocolate-cake.webp", w:373, h:227, ax:0.532, ay:0.629, y:0.785, spin:0},
            {id:"yellow-cake", name:"Yellow layer cake", src:"images/stickers/pie-counter/yellow-cake.webp", w:382, h:225, ax:0.519, ay:0.587, y:0.786, spin:0},
            {id:"lemon-meringue", name:"Lemon meringue pie", src:"images/stickers/pie-counter/lemon-meringue.webp", w:397, h:230, ax:0.517, ay:0.604, y:0.776, spin:0},
            {id:"pumpkin-pie", name:"Pumpkin pie", src:"images/stickers/pie-counter/pumpkin-pie.webp", w:368, h:183, ax:0.524, ay:0.5, y:0.638, spin:0} ] },
        title:"Rows and rows", body:"Thiebaud lined his desserts up in long rows, the way a diner sets them out: triangles of cake and pie on circles of plates, again and again. Up close they look good enough to eat. From farther away they become a pattern of shapes. The rows shrink as they go back, so the counter looks long and deep."}
    ],
    done:[
      "Every slice on this counter is a little bit different, and a little bit the same. Thiebaud said pie felt 'very magical, very special.' You make it out of ordinary things like apples or squash, then wrap it up in a crust like a present.",
      "Wayne Thiebaud grew up in California and worked in restaurants when he was young. He remembered the long rows of pies and cakes in their glass cases, and later painted them from memory, with paint so thick and creamy it looks good enough to eat.",
      "He painted Pie Counter in 1963, and he kept on painting until he was 101 years old. When you see it at the Whitney, step close to look at the thick, swooshy paint. Then step back and choose your slice."
    ]
  },
  {
    id:"sloan", museum:"whitney", title:"Backyards, Greenwich Village", artist:"John Sloan",
    role:"The Winter Action",
    card:"A snowman, two cats, and laundry flapping in the cold.",
    subtitle:"A snowy backyard in New York, seen from a window.",
    alt:"Backyards, Greenwich Village by John Sloan: children build a snowman in a snowy backyard under clotheslines, while two cats play and a girl watches from a window",
    intro:"You've felt the cold, bright afternoon. Now let's find everyone who's out in the snow.",
    src:"images/backyards-greenwich-village.jpg", tiles:"images/backyards-greenwich-village.jpg",
    music:"audio/traumerei.mp3",
    prompts:[
      "Just look. It snowed in the city! Feel how cold and bright it is.",
      "Look at all the laundry hanging on the lines. Is it blowing in the wind?",
      "Someone is having fun out there. Find them, and see what they're making.",
      "Find the animals. What are they up to?",
      "If you could go out and play here, what would you do first?"
    ],
    stops:[
      {find:"Can you find two kids building a snowman?", cx:0.12, cy:0.53, box:{x:0.02, y:0.43, w:0.21, h:0.2}, title:"The snowman", body:"Two kids in warm coats and hats are finishing their snowman, one reaching up to give him a stick arm. They're far away and small, but they're the happiest part of the whole backyard."},
      {find:"Can you find a black cat leaping through the snow?", cx:0.33, cy:0.66, box:{x:0.28, y:0.57, w:0.13, h:0.2}, title:"The leaping cat", body:"A black cat bounds across the snow, leaving a trail of little pawprints behind it. Can you follow its tracks back to where it started? Sloan caught it in mid-jump, like a snapshot."},
      {find:"Can you find another cat sitting on the fence?", cx:0.51, cy:0.89, box:{x:0.45, y:0.82, w:0.13, h:0.14}, title:"The watching cat", body:"This black-and-white cat isn't jumping anywhere. It's curled up on the fence, keeping its paws out of the snow and watching the other cat play. Two cats, two very different ideas about snow!"},
      {find:"Can you find a girl watching from a window?", cx:0.97, cy:0.37, box:{x:0.93, y:0.29, w:0.07, h:0.15}, title:"Watching from inside", body:"At the very edge, a girl with a bow in her hair peeks out of a window, smiling. Maybe she wishes she were outside too. Sloan painted this scene by watching his neighbors from his own window."},
      {find:"Can you find one red shirt hanging on the line?", cx:0.645, cy:0.17, box:{x:0.62, y:0.12, w:0.05, h:0.1}, title:"Laundry day", body:"Among all the white sheets and shirts, one red one hangs on the line. People in the city hung their washing between the buildings to dry, even in winter. Sloan thought everyday things like laundry were worth painting."},
      {find:"Can you find where the painter signed his name?", cx:0.08, cy:0.95, box:{x:0.02, y:0.92, w:0.12, h:0.07}, title:"John Sloan, '14", body:"Down in the corner it says John Sloan, and under it, 14, for 1914. That's more than a hundred years ago, but kids building snowmen and cats in the snow look almost exactly the same today."},
      {find:"Snow has shadows too. Pick a color and paint a shadow on the snow. What color should it be?", cx:0.51, cy:0.63, box:{x:0.3, y:0.48, w:0.42, h:0.3},
        paint:{ look:"oil", check:"colorUsed", want:["Blue", "Purple"], avoid:["Gray"], brushes:[0.015, 0.035, 0.065], brush:1,
          colors:[{name:"White", hex:"#f7f4ec"}, {name:"Gray", hex:"#8c8c8c"}, {name:"Blue", hex:"#7f97cf"}, {name:"Purple", hex:"#a397cf"}],
          say:{ good:"Yes! Sloan's snow shadows are blue and purple, just like yours.",
                avoid:"Look closely at Sloan's snow. His shadows aren't gray. They're blue and purple! Try painting one in blue.",
                other:"Now try painting a shadow on the snow. What color are Sloan's shadows?" } },
        title:"Blue snow shadows", body:"Look closely at Sloan's snow: the shadows aren't gray at all. They're blue and purple! On a sunny day, snow reflects the blue sky, so its shadows really do look blue. Sloan noticed, and painted what he saw."}
    ],
    done:[
      "John Sloan lived in Greenwich Village, a neighborhood in New York. He made sketches from the window of his apartment on West 4th Street, then turned them into this painting in 1914.",
      "Sloan said he found 'beauty in commonplace things and people.' Back then, many art teachers thought painters should paint grand, important subjects, not laundry and alley cats. Sloan painted them anyway.",
      "Greenwich Village is right next to the Whitney's neighborhood. In fact, the Whitney itself first opened in Greenwich Village. When you see the painting, find the snowman, the leaping cat, and the girl in the window."
    ]
  },
  {
    id:"pelton", museum:"whitney", title:"Sea Change", artist:"Agnes Pelton",
    role:"The Color Cloud",
    card:"A glowing teardrop rising out of a soft green sea.",
    subtitle:"A calm, glowing dream. Breathe slowly and let it float.",
    alt:"Sea Change by Agnes Pelton: a glowing white teardrop rises above soft mint-green waves under a deep blue sky",
    intro:"You've let the colors float. Now let's find a few of the shapes in this dream.",
    src:"images/sea-change.jpg", tiles:"images/sea-change.jpg",
    music:"audio/arabesque-harp.mp3",
    prompts:[
      "Just look. Nothing here is a real thing you know. Let it float in front of you.",
      "Breathe in slowly… and out. Does the glowing shape seem to rise when you breathe in?",
      "Is it day or night? Under the sea, or up in the sky? You decide.",
      "Find the softest color, and the brightest. Which one do you like best?",
      "If this painting made a sound, what would it be?"
    ],
    stops:[
      {find:"Can you find the glowing white teardrop?", cx:0.25, cy:0.42, box:{x:0.18, y:0.32, w:0.13, h:0.24}, title:"The glow", body:"A soft white teardrop rises up, glowing like a lamp or a bubble or the moon. Pelton loved painting light that seems to shine from inside things, as if the painting were lit from within."},
      {find:"Can you find the soft green shape it's rising out of?", cx:0.35, cy:0.65, box:{x:0.14, y:0.5, w:0.46, h:0.3}, title:"A soft green wave", body:"The teardrop grows out of a cloud of mint green that curls like sea foam, or a flower opening, or a wave. Is it water? A cloud? Pelton let it be a little bit of everything."},
      {find:"Can you find a thin curving line, like a thread?", cx:0.6, cy:0.68, box:{x:0.5, y:0.6, w:0.18, h:0.16}, title:"A thin thread", body:"A fine pale line loops out from the green shape and curves away. It's easy to miss! It makes the shape look like it's moving, like a ribbon trailing behind something drifting through water."},
      {find:"Look at the top. Can you find the gray edge curling like a wave?", cx:0.7, cy:0.14, box:{x:0.45, y:0.02, w:0.55, h:0.25}, title:"The edge of the sky", body:"Across the top, a soft gray edge curls and drips like the crest of a wave. It makes the blue look like a window, or the inside of a shell, or the view looking up from under the sea."},
      {find:"Can you find a warm orange stripe near the bottom?", cx:0.5, cy:0.88, box:{x:0.05, y:0.82, w:0.9, h:0.12}, title:"A warm stripe", body:"Down at the bottom, layers of dark blue and green are crossed by a stripe of warm orange, like sunset glowing deep under the water. One warm color makes all the cool colors around it feel even calmer."}
    ],
    done:[
      "Agnes Pelton painted Sea Change in 1931, while she was living near the ocean on Long Island, in a house made from an old windmill. The next year, she moved to the California desert.",
      "She didn't paint things she saw with her eyes. She painted feelings and visions that came to her when she sat very still and quiet. She hoped her paintings would make people feel calm and full of light.",
      "The words 'sea change' come from a play by Shakespeare, about something under the sea changing into something 'rich and strange.' When you see it at the Whitney, stand still, breathe slowly, and watch the glowing teardrop rise."
    ]
  },
  {
    id:"stettheimer", museum:"whitney", title:"New York/Liberty", artist:"Florine Stettheimer",
    role:"The Party",
    card:"Lady Liberty, puffing boats & the carved eagle.",
    subtitle:"New York is throwing a party, and everyone's invited.",
    alt:"New York/Liberty by Florine Stettheimer: a golden Statue of Liberty, a harbor full of ships and flags, and the city skyline, in a frame topped by a carved eagle",
    intro:"You've taken in the whole celebration. Now let's go and find the guests at this party.",
    src:"images/new-york-liberty.jpg", tiles:"images/new-york-liberty.jpg",
    music:"audio/humoresque.mp3",
    prompts:[
      "Just look. This is New York City, and it's having a party. Can you feel it?",
      "Find the colors of the flag: red, white, and blue. How many places can you spot them?",
      "Look at the water. What's floating on it? What's flying above it?",
      "Look up at the tall buildings. Which one would you want to live at the top of?",
      "If you were at this party, where would you want to stand?"
    ],
    stops:[
      {find:"Can you find Lady Liberty, shining gold?", cx:0.275, cy:0.55, box:{x:0.2, y:0.4, w:0.15, h:0.28}, title:"Lady Liberty", body:"The Statue of Liberty is the guest of honor. Stettheimer made her gold and built her up so she seems to pop right out of the picture. She stands on a tall white base that says LIBERTY, welcoming every ship into the harbor."},
      {find:"Can you find a little boat puffing across the water?", cx:0.473, cy:0.526, box:{x:0.42, y:0.495, w:0.11, h:0.06}, title:"Puff, puff", body:"A little steamboat chugs across the harbor, its smokestack puffing away. In those days, boats like this carried people back and forth across New York's busy waters all day long."},
      {find:"Can you find a string of tiny party flags?", cx:0.64, cy:0.58, box:{x:0.52, y:0.54, w:0.24, h:0.08}, title:"Dressed for a party", body:"This gray warship is strung with a line of little colored flags, all the way up to the top of its mast. Sailors call that 'dressing ship,' and they do it to celebrate. Even the battleships came to the party."},
      {find:"Can you find an airplane in the sky?", cx:0.25, cy:0.29, box:{x:0.2, y:0.25, w:0.1, h:0.08}, title:"A brand-new flying machine", body:"Look up! An old-fashioned airplane with two sets of wings zooms over the city. Airplanes were still new and exciting back then, so of course Stettheimer invited one to the party."},
      {find:"Something else is floating in the sky, shaped like a giant cigar. Can you find it?", cx:0.74, cy:0.29, box:{x:0.68, y:0.26, w:0.12, h:0.06}, title:"An airship", body:"That long floating shape is an airship, a kind of giant balloon with an engine. Stettheimer filled her sky with every kind of flying thing, to make the celebration feel even bigger."},
      {find:"Can you find the words NEW YORK 1918?", cx:0.505, cy:0.815, box:{x:0.44, y:0.76, w:0.13, h:0.1}, title:"Signed by the city", body:"Down at the bottom, two figures hold up a shield that says NEW YORK 1918, with a little golden eagle perched on top. It's like the city wrote its own name on the painting."},
      {find:"Now look outside the painting. Can you find the golden eagle on top of the frame?", cx:0.5, cy:0.12, box:{x:0.35, y:0.06, w:0.3, h:0.12}, title:"The carved eagle", body:"The party doesn't stop at the edge of the canvas. The frame is wrapped in a twisted red, white, and blue rope with tassels, and a carved golden eagle spreads its wings on top. Stettheimer often designed special frames for her paintings, and this one is part of the fun."}
    ],
    done:[
      "Florine Stettheimer painted New York/Liberty in 1918 and 1919, just as a terrible world war was ending. The city was ready to celebrate, and so was she: flags, ships, airplanes, skyscrapers, and Lady Liberty in gold.",
      "Stettheimer lived in New York with her mother and her sisters, and together they threw famous parties for artists, writers, and dancers. Her paintings often look like parties too: bright, busy, and full of fun little details.",
      "The Whitney got this painting in 2017, so it's one of the newer arrivals at the museum. When you see it, find Lady Liberty, the puffing steamboat, the party flags, and the carved eagle on top of the frame."
    ]
  },
  {
    id:"johns", museum:"whitney", title:"Three Flags", artist:"Jasper Johns",
    role:"The Look-Again",
    card:"A flag you've seen a thousand times, stacked up three times over.",
    subtitle:"You know this flag. But have you ever really looked at it?",
    alt:"Three Flags by Jasper Johns: three American flags stacked on top of each other, each one smaller and closer than the last",
    intro:"You've looked at the whole stack. Now let's look again, really closely, at something you thought you already knew.",
    src:"images/three-flags.jpg", tiles:"images/three-flags.jpg",
    music:"audio/america-chimes.mp3",
    prompts:[
      "Just look. You've seen this flag so many times. Is anything different about this one?",
      "How many flags can you see? Count them slowly.",
      "Which flag looks the closest to you? Which one looks farthest away?",
      "Look at the paint. Is it smooth like a real flag, or bumpy and brushy?",
      "Why do you think the artist painted the same flag three times?"
    ],
    stops:[
      {find:"Can you find the smallest flag?", cx:0.503, cy:0.49, box:{x:0.238, y:0.236, w:0.53, h:0.511}, areas:[{x:0.238, y:0.236, w:0.53, h:0.511}], title:"The smallest is the closest", body:"Here's something surprising: the smallest flag actually sticks out the farthest toward you. Johns stacked three separate canvases, like steps, with the biggest at the back and the smallest in front. Usually far-away things look small. Here it's the opposite!"},
      {find:"Can you find the middle-sized flag, peeking out around the smallest one?", cx:0.5, cy:0.79, box:{x:0.153, y:0.161, w:0.701, h:0.674}, areas:[{x:0.153, y:0.161, w:0.701, h:0.674}], exclude:[{x:0.238, y:0.236, w:0.53, h:0.511}], hint:"all around the edges of the smallest flag", title:"The middle flag", body:"All around the smallest flag you can see a border of the middle one, like a picture frame. Each flag is about one quarter smaller than the one behind it."},
      {find:"Now find the biggest flag, all the way at the back.", cx:0.5, cy:0.9, box:{x:0.044, y:0.059, w:0.917, h:0.881}, areas:[{x:0.044, y:0.059, w:0.917, h:0.881}], exclude:[{x:0.153, y:0.161, w:0.701, h:0.674}], hint:"all around the outside edges", title:"Not fifty stars!", body:"Look at the biggest flag's stars. The top row has 8, and there are 6 rows. That's 48 stars, not 50! When Johns painted this in 1958, there were only 48 states. Alaska and Hawaii joined the next year, and the flag got more stars."},
      {find:"Which brush did Johns use? Try different brushes and reds from his flag, and paint some strokes on the stripe.", cx:0.87, cy:0.38, box:{x:0.78, y:0.24, w:0.18, h:0.28},
        paint:{ look:"wax", check:"shortBroad", brushes:[0.008, 0.02, 0.045, 0.08], brush:0,
          colors:[{name:"Deep red", hex:"#b12a32"}, {name:"Red", hex:"#bc3737"}, {name:"Warm red", hex:"#c54940"}, {name:"Light red", hex:"#c95b49"}],
          say:{ good:"Those look a lot like Johns's strokes! Short and broad, one dab next to another.",
                notBroad:"Try the biggest brush! Johns's strokes are wide and chunky, not thin and careful.",
                notShort:"Try short little dabs instead of long lines. That's how Johns had to paint.",
                more:"Nice painting! Try a few more short, broad dabs and see how close you can get." } },
        title:"Painting with wax", body:"Johns mixed his colors into warm, melted wax. Each stroke cooled and hardened in a few seconds, right where he put it. That's why his flag is covered in short, broad dabs, and why it looks bumpy and handmade up close."}
    ],
    done:[
      "Jasper Johns said the flag was something people saw but didn't really look at. They knew it so well that they stopped noticing it. So he painted it in a way that makes you look again.",
      "He painted with warm wax, so every stroke shows. And he stacked three flags so the smallest one pops out toward you, the opposite of what your eyes expect. When you see the real one, look at it from the side: it sticks out almost like a sculpture.",
      "When you see it at the Whitney, count the flags, count the stars, and then walk to the side to see how far the little flag sticks out. Then try it at home: pick something you see every day, and look at it like it's brand new."
    ]
  },
  {
    id:"stella", museum:"whitney", title:"The Brooklyn Bridge", artist:"Joseph Stella",
    role:"The Grand Finale",
    card:"Giant glowing castle arches & silver harp strings.",
    subtitle:"A bridge so big and bright it feels like a cathedral.",
    alt:"The Brooklyn Bridge: Variation on an Old Theme by Joseph Stella: the bridge's pointed arches and curving cables glow against a city at night",
    intro:"You've stood under the bridge. Now let's find what Stella hid inside it.",
    src:"images/brooklyn-bridge.jpg", tiles:"images/brooklyn-bridge.jpg",
    music:"audio/rhapsody-in-blue.mp3", musicStart:385,
    prompts:[
      "Just look up. You're standing right in the middle of a giant bridge, at night.",
      "Find the two tall pointed arches. Do they remind you of a castle, or a church?",
      "Follow the long curving cables with your eyes. What do they look like to you?",
      "Look for lights: windows, stars, glowing circles. Where is it brightest?",
      "How does it feel to stand here? Do you feel tiny, or huge?"
    ],
    stops:[
      {find:"Can you find the two giant pointed arches?", cx:0.5, cy:0.2, box:{x:0.12, y:0.09, w:0.76, h:0.28}, areas:[{x:0.05, y:0.02, w:0.90, h:0.40}], title:"Castle arches", body:"The real Brooklyn Bridge has two huge stone towers, each with two tall pointed arches, the same shape as the windows of an old castle or cathedral. Stella made them giant and dark, with the glowing city shining through like stained glass."},
      {find:"Can you find the long silver cables that look like harp strings?", cx:0.2, cy:0.65, box:{x:0.02, y:0.45, w:0.35, h:0.4}, areas:[{poly:[[0.445,0.06],[0.425,0.13],[0.4,0.23],[0.355,0.33],[0.315,0.38],[0.285,0.43],[0.255,0.48],[0.215,0.53],[0.18,0.58],[0.145,0.63],[0.095,0.68],[0.03,0.73],[0.0,0.76],[0.0,0.82],[0.135,0.8],[0.19,0.73],[0.225,0.68],[0.273,0.63],[0.31,0.58],[0.342,0.53],[0.37,0.48],[0.413,0.43],[0.43,0.38],[0.455,0.33],[0.48,0.23],[0.5,0.13],[0.51,0.06]]}, {poly:[[0.555,0.06],[0.575,0.13],[0.6,0.23],[0.645,0.33],[0.685,0.38],[0.715,0.43],[0.745,0.48],[0.785,0.53],[0.82,0.58],[0.855,0.63],[0.905,0.68],[0.97,0.73],[1.0,0.76],[1.0,0.82],[0.865,0.8],[0.81,0.73],[0.775,0.68],[0.727,0.63],[0.69,0.58],[0.658,0.53],[0.63,0.48],[0.587,0.43],[0.57,0.38],[0.545,0.33],[0.52,0.23],[0.5,0.13],[0.49,0.06]]}, {poly:[[0.105,0.055],[0.13,0.075],[0.07,0.17],[0.02,0.235],[0.0,0.24],[0.0,0.17],[0.06,0.1]]}, {poly:[[0.895,0.055],[0.87,0.075],[0.93,0.17],[0.98,0.235],[1.0,0.24],[1.0,0.17],[0.94,0.1]]}], exclude:[{x:0.478, y:0.22, w:0.044, h:0.58}], focus:{x:0.0, y:0.45, w:0.45, h:0.35}, hint:"they sweep down from the top of the towers", title:"Silver harp strings", body:"The bridge hangs from thick steel cables, and thinner wires run from them like the strings of a giant harp. Stella painted them shining silver and blue, sweeping down toward you, so you feel like you're standing right underneath."},
      {find:"Inside the arches, can you find a skyscraper with a glowing golden top?", cx:0.71, cy:0.17, box:{x:0.66, y:0.12, w:0.1, h:0.12}, areas:[{x:0.66, y:0.11, w:0.10, h:0.13}, {x:0.26, y:0.13, w:0.10, h:0.17}], focus:{x:0.63, y:0.10, w:0.16, h:0.14}, hint:"inside the pointed arches", title:"The city beyond", body:"Through the arches you can see the skyscrapers of Manhattan, lit up at night. Stella stacked them like crystals and blocks of light, crowded together and climbing toward the sky."},
      {find:"Can you find a red window, glowing like stained glass?", cx:0.2, cy:0.74, box:{x:0.14, y:0.69, w:0.14, h:0.11}, areas:[{x:0.14, y:0.69, w:0.15, h:0.11}, {x:0.60, y:0.64, w:0.23, h:0.16}], focus:{x:0.12, y:0.68, w:0.19, h:0.13}, hint:"low down, on both sides", title:"Stained glass", body:"Deep inside the bridge, a red shape glows like a stained-glass window in a church. Stella wanted the bridge to feel like a holy place. He called it a 'shrine' for the new America."},
      {find:"Look along the bottom of the painting. Can you find a tiny bridge?", cx:0.2, cy:0.86, box:{x:0.03, y:0.82, w:0.36, h:0.07}, areas:[{x:0.02, y:0.80, w:0.96, h:0.09}], focus:{x:0.02, y:0.81, w:0.40, h:0.08}, title:"A bridge inside the bridge", body:"Along the bottom there's a whole little picture of its own: a bridge seen from far away, stretching across the river toward the glittering lights of the city. Old church altarpieces often had a row of small pictures like this along the bottom."},
      {find:"Can you count the glowing circles along the very bottom?", cx:0.5, cy:0.955, box:{x:0.0, y:0.92, w:1.0, h:0.07}, title:"A row of lights", body:"Did you count ten? They glow like lamps, or jewels, or the lights along the front of a stage. A grand finale for the whole painting."},
      {find:"Paint on one side of the bridge, and watch what happens on the other side!", cx:0.5, cy:0.27, box:{x:0.04, y:0.03, w:0.92, h:0.48},
        paint:{ look:"glow", check:"any", mirror:true, brushes:[0.012, 0.03, 0.06], brush:1,
          colors:[{name:"Blue", hex:"#3983bd"}, {name:"Teal", hex:"#2fa59e"}, {name:"Gold", hex:"#e4c017"}, {name:"Red", hex:"#c15562"}, {name:"Silver", hex:"#c9cdce"}],
          say:{ good:"Look, both sides match! Your painting is balanced, just like Stella's bridge." } },
        title:"Both sides match", body:"Stella built his bridge like a giant church window: the left side and the right side are almost the same, like a reflection in a mirror. That balance makes the bridge feel calm, strong, and grand."}
    ],
    done:[
      "Joseph Stella came to New York from Italy when he was nineteen. The city amazed him: the noise, the lights, the steel. And nothing amazed him more than the Brooklyn Bridge.",
      "He loved to stand on the bridge alone at night, with the trains rumbling and the cables humming above him. He painted it again and again for more than twenty years. This one, from 1939, is called <em>The Brooklyn Bridge: Variation on an Old Theme</em>: an old favorite, played one more time, like a song.",
      "It's almost six feet tall, taller than most grown-ups, and it feels like an altar in a cathedral. When you see it at the Whitney, stand right in front of it, look up at the arches, and follow the silver strings down. Then, if you can, go and see the real bridge."
    ]
  },
  {
    id:"calder", museum:"whitney", onView:false, title:"Calder's Circus", artist:"Alexander Calder",
    role:"The Hook", kind:"sculpture",
    card:"Real miniature toys & recycled creatures.",
    subtitle:"A whole circus small enough to pack in a suitcase.",
    alt:"Calder's Circus by Alexander Calder: tiny wire and cloth performers around a little circus ring",
    intro:"You've looked over the whole circus. Now let's find the performers. Every one of them was made by hand from bits and scraps.",
    src:"images/calder-circus.jpg", tiles:"images/calder-circus.jpg",
    music:"audio/brahms-lullaby.mp3",
    prompts:[
      "Just look. A whole circus is waiting for you: tents, a ring, and a crowd of tiny performers.",
      "Everything here is small enough to hold in your hand. Which one would you pick up first?",
      "Look closely at what they're made of. Can you spot wire, cloth, string, or a cork?",
      "Who looks like they're about to move? Find someone ready to swing, ride, or jump.",
      "If this circus could make a sound right now, what would you hear?"
    ],
    stops:[
      {find:"Can you find the acrobats hanging high above the ring?", cx:0.47, cy:0.34, box:{x:0.36, y:0.27, w:0.24, h:0.14}, title:"The flying acrobats", body:"Up on the high wires, tiny acrobats dangle from their trapezes, with a net waiting underneath in case anyone falls. Calder bent their bodies out of wire so they could really swing. When he put on the show, he moved them with his own hands while the audience held its breath."},
      {find:"Can you find the ringmaster in his tall black top hat?", cx:0.372, cy:0.6, box:{x:0.34, y:0.555, w:0.07, h:0.1}, title:"The ringmaster", body:"Every circus needs someone to shout, 'Ladies and gentlemen!' This little man in the top hat runs the show. But the real ringmaster was Calder himself. He knelt on the floor, moved every figure, and announced each act in English or French."},
      {find:"Can you find a creature whose head is made from a cork?", cx:0.535, cy:0.75, box:{x:0.5, y:0.7, w:0.075, h:0.1}, title:"A creature made of corks", body:"Its head is a real cork, the kind that plugs a bottle, with two curly wire horns poked into it. Is it a bull? A goat? Calder could find an animal hiding in almost anything: a cork, a button, a bottle cap, a bit of rubber hose."},
      {find:"Can you find someone with big, fluffy legs?", cx:0.635, cy:0.67, box:{x:0.595, y:0.59, w:0.08, h:0.17}, title:"Fluffy legs", body:"Those shaggy legs look like woolly chaps, the furry leggings cowboys wore on cold days, and that long wire could be his lasso. Calder didn't try to make his performers look real. He made them look fun, and ready to move."},
      {find:"Can you find the musician with a giant horn?", cx:0.845, cy:0.71, box:{x:0.79, y:0.6, w:0.12, h:0.22}, title:"The big horn", body:"A huge horn curls around this musician, and a long hose loops all over the floor. That hose is real rubber tubing. Calder's circus had sound, too: he brought whistles, noisemakers, and records, and the audience got to make noise along with him."},
      {find:"Can you find a tiny street lamp with a sign on it?", cx:0.09, cy:0.7, box:{x:0.05, y:0.6, w:0.09, h:0.23}, title:"ONE WAY", body:"Read the little sign: ONE WAY! Calder made a whole street lamp out of wire and metal, like one you'd pass on a city sidewalk. Even the scenery in this circus is homemade."},
      {find:"Can you find a tiny American flag?", cx:0.385, cy:0.7, box:{x:0.355, y:0.64, w:0.06, h:0.13}, title:"A little piece of home", body:"Calder was an American who moved to Paris in 1926, and that's where he built this circus. Somebody in the show is proudly waving the Stars and Stripes."},
      {find:"Calder drew with wire! Draw a person or an animal without lifting your finger.", cx:0.14, cy:0.31, box:{x:0.0, y:0.1, w:0.3, h:0.42},
        paint:{ look:"wire", check:"oneLine", wobble:true, brushes:[0.008, 0.014], brush:0,
          colors:[{name:"Black wire", hex:"#2a2a2a"}, {name:"Silver wire", hex:"#9aa0a8"}, {name:"Brass wire", hex:"#b8913a"}],
          say:{ good:"One line, one wire, just like Calder! Now watch it wobble.",
                tooMany:"Calder used one long wire. Tap Try again, then Start over, and draw your whole figure without lifting your finger!",
                tooShort:"Make it bigger! Tap Try again and draw one long line that loops around into a shape." } },
        title:"Drawing in the air", body:"Calder bent and twisted wire into people and animals, like drawing a picture with one long line, right in the air. And he loved things that move: later he invented mobiles, sculptures that sway and turn."}
    ],
    done:[
      "Here's the secret: Calder's Circus was a real show. In Paris, around 1926, a young American named Alexander Calder started making tiny performers out of wire, cloth, cork, string, buttons, and bottle caps. Then he invited friends over to watch.",
      "Guests sat on crates, munched peanuts, and blew on noisemakers while Calder knelt on the floor and made everything move. A show could last two hours. Famous artists came to watch, and the circus kept growing until it filled five suitcases.",
      "Calder never stopped wanting art to move. A few years later he invented the mobile, a sculpture that hangs and drifts in the air. It all started here. When you see the circus at the Whitney, find the acrobats on their trapezes, the ringmaster's top hat, and the creature with a cork for a head."
    ]
  },
  {
    id:"pippin", museum:"whitney", onView:false, title:"The Buffalo Hunt", artist:"Horace Pippin",
    role:"The Winter Action",
    card:"Charging herds & snow pillows on branches.",
    subtitle:"A snowstorm, a dark forest, and something big on the run.",
    alt:"The Buffalo Hunt by Horace Pippin: dark buffalo charge through deep snow beside a bare tree in a blizzard",
    intro:"You've felt the storm. Now let's look closer at what's happening out there in the snow.",
    src:"images/buffalo-hunt.jpg", tiles:"images/buffalo-hunt.jpg",
    music:"audio/new-world-largo.mp3",
    prompts:[
      "Just look. Everything is black, white, and gray. Brrr. Feel how cold it is.",
      "See all the little slanting lines? That's snow blowing sideways in the wind.",
      "Something big is moving fast through the snow. Find it, and follow it with your eyes.",
      "Which way is the wind blowing? Look at the trees and bushes to find out.",
      "Are you safe and warm, watching? Or are you out there in the storm?"
    ],
    stops:[
      {find:"Can you find a buffalo charging through the snow with its head down?", cx:0.68, cy:0.74, box:{x:0.57, y:0.62, w:0.25, h:0.26}, title:"Head down, charging", body:"Here's the buffalo, a huge dark shape plowing through the snow with its head held low. Pippin painted it almost like a shadow, with hardly any details. That makes it look even bigger and faster, the way something looks when it rushes past you."},
      {find:"Is it alone? Find another buffalo right behind it.", cx:0.88, cy:0.72, box:{x:0.77, y:0.6, w:0.23, h:0.26}, title:"A herd on the run", body:"There's another one! Buffalo lived and ran together in herds. Pippin overlapped these two so closely that they almost melt into one giant dark shape, thundering across the white snow."},
      {find:"Can you find snow piled like pillows on the big tree's branches?", cx:0.08, cy:0.54, box:{x:0.0, y:0.45, w:0.2, h:0.2}, title:"Snow pillows", body:"Look at the branches near the trunk: thick, soft lumps of snow are piled on top of them like pillows. Pippin used his white paint thick and heavy, so you can almost feel how cold and wet it is."},
      {find:"Can you find little bushes being blown flat by the wind?", cx:0.66, cy:0.5, box:{x:0.55, y:0.4, w:0.23, h:0.19}, title:"Which way is the wind?", body:"These little bushes are all bent the same way, pushed by the wind. The snow streaks all slant the same way too. Pippin made the whole painting feel windy without ever painting the wind itself."},
      {find:"Can you find a tiny bare bush near the bottom?", cx:0.62, cy:0.9, box:{x:0.57, y:0.85, w:0.1, h:0.11}, title:"Hoofprints in the snow", body:"One little bush hangs on in the snow, right in the buffalo's path. Look at all the gray marks scattered around it. They could be hoofprints, left behind by the herd as it thundered past."},
      {find:"Can you find the painter's name, written in yellow?", cx:0.945, cy:0.975, box:{x:0.89, y:0.94, w:0.11, h:0.06}, title:"H. PIPPIN", body:"The only bright color in the whole painting is the artist's name: H. PIPPIN, in yellow letters down in the corner. It's like he's saying 'I made this' in the warmest color he had."},
      {find:"Pippin made the wind blow with slanting snow. Paint some snow streaks across the dark rocks!", cx:0.31, cy:0.53, box:{x:0.14, y:0.36, w:0.34, h:0.34},
        paint:{ look:"streak", check:"sameSlant", brushes:[0.008, 0.018, 0.035], brush:1,
          colors:[{name:"White", hex:"#f4f1e8"}, {name:"Pale gray", hex:"#c9c9c4"}],
          say:{ good:"Whoosh! All your snow is slanting the same way. Now it's windy!",
                mixed:"Your snow is swirling every which way! Try making every streak slant the same direction, like Pippin's.",
                more:"Paint a few more snow streaks, all slanting the same way." } },
        title:"Painting the wind", body:"You can't see wind. So how do you paint it? Pippin slanted every snow streak the same way, so your eyes feel the storm blowing across the whole picture."}
    ],
    done:[
      "Horace Pippin painted this in 1933. He had never seen buffalo running across the snowy plains. He imagined the whole thing, the storm, the herd, the cold, and painted it so strongly that you can almost feel the wind.",
      "Pippin had to work hard to paint at all. He was a soldier in World War I, and his right arm was badly hurt. Afterward he painted by holding up his right hand with his left. He taught himself, one careful painting at a time, and became one of America's great artists.",
      "The Whitney bought The Buffalo Hunt in 1941. The museum says a shadowy hunter is hiding in it too. When you stand in front of it, look for him among the dark rocks. Then find the snow pillows and the bright yellow name."
    ]
  },
  {
    id:"okeeffe", museum:"whitney", onView:false, title:"Music, Pink and Blue No. 2", artist:"Georgia O'Keeffe",
    role:"The Color Cloud",
    card:"Soft breathing curves & visual music.",
    subtitle:"No people, no places. Just color, curving like music.",
    alt:"Music, Pink and Blue No. 2 by Georgia O'Keeffe: soft pink, purple and orange curves fold around a deep blue shape",
    intro:"You've let the colors move around you. Now let's find some of the different 'notes' in this painting.",
    src:"images/music-pink-blue.jpg", tiles:"images/music-pink-blue.jpg",
    music:"audio/the-swan.mp3",
    prompts:[
      "Just look. You don't have to find anything. Let the colors float in front of you.",
      "Breathe in slowly… and out. Do the curves seem to breathe with you?",
      "If this painting were music, would it be loud or soft? Fast or slow?",
      "Follow one curve with your eyes, all the way from where it starts to where it ends.",
      "Does it remind you of anything? A flower, a shell, a cloud? There's no wrong answer."
    ],
    stops:[
      {find:"Can you find the deep blue shape, like a doorway?", cx:0.66, cy:0.7, box:{x:0.47, y:0.43, w:0.36, h:0.57}, title:"The quiet center", body:"Everything in the painting curves around this deep blue shape. It could be the quiet middle of a song, the inside of a shell, or a window onto the sky. O'Keeffe never said exactly what it was. She wanted you to feel it."},
      {find:"Can you find the thinnest, brightest red-orange line?", cx:0.82, cy:0.46, box:{x:0.62, y:0.33, w:0.36, h:0.3}, title:"One loud note", body:"Most of the colors here are soft, but this thin red-orange line is bright and sharp, like one loud note in a quiet song. It pulls your eye along the curve, around and down."},
      {find:"Can you find the darkest, deepest purple?", cx:0.38, cy:0.33, box:{x:0.28, y:0.26, w:0.17, h:0.2}, title:"A deep, low sound", body:"Here the pink folds into a dark, rich purple, like the low hum of a cello. O'Keeffe blended her colors so smoothly you can hardly see a brushstroke. One color just melts into the next."},
      {find:"Can you find the softest, palest color, like air on a cool morning?", cx:0.07, cy:0.3, box:{x:0.0, y:0.05, w:0.17, h:0.55}, title:"Breathing room", body:"Along the left side, the pale blue is soft and calm, like sky, or a quiet breath between notes. Music needs silence too. This is the painting's pause."},
      {find:"Can you find a stripe of cool mint green?", cx:0.47, cy:0.68, box:{x:0.4, y:0.44, w:0.13, h:0.5}, areas:[{poly:[[0.42,0.45],[0.48,0.44],[0.51,0.6],[0.55,0.8],[0.6,1.0],[0.49,1.0],[0.45,0.8],[0.42,0.6]]},{poly:[[0.69,0.45],[0.77,0.47],[0.82,0.6],[0.86,0.8],[0.89,1.0],[0.81,1.0],[0.78,0.8],[0.74,0.6]]}], focus:{x:0.38, y:0.44, w:0.20, h:0.34}, hint:"right next to the blue", title:"A cool surprise", body:"Tucked between the white and the blue is a stripe of mint green, a surprise among all the pinks. When warm colors and cool colors sit side by side, both of them look brighter."},
      {find:"Can you find curves at the top that float right off the edge?", cx:0.83, cy:0.12, box:{x:0.66, y:0.0, w:0.34, h:0.25}, title:"Out of the frame", body:"Up in the corner, soft white and gray curves flow right off the edge of the canvas, as if the painting keeps going beyond what we can see. Like music you can still hear after you've left the room."},
      {find:"Listen to the music, and draw what you hear with long, smooth curves.", cx:0.3, cy:0.27, box:{x:0.0, y:0.0, w:0.6, h:0.55},
        paint:{ look:"soft", check:"smoothLong", brushes:[0.02, 0.045, 0.08], brush:1,
          colors:[{name:"Pink", hex:"#ef9fbf"}, {name:"Lavender", hex:"#b79ad8"}, {name:"Blue", hex:"#4aa3d8"}, {name:"Coral", hex:"#f07f62"}, {name:"Mint", hex:"#a8e0cf"}],
          say:{ good:"Those curves flow like music! Long and smooth, just like O'Keeffe's.",
                notLong:"Try long, slow curves, like a melody that keeps on going.",
                jaggy:"Try round, smooth curves instead of zigzags. O'Keeffe's shapes swell and flow.",
                more:"Keep going! Long, smooth curves, like the music." } },
        title:"Smooth as music", body:"O'Keeffe blended her colors so smoothly that you can hardly see a single brushstroke. Her curves swell and flow like a melody, the opposite of short, bumpy dabs."},
      {find:"Now play the painting! Touch a color and hold it to hear it hum. Slide across the stripes to strum them like harp strings. Try two fingers!", cx:0.5, cy:0.5, box:{x:0, y:0, w:1, h:1},
        // bands match the colors in the map (red value >> 5); notes are all from one D major pentatonic chord
        play:{ map:"images/music-pink-blue-bands.png", start:"Touch a color and hold it.",
          bands:[
            {name:"Deep blue",   sound:"organ",   freq:146.83, glow:"#1aa7ff", ring:"#0a5f96", say:"Deep blue hums low and calm, like an organ."},
            {name:"Deep purple", sound:"cello",   freq:110.00, glow:"#c2318f", ring:"#8a1f66", say:"Deep purple sings low, like a cello."},
            {name:"Violet",      sound:"bassoon", freq:164.81, glow:"#c860d8", ring:"#8e3aa0", say:"Violet hums like a bassoon."},
            {name:"Pink",        sound:"voice",   freq:369.99, glow:"#ff7fb6", ring:"#c23f7c", say:"Pink sounds like someone humming: oooh."},
            {name:"Coral",       sound:"bell",    freq:440.00, glow:"#ff5a3c", ring:"#c9302c", say:"The coral line rings like a church bell."},
            {name:"Mint",        sound:"violin",  freq:493.88, glow:"#4fe0b0", ring:"#1f9a74", say:"Mint green sings like a violin."},
            {name:"Pale blue",   sound:"flute",   freq:739.99, glow:"#7fa8ff", ring:"#4466c4", say:"Pale blue floats like a flute."},
            {name:"Cream",       sound:"chime",   freq:880.00, glow:"#ffd27a", ring:"#b8862a", say:"Cream is the quietest: a tiny glass chime."} ] },
        title:"Colors you can hear", body:"When she was a young artist, O'Keeffe read a book by the painter Wassily Kandinsky. He believed colors have sounds: light blue like a flute, deep blue like a cello or an organ, green like a violin, violet like a bassoon, orange like a church bell. Look how the curves spread out from the blue, ring after ring, like ripples from a sound. You just turned her painting back into music."}
    ],
    done:[
      "This painting doesn't show a person or a place. Georgia O'Keeffe wanted to find out whether colors and shapes alone could make you feel something, the way music does without any words.",
      "Once, in an art class, a teacher played music and asked everyone to draw what they heard. O'Keeffe never forgot it. She talked about 'the idea that music could be translated into something for the eye.' She painted this one in 1918, the year she moved to New York.",
      "Later she became famous for giant flowers and the desert hills of New Mexico, but you can already see her soft, curving shapes here. When you see it at the Whitney, stand still, breathe slowly, and let your eyes follow the curves around the blue."
    ]
  },
  {
    id:"manray", museum:"whitney", onView:false, title:"La Fortune", artist:"Man Ray",
    role:"The Dream Riddle",
    card:"A giant green billiard table in the desert.",
    subtitle:"Something is very strange here. Can you figure out what?",
    alt:"La Fortune by Man Ray: a long green billiard table stretches across a desert under brightly colored clouds",
    intro:"You've looked at this strange dream. Now let's hunt for the clues.",
    src:"images/la-fortune.jpg", tiles:"images/la-fortune.jpg",
    music:"audio/meditation.mp3",
    prompts:[
      "Just look. Something in this painting is very, very strange. What is it?",
      "Where would you usually see a table like this? Where is it now?",
      "Look at the clouds. What colors are they? Have you ever seen clouds like that?",
      "Is the table sitting on the ground, or tipping up into the sky? Look again.",
      "Make up a story: how did this table get here, and who's coming to play?"
    ],
    stops:[
      {find:"Can you find the one red ball?", cx:0.371, cy:0.754, box:{x:0.33, y:0.72, w:0.08, h:0.07}, title:"The red ball", body:"In billiards, you hit the balls with a long stick called a cue and try to knock them into each other. One red ball and two white ones: that's a real game. But who could possibly play on a table this long?"},
      {find:"Can you find the white ball that has rolled the farthest away?", cx:0.633, cy:0.551, box:{x:0.6, y:0.52, w:0.07, h:0.06}, title:"So far away", body:"This ball is way down at the far end. The table is so long it seems to stretch all the way to the mountains, like a green road. Nobody's arm is long enough for this shot!"},
      {find:"This table has legs, but you can only see one. Can you find it?", cx:0.775, cy:0.73, box:{x:0.73, y:0.54, w:0.09, h:0.37}, title:"One leg on the ground", body:"The fancy carved leg holds the table up, but the table tilts so far it looks like it could lift off into the sky. Man Ray loved putting ordinary things where they don't belong, just to see what our minds would do."},
      {find:"Can you find a cloud that's the same green as the table?", cx:0.3, cy:0.37, box:{x:0.1, y:0.29, w:0.36, h:0.14}, title:"A green cloud", body:"The clouds look like big blobs of paint squeezed out on an artist's palette: red, orange, blue, yellow, and green, the very same green as the table. In a dream, things can match that don't belong together."},
      {find:"Can you find the faraway blue mountains?", cx:0.18, cy:0.6, box:{x:0.0, y:0.56, w:0.36, h:0.09}, areas:[{x:0.0, y:0.56, w:0.36, h:0.09},{x:0.77, y:0.57, w:0.23, h:0.07}], focus:{x:0.0, y:0.55, w:0.36, h:0.11}, hint:"far away, along the yellow sky", title:"The edge of the desert", body:"Far, far away, blue mountains line the horizon, and the ground in between is flat and empty. It's a desert, the last place you'd expect to find a billiard table. That's exactly why Man Ray put it there."},
      {find:"The artist wrote the painting's name right on it. Can you find it?", cx:0.04, cy:0.95, box:{x:0.0, y:0.92, w:0.1, h:0.06}, title:"La Fortune", body:"In the corner it says La Fortune, French for fortune, or luck. Billiards takes skill, but also a bit of luck: one bounce can change everything. Now look in the other corner. Man Ray signed his name there, with the year: 1938."}
    ],
    done:[
      "Man Ray was an American artist who moved to Paris and joined a group of artists called the Surrealists. They wanted to paint the way things look in dreams: real objects in impossible places.",
      "Here, an ordinary game table floats in an empty desert under a sky full of rainbow clouds. None of it makes sense, and that's the point. Your brain keeps trying to solve the riddle, so you keep on looking.",
      "Man Ray is most famous as a photographer, but he painted La Fortune in 1938. When you see it at the Whitney, find the red ball, count the colored clouds, and come up with your own answer to the riddle."
    ]
  }
];
