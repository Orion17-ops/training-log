// ---------- PROGRAM ----------
const MOBILITY = [
  ["Half-kneeling hip flexor stretch", "30 sec each side, twice. Squeeze the glute of the back leg, tuck the tailbone, then lean forward a little. Stretch is in the front of the back hip, not the lower back."],
  ["90/90 hip switches", "10 slow switches. Sit with one leg bent in front and one bent to the side, rotate knees to the other side. Keep the chest tall."],
  ["Cat-cow", "10 slow reps on hands and knees. Round the whole back, then arch. Moves the pelvis through its range."],
  ["Glute bridge", "15 reps. Heels close to hips, push through heels, squeeze glutes at top, ribs down. Wakes up the glutes so the hip flexors can relax."],
  ["Dead bug", "8 each side. On your back, lower back pressed flat into the floor the whole time. Opposite arm and leg lower slowly. If the back arches, shorten the range."],
  ["Leg swings", "10 front to back, 10 side to side, each leg. Hold the wall. Controlled, not flung."],
];

const EX = {
  "Leg Press": {d:"Lower", target:"3 × 10 to 12", inc:"10 to 20 lb",
    machine:"Big angled seat with a flat platform for your feet, in the strength zone. Crosstown has both a plate-loaded one (you load 45 lb plates) and a selectorized one with a pin stack. Start on the pin stack.",
    cues:["Feet shoulder width, middle of the platform, toes slightly out.","Lower back and hips stay glued to the pad; if your hips roll up off the pad, you went too deep.","Lower until knees are about 90 degrees, then push through your heels.","Do not lock your knees at the top; keep a slight bend.","Knees track over the toes, never caving inward."]},
  "Seated Leg Curl": {d:"Lower", target:"3 × 12", inc:"5 to 10 lb",
    machine:"Sit upright, legs out straight on a pad, a second pad across your lower shins. You pull your heels down and under the seat.",
    cues:["Lap pad snug on your thighs so hips cannot lift.","Ankle pad just above the heels.","Curl all the way, pause one second, return over two seconds.","Toes pointed toward you (flexed) hits the hamstrings harder."]},
  "Leg Extension": {d:"Lower", target:"3 × 12", inc:"5 to 10 lb",
    machine:"Seated, padded bar across the front of your ankles. You straighten your knees against it.",
    cues:["Back flat against the pad, knees lined up with the machine's pivot dot.","Straighten fully and squeeze the thigh for one second at the top.","Lower slowly; do not let the stack slam.","No swinging the body or gripping the handles for help."]},
  "Hip Thrust": {d:"Lower", target:"3 × 12", inc:"10 lb (start with body weight, then a dumbbell on the lap)",
    machine:"A bench and your own body, or the hip thrust machine if the floor has one (belt across the hips, feet on a platform).",
    cues:["Upper back on the bench edge, feet flat, shins vertical at the top.","Chin tucked, ribs down, eyes forward, not at the ceiling.","Drive through heels, squeeze glutes hard at the top; thighs and torso make a flat table.","Stop at the top; do not arch the lower back to go higher."]},
  "Seated Calf Raise": {d:"Lower", target:"3 × 15", inc:"10 lb",
    machine:"Seat with a knee pad and a small step for the balls of your feet. Or stand on the edge of a step on the leg press platform.",
    cues:["Full range: heels drop below the step, then all the way up on the toes.","Pause one second at the top.","Slow on the way down."]},
  "Dead Bug": {d:"Core", target:"3 × 8 each side", inc:"slow it down, then hold a light plate over the chest",
    machine:"Floor, on your back.",
    cues:["Lower back pressed flat into the floor the entire set; that is the whole exercise.","Arms straight up, knees over hips. Lower the opposite arm and leg slowly, exhale on the way down.","If the back arches, shorten the range or only move the legs.","This teaches the core to hold the pelvis still while the hips move, which is exactly what tight hip flexors have been stopping."]},
  "Plank": {d:"Core", target:"3 × 20 to 40 sec", inc:"5 sec", timed:true,
    machine:"Floor. Forearms and toes.",
    cues:["Elbows under shoulders, squeeze glutes, tuck the tailbone slightly.","Body is one straight line; hips neither sag nor pike up.","Breathe. If the lower back starts to ache, stop the set and drop to the knees."]},
  "Bird Dog": {d:"Core", target:"3 × 8 each side", inc:"hold longer",
    machine:"Floor, hands and knees.",
    cues:["Reach opposite arm and leg out; hips stay level like a glass of water is on your lower back.","Pause two seconds, return slowly.","Small range beats a big sloppy one."]},
  "Chest Press Machine": {d:"Push", target:"3 × 10 to 12", inc:"5 lb",
    machine:"Seated, two handles at chest height that you push forward. Seat height adjusts with a lever on the side.",
    cues:["Set the seat so the handles line up with the middle of your chest, not your shoulders.","Pull shoulder blades back and down into the pad before the first rep and keep them there.","Elbows about 45 degrees from your sides, not flared straight out.","Press to almost straight, then return slowly until the handles are at your chest.","Feet flat, head on the pad, no shrugging."]},
  "Shoulder Press Machine": {d:"Push", target:"3 × 10", inc:"5 lb",
    machine:"Seated, handles at shoulder height that you push straight up.",
    cues:["Set the seat so the handles start level with your ears or a little below.","Ribs down, lower back against the pad; do not arch to push harder.","Press up, stop just short of locked elbows, lower slowly.","If your shoulders pinch, use the neutral (palms facing) handles."]},
  "Pec Deck": {d:"Push", target:"3 × 12", inc:"5 lb",
    machine:"Seated, two arm pads or handles out to the sides that you bring together in front of you.",
    cues:["Handles at chest height, slight bend in the elbows the whole time.","Squeeze the chest together for one second at the front.","Open slowly and only as far as the shoulders feel comfortable."]},
  "Triceps Pushdown": {d:"Push", target:"3 × 12", inc:"5 lb",
    machine:"Cable Motion station with a rope or straight bar clipped to the top pulley.",
    cues:["Elbows pinned to your sides; they do not move forward or back.","Push down until arms are straight, spread the rope at the bottom.","Control the return to chest height.","Stand tall, slight lean forward, no shrugging."]},
  "Lateral Raise": {d:"Push", target:"3 × 12 to 15", inc:"2.5 to 5 lb",
    machine:"Light dumbbells or the lateral raise machine (pads under the elbows).",
    cues:["Lift out to the sides to shoulder height, like pouring two pitchers.","Slight bend in the elbows, lead with the elbows.","Lower slowly. Light weight; if you are swinging, it is too heavy."]},
  "Pallof Press": {d:"Core", target:"3 × 10 each side", inc:"5 lb",
    machine:"Cable Motion station, single handle set at chest height. You stand sideways to it.",
    cues:["Hold the handle at your chest with both hands, feet shoulder width.","Press straight out in front of you and hold two seconds; the cable tries to twist you and you refuse.","Bring it back. Hips and shoulders stay square the whole time.","This is the single best exercise for your core right now; take it seriously."]},
  "Ab Crunch Machine": {d:"Core", target:"3 × 12", inc:"5 lb",
    machine:"Seated, pads on your chest or handles behind your head, feet under rollers. You curl forward.",
    cues:["Curl the ribs toward the hips; think of shortening the front of your body.","Do not pull with the arms or yank the neck.","Slow return."]},
  "Lat Pulldown": {d:"Pull", target:"3 × 10 to 12", inc:"5 to 10 lb",
    machine:"Seated, wide bar overhead on a cable, knee pads to hold you down.",
    cues:["Grip a bit wider than shoulders, knee pad snug.","Lean back slightly (about 15 degrees), chest up.","Pull the bar to the top of your chest by driving the elbows down and back.","Never behind the neck.","Let the arms go all the way up, slow and controlled, shoulders rising at the top."]},
  "Seated Cable Row": {d:"Pull", target:"3 × 10 to 12", inc:"5 to 10 lb",
    machine:"Seated row machine (pin stack, chest pad) or a Cable Motion station with the pulley set low and a V handle.",
    cues:["Knees slightly bent, torso upright, chest tall.","Pull the handle to your belly button, squeezing the shoulder blades together.","No rocking back and forth; the torso stays still.","Let the shoulder blades spread forward at the end of each rep."]},
  "Assisted Pull-up": {d:"Pull", target:"3 × 6 to 8", inc:"lower the assist 10 lb",
    machine:"Tall machine with a knee platform. More weight on the stack means more help.",
    cues:["Start with enough assist that you can do 8 clean reps.","Pull chest toward the bar, elbows down.","Lower all the way, slow.","Progress means less assist over time, which is the opposite of other machines."]},
  "Rear Delt Fly": {d:"Pull", target:"3 × 12 to 15", inc:"5 lb",
    machine:"The pec deck with the arms set behind you (or sit facing the pad). You push the handles back and out.",
    cues:["Handles at shoulder height, slight bend in elbows.","Lead with the elbows out and back, squeeze between the shoulder blades.","Light weight. This is a small muscle."]},
  "Face Pull": {d:"Pull", target:"3 × 15", inc:"5 lb",
    machine:"Cable Motion station, rope set at about face height.",
    cues:["Pull the rope toward your face, hands finishing beside your ears, elbows high.","Squeeze the back of the shoulders.","Great for posture; keeps the shoulders healthy under all the pressing."]},
  "Biceps Curl": {d:"Pull", target:"3 × 12", inc:"5 lb",
    machine:"Dumbbells or the preacher curl machine.",
    cues:["Elbows stay at your sides; only the forearm moves.","Lower over two seconds.","No swinging the back to get the weight up."]},
  "Back Extension": {d:"Core", target:"3 × 12", inc:"hold a plate",
    machine:"The 45 degree bench with pads for the hips and ankle rollers.",
    cues:["Pad just below the hip bones so you can hinge.","Lower with a flat back, come up until the body is straight, no higher.","Squeeze the glutes at the top; this is a glute and hamstring exercise as much as a back one."]},
  "Farmer's Carry": {d:"Core", target:"3 × 40 steps", inc:"5 lb each hand",
    machine:"Two heavy dumbbells or kettlebells.",
    cues:["Stand tall, shoulders back, ribs down.","Walk slow and controlled; do not lean to either side.","Grip is often the limit; that is fine."]},
  "Goblet Squat": {d:"Lower", target:"3 × 10", inc:"5 lb",
    machine:"One dumbbell held vertically against your chest.",
    cues:["Feet shoulder width, toes slightly out.","Sit down between your heels, elbows inside the knees at the bottom.","Chest up, heels down the whole time.","Only go as deep as you can with the heels down and back flat."]},
  "Dumbbell Romanian Deadlift": {d:"Lower", target:"3 × 10", inc:"5 lb",
    machine:"Two dumbbells.",
    cues:["Soft knees, push the hips straight back like closing a car door with your butt.","Dumbbells slide down the thighs; back stays flat, shoulders pulled back.","Stop when you feel the hamstrings stretch (around mid shin), then squeeze the glutes to stand.","If the lower back rounds, you went too low."]},
  "Chest-Supported Row": {d:"Pull", target:"3 × 12", inc:"5 lb",
    machine:"Lie chest down on an incline bench with dumbbells, or the row machine with a chest pad.",
    cues:["Chest stays on the pad; no lifting the torso.","Pull elbows back, squeeze shoulder blades, lower slowly."]},
  "Dumbbell Bench Press": {d:"Push", target:"3 × 10", inc:"5 lb",
    machine:"Flat bench, two dumbbells.",
    cues:["Feet flat, shoulder blades pinched back, slight arch in the upper back only.","Lower to chest level with elbows at about 45 degrees.","Press up and slightly in; do not clang the dumbbells together."]},
  "Dumbbell Shoulder Press": {d:"Push", target:"3 × 10", inc:"5 lb per hand",
    machine:"Two dumbbells, seated on an adjustable bench set upright (about 85 degrees).",
    cues:["Start with the dumbbells at ear height, palms forward or turned slightly in.","Press up and slightly together, stop just short of locked elbows.","Ribs down, lower back on the pad; do not arch to push harder.","Lower slowly to ear height. Harder than the machine because you have to balance it; start 10 lb lighter per hand than you think."]},
  "Dumbbell Incline Press": {d:"Push", target:"3 × 10", inc:"5 lb per hand",
    machine:"Adjustable bench set to 30 degrees, two dumbbells.",
    cues:["Shoulder blades pinched back and down on the bench, feet flat.","Lower until the dumbbells are level with the upper chest, elbows about 45 degrees out.","Press up and slightly in. Upper chest and front shoulder."]},
  "Dumbbell Shrug": {d:"Push", target:"3 × 12", inc:"5 lb per hand",
    machine:"Two heavier dumbbells, standing.",
    cues:["Shrug straight up toward the ears, pause one second, lower slowly.","No rolling the shoulders; straight up and down only.","Upper traps and grip."]},
  "Hammer Curl": {d:"Pull", target:"3 × 12", inc:"5 lb per hand",
    machine:"Two dumbbells, palms facing each other.",
    cues:["Elbows at your sides, curl both up with thumbs on top.","Lower over two seconds.","Hits the forearm and the side of the biceps; good for grip."]},
  "Overhead Triceps Extension": {d:"Push", target:"3 × 12", inc:"5 lb",
    machine:"One dumbbell held in both hands overhead, seated or standing.",
    cues:["Elbows point forward and stay close to the head.","Lower the dumbbell behind the head until the forearms touch the biceps, then press up.","Ribs down; do not arch the lower back as you lower it."]},
  "One-Arm Dumbbell Row": {d:"Pull", target:"3 × 10 each side", inc:"5 lb",
    machine:"One dumbbell, one hand and one knee on a flat bench.",
    cues:["Back flat, like a table; the other hand braces on the bench.","Pull the elbow up and back toward the hip, not out to the side.","Squeeze the shoulder blade at the top, lower slowly to a full stretch.","No twisting the torso to lift it."]},
  "Kettlebell Deadlift": {d:"Lower", target:"3 × 10", inc:"next kettlebell up",
    machine:"One kettlebell on the floor between your feet.",
    cues:["Feet hip width, kettlebell between the arches.","Hips back, chest up, flat back, grab the handle with both hands.","Stand up by driving the floor away with your feet; the arms are just hooks.","Squeeze glutes at the top, do not lean back. Lower by pushing the hips back.","The safest way to learn the hinge; you earn the heavier barbell version later."]},
  "Dumbbell Reverse Lunge": {d:"Lower", target:"3 × 8 each side", inc:"5 lb per hand",
    machine:"Two dumbbells at your sides, or none to start.",
    cues:["Step back, lower until the back knee nearly touches the floor.","Front shin stays vertical, front heel down, chest up.","Push through the front heel to stand. Stepping back is kinder to the knees than stepping forward.","Hold the wall with one hand if balance is a problem at first."]},
  "Step-Up": {d:"Lower", target:"3 × 8 each side", inc:"5 lb per hand or a taller box",
    machine:"A plyo box or bench, knee height or a bit below. Dumbbells optional.",
    cues:["Whole foot on the box, drive through that heel, stand all the way up.","Do not push off the floor foot; the top leg does the work.","Lower slowly under control. Functional strength for stairs and getting up from the floor."]},
  "Sled Push": {d:"Lower", target:"3 × 20 yards", inc:"one plate",
    machine:"The Torque sled on the turf in the functional zone. Load it with plates.",
    cues:["Arms straight or slightly bent on the high handles, body leaned forward in one line.","Short, quick steps, drive through the balls of the feet.","Breathe. Zero skill required and almost impossible to do wrong, which is why it is here. Also counts as cardio."]},
  "Suitcase Carry": {d:"Core", target:"3 × 40 steps each side", inc:"5 lb",
    machine:"One heavy dumbbell or kettlebell in one hand.",
    cues:["Stand tall, shoulders level; the weight tries to tip you and you refuse.","Walk slow and controlled, switch hands, repeat.","This is the love handle muscle (obliques) doing its real job, which is stopping you from tipping, not twisting."]},
  "Side Plank": {d:"Core", target:"3 × 20 sec each side", inc:"5 sec", timed:true,
    machine:"Floor.",
    cues:["Elbow under shoulder, hips lifted so the body is one line.","Knees down to start if the full version is too much.","Push the hip up; do not let it sag."]},
};

