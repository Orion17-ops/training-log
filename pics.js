// Simple side-view sketches of each machine, drawn as line art. viewBox 0 0 120 80.
const _P=(inner)=>`<svg viewBox="0 0 120 80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
const FLOOR='<path d="M8 72H112" opacity=".45"/>';
const PICS={
  legpress:_P(FLOOR+'<path d="M22 66H52"/><path d="M26 66L40 32" stroke-width="7"/><path d="M52 66L94 32"/><path d="M48 60L90 26"/><path d="M90 20L106 30L96 48L80 38Z" fill="currentColor" fill-opacity=".18"/><rect x="100" y="54" width="10" height="16" rx="2"/>'),
  legcurl:_P(FLOOR+'<rect x="18" y="30" width="10" height="40" rx="2"/><path d="M36 46H66"/><path d="M38 46L34 22" stroke-width="7"/><path d="M44 36H60" stroke-width="6"/><path d="M66 46L88 58"/><circle cx="90" cy="60" r="6" fill="currentColor" fill-opacity=".18"/>'),
  legext:_P(FLOOR+'<rect x="18" y="30" width="10" height="40" rx="2"/><path d="M38 46H66"/><path d="M40 46L36 22" stroke-width="7"/><path d="M66 46L74 66"/><circle cx="76" cy="67" r="6" fill="currentColor" fill-opacity=".18"/><path d="M80 44L92 30" opacity=".5" stroke-dasharray="3 4"/>'),
  hipthrust:_P(FLOOR+'<rect x="14" y="48" width="44" height="14" rx="4"/><path d="M20 62V72M52 62V72"/><path d="M70 40H94"/><rect x="62" y="32" width="10" height="16" rx="2" fill="currentColor" fill-opacity=".18"/><rect x="92" y="32" width="10" height="16" rx="2" fill="currentColor" fill-opacity=".18"/>'),
  calf:_P(FLOOR+'<rect x="22" y="22" width="10" height="50" rx="2"/><path d="M40 48H68"/><path d="M44 34H68" stroke-width="6"/><rect x="76" y="58" width="22" height="8" rx="2" fill="currentColor" fill-opacity=".18"/><path d="M32 34H44"/>'),
  chestpress:_P(FLOOR+'<path d="M28 52H52"/><path d="M30 52V20" stroke-width="7"/><path d="M40 52V72"/><circle cx="50" cy="24" r="4"/><path d="M50 24L74 36"/><path d="M74 28V46" stroke-width="5"/><rect x="96" y="28" width="12" height="44" rx="2"/><path d="M96 40H108M96 52H108M96 64H108" opacity=".5"/>'),
  shoulderpress:_P(FLOOR+'<path d="M38 54H64"/><path d="M40 54L38 24" stroke-width="7"/><path d="M50 54V72"/><path d="M44 30V16H66V30" stroke-width="5"/><path d="M66 20L84 34"/><rect x="84" y="20" width="10" height="52" rx="2"/>'),
  pecdeck:_P(FLOOR+'<path d="M46 52H70"/><path d="M48 52L46 24" stroke-width="7"/><path d="M58 52V72"/><path d="M58 12L28 20M58 12L90 20"/><path d="M28 20V48M90 20V48" stroke-width="6"/><circle cx="58" cy="12" r="3"/>'),
  cable:_P(FLOOR+'<rect x="50" y="8" width="20" height="64" rx="3"/><path d="M54 24H66M54 34H66M54 44H66M54 54H66" opacity=".5"/><circle cx="60" cy="14" r="4"/><path d="M62 18L90 44"/><path d="M84 40L96 50" stroke-width="5"/>'),
  latpulldown:_P(FLOOR+'<rect x="14" y="10" width="10" height="62" rx="2"/><path d="M24 12H72"/><circle cx="72" cy="14" r="4"/><path d="M72 18V30"/><path d="M44 32Q72 26 100 32" stroke-width="5"/><path d="M58 44H78" stroke-width="6"/><path d="M56 58H84"/><path d="M70 58V72"/>'),
  seatedrow:_P(FLOOR+'<rect x="14" y="10" width="10" height="62" rx="2"/><circle cx="26" cy="58" r="4"/><path d="M30 56L50 50"/><path d="M50 44V56" stroke-width="5"/><path d="M36 44L42 68" stroke-width="6"/><path d="M60 54H84"/><path d="M72 54V72"/><path d="M82 54V34" stroke-width="6"/>'),
  assistedpullup:_P(FLOOR+'<path d="M30 10V72M90 10V72"/><path d="M22 10H98"/><path d="M38 10V18M82 10V18" stroke-width="5"/><rect x="46" y="44" width="28" height="8" rx="2" fill="currentColor" fill-opacity=".18"/><path d="M60 52V72"/><path d="M98 30V72" opacity=".5"/>'),
  dbbench:_P(FLOOR+'<rect x="24" y="46" width="62" height="10" rx="3"/><path d="M32 56V72M78 56V72"/><path d="M42 28H68"/><rect x="34" y="20" width="9" height="16" rx="2" fill="currentColor" fill-opacity=".18"/><rect x="67" y="20" width="9" height="16" rx="2" fill="currentColor" fill-opacity=".18"/>'),
  dbincline:_P(FLOOR+'<rect x="50" y="48" width="36" height="10" rx="3"/><path d="M26 30L50 48" stroke-width="8"/><path d="M60 58V72M80 58V72"/><path d="M40 16H62" /><rect x="33" y="8" width="8" height="16" rx="2" fill="currentColor" fill-opacity=".18"/><rect x="61" y="8" width="8" height="16" rx="2" fill="currentColor" fill-opacity=".18"/>'),
  dumbbell:_P('<path d="M36 40H84"/><rect x="18" y="24" width="12" height="32" rx="3" fill="currentColor" fill-opacity=".18"/><rect x="30" y="30" width="8" height="20" rx="2"/><rect x="90" y="24" width="12" height="32" rx="3" fill="currentColor" fill-opacity=".18"/><rect x="82" y="30" width="8" height="20" rx="2"/>'),
  kettlebell:_P(FLOOR+'<circle cx="60" cy="50" r="19" fill="currentColor" fill-opacity=".18"/><path d="M44 36A16 16 0 0 1 76 36" stroke-width="5"/>'),
  box:_P(FLOOR+'<path d="M30 34H78V68H30Z" fill="currentColor" fill-opacity=".12"/><path d="M78 34L94 24V58L78 68"/><path d="M30 34L46 24H94"/>'),
  sled:_P(FLOOR+'<path d="M18 62H98"/><path d="M26 62L18 70M90 62L98 70"/><path d="M36 62V18M48 62V18"/><path d="M36 18H48"/><path d="M72 62V30"/><circle cx="72" cy="46" r="11" fill="currentColor" fill-opacity=".18"/>'),
  mat:_P(FLOOR+'<rect x="14" y="50" width="92" height="14" rx="6" fill="currentColor" fill-opacity=".14"/><path d="M22 57H98" opacity=".5"/>'),
  backext:_P(FLOOR+'<path d="M44 72V44"/><path d="M46 46L84 20L90 28L52 54Z" fill="currentColor" fill-opacity=".18"/><circle cx="30" cy="56" r="5"/><circle cx="30" cy="68" r="5"/><path d="M30 56V68"/>'),
  abcrunch:_P(FLOOR+'<path d="M40 54H66"/><path d="M42 54L40 22" stroke-width="7"/><path d="M52 54V72"/><path d="M40 18L70 24"/><path d="M68 18V36" stroke-width="7"/><rect x="86" y="24" width="10" height="48" rx="2"/>'),
  bike:_P(FLOOR+'<path d="M22 72H98"/><circle cx="56" cy="56" r="9"/><path d="M56 56L66 48"/><path d="M62 32H80"/><path d="M72 32L74 52L56 56"/><path d="M38 22H30"/><path d="M38 22L46 56"/><path d="M46 56L74 52"/>'),
  stairs:_P(FLOOR+'<path d="M24 72V18H42"/><path d="M40 68H54V56H68V44H82V32H96V20"/><path d="M96 20V72" opacity=".5"/>'),
  treadmill:_P(FLOOR+'<rect x="24" y="58" width="80" height="8" rx="4" fill="currentColor" fill-opacity=".18"/><path d="M30 58L42 20"/><rect x="38" y="12" width="26" height="10" rx="3"/><path d="M100 58V66" opacity=".5"/>'),
  rower:_P(FLOOR+'<path d="M20 62L100 56"/><circle cx="28" cy="48" r="11"/><rect x="56" y="48" width="14" height="7" rx="2" fill="currentColor" fill-opacity=".18"/><path d="M44 44L50 60" stroke-width="6"/><path d="M38 44L68 40"/><path d="M66 34V46" stroke-width="5"/><path d="M96 56V72M26 62V72"/>'),
};
const EXPIC={
  "Leg Press":"legpress","Seated Leg Curl":"legcurl","Leg Extension":"legext","Hip Thrust":"hipthrust","Seated Calf Raise":"calf",
  "Plank":"mat","Bird Dog":"mat","Dead Bug":"mat","Side Plank":"mat",
  "Chest Press Machine":"chestpress","Shoulder Press Machine":"shoulderpress","Pec Deck":"pecdeck","Rear Delt Fly":"pecdeck",
  "Triceps Pushdown":"cable","Pallof Press":"cable","Face Pull":"cable",
  "Lateral Raise":"dumbbell","Biceps Curl":"dumbbell","Hammer Curl":"dumbbell","Overhead Triceps Extension":"dumbbell","Dumbbell Shrug":"dumbbell",
  "Farmer's Carry":"dumbbell","Suitcase Carry":"dumbbell","Dumbbell Romanian Deadlift":"dumbbell","Goblet Squat":"dumbbell","Dumbbell Reverse Lunge":"dumbbell",
  "Ab Crunch Machine":"abcrunch","Lat Pulldown":"latpulldown","Seated Cable Row":"seatedrow","Assisted Pull-up":"assistedpullup","Back Extension":"backext",
  "Dumbbell Bench Press":"dbbench","One-Arm Dumbbell Row":"dbbench","Dumbbell Incline Press":"dbincline","Dumbbell Shoulder Press":"dbincline","Chest-Supported Row":"dbincline",
  "Kettlebell Deadlift":"kettlebell","Step-Up":"box","Sled Push":"sled",
};
// What to type into the search so the photos match the Life Time floor
const EXSEARCH={
  "Leg Press":"leg press machine gym","Seated Leg Curl":"seated leg curl machine","Leg Extension":"leg extension machine","Hip Thrust":"barbell hip thrust bench",
  "Seated Calf Raise":"seated calf raise machine","Chest Press Machine":"seated chest press machine","Shoulder Press Machine":"seated shoulder press machine",
  "Pec Deck":"pec deck fly machine","Rear Delt Fly":"reverse pec deck rear delt machine","Triceps Pushdown":"cable rope triceps pushdown","Pallof Press":"pallof press cable",
  "Face Pull":"cable face pull rope","Ab Crunch Machine":"seated ab crunch machine","Lat Pulldown":"lat pulldown machine","Seated Cable Row":"seated cable row machine",
  "Assisted Pull-up":"assisted pull up machine","Back Extension":"45 degree back extension bench","Kettlebell Deadlift":"kettlebell deadlift","Step-Up":"plyo box step up dumbbells",
  "Sled Push":"torque fitness sled push turf","Dumbbell Incline Press":"incline dumbbell press","Chest-Supported Row":"chest supported dumbbell row incline bench",
  "One-Arm Dumbbell Row":"one arm dumbbell row bench","Goblet Squat":"goblet squat dumbbell","Dumbbell Romanian Deadlift":"dumbbell romanian deadlift",
};
function picFor(name){const k=EXPIC[name];return k&&PICS[k]?PICS[k]:PICS.dumbbell}
function searchFor(name){return "https://www.google.com/search?tbm=isch&q="+encodeURIComponent(EXSEARCH[name]||(name+" exercise gym"))}