const DAYS = {
  A:{name:"Chest and arms, plus core", note:"Monday. Machine chest press first while you are fresh, then the dumbbell version, then arms. Keep shoulder blades back on every press. Core: Pallof press and plank.",
     ex:["Chest Press Machine","Dumbbell Bench Press","Pec Deck","Triceps Pushdown","Biceps Curl","Pallof Press","Plank"]},
  B:{name:"Lower body (machines), plus core", note:"Tuesday. Leg machines, heaviest loads of the week. Core work that holds your pelvis still. Hips will feel it tomorrow; that is the point.",
     ex:["Leg Press","Seated Leg Curl","Leg Extension","Hip Thrust","Seated Calf Raise","Dead Bug","Bird Dog"]},
  C:{name:"Back, plus core", note:"Wednesday. Lats, upper back, rear shoulders, with one dumbbell row for each side on its own. Pulling fixes posture. Core: crunch machine and side plank.",
     ex:["Lat Pulldown","Seated Cable Row","One-Arm Dumbbell Row","Assisted Pull-up","Rear Delt Fly","Face Pull","Ab Crunch Machine","Side Plank"]},
  D:{name:"Shoulders and arms (dumbbells), plus core", note:"Thursday. Free weight day for the upper body: lighter loads, more balance work. Chest and back got Monday and Wednesday, so today is the shoulders and the arms. Core: suitcase carry and back extension.",
     ex:["Dumbbell Shoulder Press","Lateral Raise","Dumbbell Incline Press","Dumbbell Shrug","Hammer Curl","Overhead Triceps Extension","Suitcase Carry","Back Extension"]},
  E:{name:"Lower body (free weights) and functional, plus core", note:"Friday. The hinge, the lunge, the step, the carry, the sled: strength you use outside the gym. Lighter than Tuesday, more skill. Core: farmer's carry and dead bug.",
     ex:["Goblet Squat","Kettlebell Deadlift","Dumbbell Reverse Lunge","Dumbbell Romanian Deadlift","Step-Up","Sled Push","Farmer's Carry","Dead Bug"]},
};
const ORDER = ["A","B","C","D","E"];

// Aerobic sessions. Each is one hour. Effort is 1 to 10: 5 means talking in short sentences, 7 means a few words at a time.
const CARDIO = {
  A:{title:"Steady ride, 60 min", why:"The base session. Long and easy is what moves visceral fat and insulin sensitivity.",
     steps:["5 min easy spin, effort 3, to warm up","50 min steady, effort 5, pick a level where your breathing is audible but you can still talk","5 min easy spin to cool down"]},
  B:{title:"Mixed machines, 60 min", why:"Legs are already worked, so this day builds the stair and treadmill time gradually. Follow the week table in the Guide for the split.",
     steps:["Bike: weeks 1 to 2, 60 min; later weeks per the table (45, 40, 35, 30)","Stair climber: 0 min in weeks 1 to 2, then 5, 8, 10, 12 to 15; slow steps, effort 6, hands resting on the rails, not gripping","Treadmill: 0 in weeks 1 to 2, then 10, 12, 15, 15 to 20; walk 3.0 mph, add incline (3 to 5 percent) before adding speed","Bike absorbs whatever is left to reach 60"]},
  C:{title:"Bike intervals, 60 min", why:"Short harder efforts improve fitness faster than steady riding alone and have a strong effect on glucose. Still mostly easy minutes.",
     steps:["10 min easy, effort 3 to 4","8 rounds: 1 min at effort 7 (breathing hard, a few words at a time), then 3 min at effort 4. That is 32 min","18 min steady at effort 5 to fill the hour","If a round feels like effort 9, the hard minute is too hard; back off the resistance next round"]},
  D:{title:"Rower plus ride, 60 min", why:"The rower trains the back and arms aerobically and takes the pressure off the legs. Upper body day, upper body cardio.",
     steps:["Rower: 10 min easy, effort 4 to 5; legs push first, then lean back, then pull the handle. Reverse on the way forward","Bike: 45 min steady, effort 5","5 min easy spin. (Fan bike or SkiErg can swap in for the rower any week.)"]},
  E:{title:"Sled plus easy ride, 60 min", why:"Sled pushes already raised the heart rate. The rest is recovery pace so Friday's legs come back by Monday.",
     steps:["Sled pushes from the lifting block count for 5 min","Bike or recumbent: 50 min easy, effort 4 to 5; this is the one day the rule is \"do not push\"","5 min easy spin"]},
};

// ---------- STATE ----------
let db=null, sessions=[], editingId=null, currentDay="A";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const todayStr=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};

// ---------- SANITIZE (stored and imported data is untrusted) ----------
const numOr=(v)=>(typeof v==="number"&&isFinite(v))?v:(v==null||v===""?null:(isFinite(Number(v))?Number(v):null));
const str=(v,max)=>typeof v==="string"?v.slice(0,max):"";
function cleanSession(s){
  if(!s||typeof s!=="object")return null;
  const id=str(s.id,60);if(!/^[0-9A-Za-z._-]{4,60}$/.test(id))return null;
  const date=str(s.date,10);if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return null;
  const day=DAYS[s.day]?s.day:"A";
  const ex={};if(s.exercises&&typeof s.exercises==="object"){for(const n of Object.keys(s.exercises)){if(!EX[n])continue;const arr=Array.isArray(s.exercises[n])?s.exercises[n]:[];ex[n]=[0,1,2].map(k=>{const st=arr[k]||{};return {w:numOr(st.w),r:numOr(st.r),done:!!st.done}})}}
  const hab=s.habits&&typeof s.habits==="object"?s.habits:{};
  return {id,date,day,gPre:numOr(s.gPre),gPost:numOr(s.gPost),bw:numOr(s.bw),sauna:numOr(s.sauna),steam:numOr(s.steam),
    bike:numOr(s.bike),stair:numOr(s.stair),tread:numOr(s.tread),other:numOr(s.other),rpe:numOr(s.rpe),
    bikeType:["Recumbent","Upright","Stages cycle"].includes(s.bikeType)?s.bikeType:"Recumbent",level:str(s.level,40),
    mobility:MOBILITY.map((m,i)=>!!(Array.isArray(s.mobility)&&s.mobility[i])),exercises:ex,notes:str(s.notes,2000),
    habits:{protein:!!hab.protein,walk:!!hab.walk,meal:!!hab.meal},savedAt:str(s.savedAt,40)};
}
function cleanList(arr){return (Array.isArray(arr)?arr:[]).map(cleanSession).filter(Boolean)}
const LS="ib-training-log";
function lsLoad(){try{return cleanList(JSON.parse(localStorage.getItem(LS)||"[]"))}catch(e){return []}}
function lsSave(){try{localStorage.setItem(LS,JSON.stringify(sessions))}catch(e){}}
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("show"),2200)}
function num(id){const v=$(id).value.trim();return v===""?null:Number(v)}

// ---------- TODAY VIEW ----------
function lastFor(ex, excludeId){
  const list=sessions.filter(s=>s.id!==excludeId&&s.exercises&&s.exercises[ex]&&s.exercises[ex].some(st=>st.w!=null||st.r!=null)).sort((a,b)=>a.date<b.date?1:-1);
  return list.length?{date:list[0].date,sets:list[0].exercises[ex]}:null;
}
function fmtSets(sets){return sets.filter(s=>s.w!=null||s.r!=null).map(s=>(s.w??"bw")+"×"+(s.r??"?")).join(", ")}
function suggestNext(){
  const done=sessions.filter(s=>ORDER.includes(s.day)).sort((a,b)=>a.date<b.date?1:-1);
  if(!done.length) return "A";
  const i=ORDER.indexOf(done[0].day);return ORDER[(i+1)%ORDER.length];
}
function renderMobility(checked){
  $("#mobList").innerHTML=MOBILITY.map((m,i)=>`<label class="check"><input type="checkbox" id="mob${i}" ${checked&&checked[i]?"checked":""}><span><span class="t">${m[0]}</span><br><span class="d">${m[1]}</span></span></label>`).join("");
}
function renderExercises(day, data){
  const d=DAYS[day];
  $("#dayNote").textContent=d.name+". "+d.note;
  $("#exList").innerHTML=d.ex.map((name,i)=>{
    const e=EX[name], last=lastFor(name,editingId), prev=data&&data[name];
    const sets=[0,1,2].map(k=>{
      const src=prev&&prev[k]?prev[k]:(last&&last.sets[k]?last.sets[k]:{});
      const w=src.w??"", r=prev&&prev[k]?(prev[k].r??""):"";
      const done=prev&&prev[k]&&prev[k].done;
      return `<div class="set"><span class="n">${k+1}</span><input type="number" inputmode="decimal" step="0.5" placeholder="lb" aria-label="${name} set ${k+1} weight" data-ex="${name}" data-k="${k}" data-f="w" value="${w}"><span class="x">×</span><input type="number" inputmode="numeric" placeholder="${e.timed?"sec":"reps"}" aria-label="${name} set ${k+1} reps" data-ex="${name}" data-k="${k}" data-f="r" value="${r}"><button type="button" class="done" aria-pressed="${done?"true":"false"}" data-ex="${name}" data-k="${k}" aria-label="mark set done">✓</button></div>`;
    }).join("");
    return `<div class="ex"><div class="head"><div class="pic">${picFor(name)}</div><div class="grow"><div class="name">${i+1}. ${name}</div><div class="target">${e.target} · add ${e.inc} when you own the top of the range</div><div class="last">${last?"Last: "+fmtSets(last.sets):"First time"}</div><a class="find" href="${searchFor(name)}" target="_blank" rel="noopener">See photos</a></div></div>
      <div class="sets">${sets}</div>
      <details><summary>Machine and form cues</summary><p class="machine">${e.machine}</p><ul class="cues">${e.cues.map(c=>"<li>"+c+"</li>").join("")}</ul></details></div>`;
  }).join("");
  const c=CARDIO[day];
  $("#cardioPlan").innerHTML=`<div class="name" style="font-family:var(--display);font-size:1.25rem;font-weight:700">${c.title}</div><p class="note">${c.why}</p><ol class="cues">${c.steps.map(s=>"<li>"+s+"</li>").join("")}</ol>`;
  $("#cardioNote").textContent="Log the minutes you actually did below. The total should reach 60.";
}
function readSets(){
  const out={};
  $$("#exList input[data-ex]").forEach(inp=>{
    const n=inp.dataset.ex,k=+inp.dataset.k;out[n]=out[n]||[{},{},{}];
    const v=inp.value.trim();out[n][k][inp.dataset.f]=v===""?null:Number(v);
  });
  $$("#exList button.done").forEach(b=>{out[b.dataset.ex][+b.dataset.k].done=b.getAttribute("aria-pressed")==="true"});
  return out;
}
function glucoseCheck(){
  const g=num("#gPre"), el=$("#glucoseMsg");
  if(g==null){el.hidden=true;return}
  el.hidden=false;el.className="banner";
  if(g<70){el.className="banner bad";el.textContent="Low. Treat it now (15 to 20 g fast carbs), wait 15 minutes, recheck. No sauna, no workout until you are above 100."}
  else if(g<100){el.className="banner";el.textContent="On the low side. Eat 15 to 20 g of carbs and wait 15 minutes before the sauna. Keep glucose tabs with you."}
  else if(g<=250){el.className="banner good";el.textContent="Good range to train. Carry fast sugar, drink water before the sauna."}
  else{el.className="banner bad";el.textContent="High. If you feel sick, nauseous, or have ketones, skip today and contact your clinic. Otherwise go easy, hydrate, and recheck after."}
}
function proteinTarget(){
  let w=num("#bw");
  if(w==null){const last=[...sessions].filter(s=>s.bw!=null).sort((a,b)=>a.date<b.date?1:-1)[0];w=last?last.bw:null}
  $("#protTarget").textContent=w?Math.round(w*0.4536*1.6/5)*5+" g":"about 150 g";
}
function cardioTotal(){
  const t=(num("#bike")||0)+(num("#stair")||0)+(num("#tread")||0)+(num("#other")||0);
  $("#cardioTotal").innerHTML = t? `Total: <b>${t} min</b> ${t>=60?'<span class="pill good">hour done</span>':'<span class="pill warn">'+(60-t)+' to go</span>'}`:"";
}
function setDay(day,data){
  currentDay=day;
  $$("#daySeg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.day===day?"true":"false"));
  renderExercises(day,data);
}
function fillForm(s){
  editingId=s?s.id:null;
  $("#sDate").value=s?s.date:todayStr();
  ["gPre","bw","sauna","bike","stair","tread","other","rpe","gPost","steam"].forEach(k=>{$("#"+k).value=s&&s[k]!=null?s[k]:""});
  $("#level").value=s&&s.level?s.level:"";$("#notes").value=s&&s.notes?s.notes:"";
  $("#bikeType").value=s&&s.bikeType?s.bikeType:"Recumbent";
  const hab=(s&&s.habits)||{};$("#habProtein").checked=!!hab.protein;$("#habWalk").checked=!!hab.walk;$("#habMeal").checked=!!hab.meal;
  proteinTarget();
  renderMobility(s&&s.mobility);
  setDay(s?s.day:suggestNext(), s&&s.exercises);
  glucoseCheck();cardioTotal();
  const en=$("#editingNote");en.hidden=!s;if(s)en.textContent="Editing the session from "+s.date+". Save overwrites it.";
  const nu=$("#nextUp");
  if(!s){const n=suggestNext();nu.hidden=false;nu.className="banner good";nu.textContent="Next in the rotation: Day "+n+" ("+DAYS[n].name+"). Switch it if your body says otherwise."}else nu.hidden=true;
  window.scrollTo({top:0});
}
function collect(){
  const id=editingId||($("#sDate").value||todayStr())+"-"+Math.random().toString(36).slice(2,7);
  return {id, date:$("#sDate").value||todayStr(), day:currentDay,
    gPre:num("#gPre"), gPost:num("#gPost"), bw:num("#bw"), sauna:num("#sauna"), steam:num("#steam"),
    bike:num("#bike"), stair:num("#stair"), tread:num("#tread"), other:num("#other"), bikeType:$("#bikeType").value, rpe:num("#rpe"), level:$("#level").value.trim(),
    mobility:MOBILITY.map((m,i)=>$("#mob"+i).checked), exercises:readSets(), notes:$("#notes").value.trim(),
    habits:{protein:$("#habProtein").checked, walk:$("#habWalk").checked, meal:$("#habMeal").checked}, savedAt:new Date().toISOString()};
}
async function save(){
  const s=collect();
  const i=sessions.findIndex(x=>x.id===s.id);if(i>=0)sessions[i]=s;else sessions.push(s);
  lsSave();
  $("#saveBtn").disabled=true;
  toast("Saved");
  $("#saveBtn").disabled=false;
  fillForm(null);renderHistory();renderProgress();
}
async function remove(id){
  sessions=sessions.filter(s=>s.id!==id);lsSave();
  renderHistory();renderProgress();if(editingId===id)fillForm(null);toast("Deleted");
}

// ---------- HISTORY ----------
function cardioMin(s){return (s.bike||0)+(s.stair||0)+(s.tread||0)+(s.other||0)}
function weekKey(d){const x=new Date(d+"T12:00:00");const day=(x.getDay()+6)%7;x.setDate(x.getDate()-day);return x.toISOString().slice(0,10)}
function renderHistory(){
  const list=[...sessions].sort((a,b)=>a.date<b.date?1:-1);
  $("#histEmpty").hidden=list.length>0;
  const thisWeek=weekKey(todayStr());
  const wk=sessions.filter(s=>weekKey(s.date)===thisWeek);
  $("#stats").innerHTML=`<div><b>${wk.length}</b><span>sessions this week</span></div><div><b>${wk.reduce((a,s)=>a+cardioMin(s),0)}</b><span>cardio min this week</span></div><div><b>${sessions.length}</b><span>total sessions</span></div>`;
  $("#histList").innerHTML=list.map(s=>{
    const d=new Date(s.date+"T12:00:00");
    const lifts=Object.entries(s.exercises||{}).filter(([n,st])=>st.some(x=>x.w!=null||x.r!=null)).length;
    const g=s.gPre!=null||s.gPost!=null?` · glucose <b class="gl">${s.gPre??"?"} \u2192 ${s.gPost??"?"}</b>`:"";
    return `<div class="hrow"><div class="d">${d.getDate()}<small>${d.toLocaleString("en-US",{month:"short"})}</small></div><div class="grow"><div><b>Day ${s.day}</b> · ${DAYS[s.day]?DAYS[s.day].name:""}</div><div class="m">${lifts} lifts · cardio <b>${cardioMin(s)} min</b>${g}${s.bw?` · <b>${s.bw} lb</b>`:""}</div>${s.notes?`<div class="note">${escapeHtml(s.notes)}</div>`:""}</div><div class="row" style="flex-direction:column;gap:4px"><button type="button" class="small" data-edit="${escapeHtml(s.id)}">Edit</button><button type="button" class="small ghost" data-del="${escapeHtml(s.id)}">Delete</button></div></div>`;
  }).join("");
}
function escapeHtml(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}

// ---------- PROGRESS (hand-drawn SVG) ----------
function lineChart(svg, series, opts={}){
  const W=360,H=180,L=36,R=10,T=12,B=26;svg.innerHTML="";
  const all=series.flatMap(s=>s.pts);
  if(!all.length){svg.innerHTML=`<text x="${W/2}" y="${H/2}" text-anchor="middle">Log a few sessions to see this chart</text>`;return}
  const xs=[...new Set(all.map(p=>p.x))].sort();
  let lo=Math.min(...all.map(p=>p.y),opts.target??Infinity), hi=Math.max(...all.map(p=>p.y),opts.target??-Infinity);
  if(opts.zero)lo=0; if(hi===lo){hi+=10;lo=Math.max(0,lo-10)} const pad=(hi-lo)*.1;lo=opts.zero?0:lo-pad;hi+=pad;
  const X=i=>L+(xs.length===1?(W-L-R)/2:i*(W-L-R)/(xs.length-1)), Y=v=>T+(H-T-B)*(1-(v-lo)/(hi-lo));
  let g="";
  for(let i=0;i<=4;i++){const v=lo+(hi-lo)*i/4;const y=Y(v);g+=`<line class="grid" x1="${L}" x2="${W-R}" y1="${y}" y2="${y}"/><text x="${L-4}" y="${y+4}" text-anchor="end">${Math.round(v)}</text>`}
  const step=Math.max(1,Math.ceil(xs.length/5));
  xs.forEach((x,i)=>{if(i%step===0||i===xs.length-1)g+=`<text x="${X(i)}" y="${H-8}" text-anchor="middle">${x.slice(5)}</text>`});
  if(opts.target!=null)g+=`<line class="target" x1="${L}" x2="${W-R}" y1="${Y(opts.target)}" y2="${Y(opts.target)}"/>`;
  series.forEach((s,si)=>{
    const pts=s.pts.map(p=>[X(xs.indexOf(p.x)),Y(p.y)]);
    if(opts.bars){const bw=Math.max(6,(W-L-R)/xs.length*.6);pts.forEach(([x,y])=>g+=`<rect class="bar" x="${x-bw/2}" y="${y}" width="${bw}" height="${H-B-y}" rx="2"/>`);return}
    const d=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
    if(si===0&&pts.length>1)g+=`<path class="a1" d="${d} L${pts[pts.length-1][0]} ${H-B} L${pts[0][0]} ${H-B} Z"/>`;
    g+=`<path class="l${si+1}" d="${d}"/>`+pts.map(p=>`<circle class="p${si+1}" cx="${p[0]}" cy="${p[1]}" r="3.5"/>`).join("");
  });
  svg.innerHTML=g;
}
function renderProgress(){
  const sorted=[...sessions].sort((a,b)=>a.date<b.date?-1:1);
  const names=Object.keys(EX).filter(n=>sorted.some(s=>s.exercises&&s.exercises[n]&&s.exercises[n].some(x=>x.w!=null)));
  const pick=$("#exPick");const cur=pick.value;
  pick.innerHTML=(names.length?names:["Leg Press"]).map(n=>`<option ${n===cur?"selected":""}>${n}</option>`).join("");
  const ex=pick.value;
  lineChart($("#chExercise"),[{pts:sorted.filter(s=>s.exercises&&s.exercises[ex]).map(s=>({x:s.date,y:Math.max(...s.exercises[ex].map(x=>x.w??-1))})).filter(p=>p.y>=0)}]);
  const weeks={};sorted.forEach(s=>{const k=weekKey(s.date);weeks[k]=(weeks[k]||0)+cardioMin(s)});
  lineChart($("#chCardio"),[{pts:Object.keys(weeks).sort().map(k=>({x:k,y:weeks[k]}))}],{bars:true,zero:true,target:300});
  lineChart($("#chGlucose"),[{pts:sorted.filter(s=>s.gPre!=null).map(s=>({x:s.date,y:s.gPre}))},{pts:sorted.filter(s=>s.gPost!=null).map(s=>({x:s.date,y:s.gPost}))}]);
  lineChart($("#chWeight"),[{pts:sorted.filter(s=>s.bw!=null).map(s=>({x:s.date,y:s.bw}))}]);
}

// ---------- GUIDE ----------
function renderGuide(){
  $("#guideList").innerHTML=Object.entries(EX).map(([n,e])=>`<div class="ex"><div class="head"><div class="pic">${picFor(n)}</div><div class="grow"><div class="name">${n}</div><div class="target"><span class="pill accent">${e.d}</span> ${e.target}</div><a class="find" href="${searchFor(n)}" target="_blank" rel="noopener">See photos</a></div></div><p class="machine">${e.machine}</p><ul class="cues">${e.cues.map(c=>"<li>"+c+"</li>").join("")}</ul></div>`).join("");
}

// ---------- WIRING ----------
$$("nav.tabs button").forEach(b=>b.addEventListener("click",()=>{
  $$("nav.tabs button").forEach(x=>x.setAttribute("aria-selected",x===b?"true":"false"));
  $$(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+b.dataset.view));
  if(b.dataset.view==="progress")renderProgress();window.scrollTo({top:0});
}));
$("#daySeg").addEventListener("click",e=>{const b=e.target.closest("button");if(b)setDay(b.dataset.day,null)});
$("#exList").addEventListener("click",e=>{const b=e.target.closest("button.done");if(b)b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")==="true"?"false":"true")});
$("#gPre").addEventListener("input",glucoseCheck);
$("#bw").addEventListener("input",proteinTarget);
["bike","stair","tread","other"].forEach(k=>$("#"+k).addEventListener("input",cardioTotal));
$("#saveBtn").addEventListener("click",save);
$("#clearBtn").addEventListener("click",()=>fillForm(null));
$("#histList").addEventListener("click",e=>{
  const ed=e.target.closest("[data-edit]"),de=e.target.closest("[data-del]");
  if(ed){const s=sessions.find(x=>x.id===ed.dataset.edit);fillForm(s);$$("nav.tabs button")[0].click()}
  if(de){if(de.textContent==="Sure?")remove(de.dataset.del);else{de.textContent="Sure?";setTimeout(()=>de.textContent="Delete",2500)}}
});
$("#exPick").addEventListener("change",renderProgress);

sessions=lsLoad();
renderGuide();fillForm(null);renderHistory();renderProgress();
$("#syncPill").textContent="this phone";

// Local-only storage. Data lives on this phone; use Backup on the History tab.
$("#syncPill").textContent="saved on phone";
document.getElementById("exportBtn").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(sessions,null,1)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="training-log-backup-"+todayStr()+".json";document.body.appendChild(a);a.click();a.remove();
});
document.getElementById("importFile").addEventListener("change",e=>{
  const f=e.target.files[0];if(!f)return;const r=new FileReader();
  r.onload=()=>{try{const arr=cleanList(JSON.parse(r.result));if(!arr.length)throw 0;const map={};sessions.forEach(s=>map[s.id]=s);arr.forEach(s=>{if(s&&s.id)map[s.id]=s});sessions=Object.values(map);lsSave();renderHistory();renderProgress();fillForm(null);toast("Restored "+arr.length+" sessions")}catch(x){toast("That file is not a training log backup")}};
  r.readAsText(f);e.target.value="";
});
if("serviceWorker" in navigator){navigator.serviceWorker.register("./sw.js").catch(()=>{})}
function formDirty(){return ["gPre","bw","sauna","bike","stair","tread","other","gPost","steam","notes"].some(k=>$("#"+k).value.trim()!=="")||$$("#exList input[data-f=r]").some(i=>i.value!=="")}
