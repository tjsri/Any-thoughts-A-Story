let video;
let handPose;
let hands = [];
let thresholdVal = 0.30;

let story = `I AM SLOUCHED ON MY BED, AS MY LAPTOP IS BALANCED PRECARIOUSLY ON A PILLOW; THE SCREEN ON MY LAPTOP IS BLINDING ME. “WRITE SOMETHING, YOU COWARD,” MY BRAIN SCREAMS WHILE I TRY TO THINK OF ALL THE POSSIBLE STORIES I COULD WRITE FOR THIS ASSIGNMENT. I LOOK AROUND MYSELF. MY ROOM’S A DISASTER WITH EMPTY COFFEE MUGS, A NOTEBOOK FULL OF DUMB SCRIBBLES, AND A RANDOM RED SOCK THAT’S BEEN LYING ON TOP OF MY LAMP. AS I STARE AT MY SCREEN, OUT OF NOWHERE, I GET THIS IDEA: WHAT IF I WRITE A STORY ABOUT WRITING THIS STORY? WILD, RIGHT? “YEAH, WOW, HOW COULD I EVEN THINK OF SUCH A COOL THING THAT HAS NEVER BEEN DONE BEFORE?” MY MIND MOCKS ME, DRIPPING WITH SARCASM SOOOO THICK THAT IT COULD CHOKE ME. WELL, MY SPECIAL TALENT’S NOT WRITING; IT’S OVERTHINKING. SO LET ME DO THAT ON PAPER. LET’S GET STARTED ON THE CHARACTERS IN THIS STORY. IT WOULD BE ME, OF COURSE, AND I ASSUME YOU, WHOEVER’S READING THIS, ARE PART OF THIS STORY. I MEAN, CAN I EVEN CALL THIS THING A STORY? IT FEELS MORE LIKE A ONE-SIDED CONVERSATION/RANT BY AN INDECISIVE GIRL IN HER 20S WHO CAN’T MAKE UP HER MIND, FOR FUCK’S SAKE. SOMETIMES, CREATING FEELS LIKE HITTING A BRICK WALL, AND RIGHT NOW, I AM BANGING MY HEAD AGAINST THAT WALL IN A NICE REPETITIVE OSCILLATORY MOTION. YET, I CAN’T SEEM TO GET ANY IDEAS. WELL, BURNOUT’S A BITCH. AS I TYPE EVERY SENTENCE, “THIS IS GARBAGE,” MY BRAIN TEASES ME. “A STORY ABOUT A STORY? THAT’S THE DUMBEST, MOST UNORIGINAL SHIT YOU COULD’VE PICKED.” IT IS GETTING PRETTY ANNOYING IN MY HEAD, JUST LIKE THIS STORY NOW, BUT I GUESS I’M STUCK WITH THIS META CRAP. WHY CAN’T I WRITE SOMETHING CUTE AND SIMPLE? LIKE A HEARTWARMING LITTLE STORY ABOUT TWO IDIOTS IN A COFFEE SHOP? MY BRAIN STARTS VOMITING IDEAS - THRILLERS, GHOSTS, MAGIC FORESTS, FUTURISTIC CITIES YET I WANT TO WRITE THIS? AHH, I’M SCREWING MYSELF OVER, AND I’M DAMN GOOD AT IT. IT’S GETTING DARKER OUTSIDE, AND MY LAPTOP SWITCHED TO ‘NIGHT MODE.’ I SEE A FAINT REFLECTION ON MY SCREEN; SHE LOOKS CRAZY. LIKE SHE HASN’T SLEPT IN FOREVER. THEN I THINK TO MYSELF, WHAT IF I WRITE A STORY OF HER? ME? MY LIFE? SOMETHING THAT I’VE EXPERIENCED AND LIVED THROUGH? BUT WAIT, IN THE GRAND SCHEME OF THINGS, AND WITH MILLIONS OF PEOPLE IN THE WORLD, I STILL CHOOSE TO TALK ABOUT MYSELF? HOW NARCISSISTIC! WHAT IF I WRITE ABOUT A MAGICAL WORLD? I ASK MYSELF. WHAT MAGICAL WORLD CAN I EVEN FANTASIZE ABOUT AND WRITE A MAKE-BELIEVE STORY, WHEN THE WHOLE WORLD FEELS LIKE IT IS CONSTANTLY BURNING, PEOPLE FACE SO MUCH EVERY DAY, STRUGGLE, AND SURVIVE, WHILE THE GREEDY GET GREEDIER AND THE POWERFUL GET MORE POWERFUL? I SHOULD PROBABLY WRITE ABOUT SOMETHING IMPORTANT. SOMETHING HUGE, SOMETHING THAT HAS AN IMPACT. BUT WHAT CAN BE SAID THAT HAS NOT BEEN SAID BEFORE? WHAT CAN I WRITE WHEN I’M NOT SURE WHAT MY voice is? I’M TERRIBLE AT GETTING MY THOUGHTS OUT OF MY HEAD. I WANT TO MAKE SOMETHING REAL, BUT I KEEP SECOND-GUESSING EVERY WORD. NEVERTHELESS, I NEED TO TRY. TRY AND TRY. TO CREATE. SOMETHING. ANYTHING. BUT THERE’S ALWAYS A LIMIT. A TIME LIMIT. FUCK. THE UNIVERSE IS 13.8 BILLION YEARS OLD WITH GINORMOUS GALAXIES AND BLACK HOLES ON A SCALE WE CAN’T EVEN IMAGINE. AMONG ALL THAT, I’M NOTHING BUT A SPECK OF DUST. STUCK ON A HUGE ROCK. INSIDE FOUR WALLS THAT WE BUILT TO CONTAIN OURSELVES. AND THE SIGNIFICANCE OF MY ASSIGNMENT? MY STORIES? MICROSCOPIC. WHATEVER I WRITE, IT WON’T MATTER. WE ALL PERISH, DON’T WE? JUST FLEETING BLIPS IN THE COSMIC STATIC. WELL NOW, DON’T I SOUND PRETENTIOUSLY DEEP? I AM CRUMBLING UNDER THE INSIGNIFICANCE OF MY WORK AND HOW MUCH IT DOESN’T MATTER IN THE GRAND SCHEME OF THINGS, AND YET, AS I TYPE THIS, IT FEELS LIKE THE WHOLE WORLD IS WATCHING OVER MY SHOULDER, JUDGING MY EVERY CLUMSY PHRASE. IT’S IRRATIONAL, BUT IT’S REAL, THIS PRESSURE TO BE PROFOUND, TO BE HEARD, TO BE SOMETHING. I CHOSE THIS CREATIVE LIFE TO LET MY VOICE BE HEARD, BUT RIGHT NOW IT’S A JUMBLED MESS, BUT I BELIEVE IT WON’T STAY IN THE SAME PLACE FOREVER. JUST LIKE THIS RED SOCK ON MY LAMP. DEAR SOCK, YOU WILL GET WHERE YOU BELONG WHEN IT’S TIME. AND THEN, A SHIFT. I THINK ABOUT YOU! THE READER! MAYBE YOU’RE OUT THERE, FEELING THIS TOO. THE DREAD OF CREATING, THE FEAR THAT YOUR WORK DOESN’T MATTER, THE EXHAUSTION OF TRYING TO FIND YOUR PLACE IN A WORLD THAT’S TOO BIG AND TOO BROKEN. IF YOU CAN FEEL THIS, EVEN FOR A SECOND, THEN WE’RE CONNECTED. WE’RE IN THIS TOGETHER. AND THAT’S THE POINT, ISN’T IT? NOT TO CHANGE THE UNIVERSE, BUT TO REACH ONE PERSON, TO MAKE THEM FEEL LESS ALONE. WE CAN’T ALWAYS DO SHIT, AND THAT’S OKAY. SOMETIMES, JUST SHOWING UP IS ENOUGH. SO, I KEEP WRITING. THIS STORY’S NOT PERFECT. IT’S NOT GROUNDBREAKING. IT’S JUST MINE—RAW, MESSY, HONEST. IT’S A SNAPSHOT OF A GIRL, OVERTHINKING HER WAY THROUGH A BLANK PAGE, TRYING TO MAKE SENSE OF HER PLACE IN THE WORLD. IT’S A REMINDER THAT CREATING IS HARD, BUT IT’S ALSO HUMAN. WE MIGHT JUST BE SPECKS IN THE UNIVERSE, BUT OUR STORIES? THEY’RE THE SPARKS THAT LIGHT UP THE DARK, EVEN IF JUST FOR A MOMENT.`; // (Keep your full story string here)

let letters = [];
let currentCharIndex = 0;
let saveButton, flyButton;
let sizeSlider, weightSlider;
let sizeLabel, weightLabel;
let fontSize = 40;
let fontWeight = 1;

function preload() {
  // Load the handPose model before the sketch starts
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  video = createCapture(VIDEO);
  video.size(640, 480); 
  video.hide();
  
  // Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  
  textFont('Helvetica');
  setupUI();
}

function gotHands(results) {
  // Save the output to the global "hands" variable
  hands = results;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#f5f5dc");

  // COVER & MIRROR LOGIC
  let scaleVal = max(windowWidth / video.width, windowHeight / video.height);
  let vW = video.width * scaleVal;
  let vH = video.height * scaleVal;
  let vX = (windowWidth - vW) / 2;
  let vY = (windowHeight - vH) / 2;

  push();
    translate(windowWidth, 0); 
    scale(-1, 1);              
    image(video, -vX, vY, -vW, vH); 
  pop();

  filter(THRESHOLD, thresholdVal);

  // HAND TRACKING LOGIC
  // If a hand is detected, use the index finger tip to spawn letters
  if (hands.length > 0) {
    let hand = hands[0];
    let indexFinger = hand.index_finger_tip;
    
    // We must map the video coordinates (640x480) to the canvas size
    // and flip the X coordinate because the video is mirrored
    let tx = map(indexFinger.x, 0, video.width, windowWidth, 0);
    let ty = map(indexFinger.y, 0, video.height, 0, windowHeight);
    
    spawnLetters(tx, ty);
  }

  fontSize = sizeSlider.value();
  fontWeight = weightSlider.value();

  for (let i = letters.length - 1; i >= 0; i--) {
    letters[i].update();
    letters[i].display();
    if (letters[i].alpha <= 0 || letters[i].y > height + 200) {
      letters.splice(i, 1);
    }
  }
}

function spawnLetters(x, y) {
  if (y > 80 && currentCharIndex < story.length) {
    let char = story.charAt(currentCharIndex);
    letters.push(new SpiralLetter(x, y, char));
    currentCharIndex++;
  }
}

// --- UI AND CLASS LOGIC (Same as before) ---

function setupUI() {
  const buttonStyle = (btn) => {
    btn.style('background-color', '#fff');
    btn.style('color', '#D50000');
    btn.style('border', '2px solid #D50000');
    btn.style('padding', '8px 18px');
    btn.style('border-radius', '25px');
    btn.style('font-family', 'Helvetica');
    btn.style('font-weight', 'bold');
    btn.style('cursor', 'pointer');
    btn.style('transition', '0.2s');
    btn.mouseOver(() => { btn.style('background-color', '#D50000'); btn.style('color', '#fff'); });
    btn.mouseOut(() => { btn.style('background-color', '#fff'); btn.style('color', '#D50000'); });
  };

  sizeLabel = createDiv('How Loud?');
  sizeLabel.position(30, 28);
  styleLabel(sizeLabel);
  sizeSlider = createSlider(10, 100, 40, 1);
  sizeSlider.position(120, 32);
  sizeSlider.style('width', '100px');
  sizeSlider.style('accent-color', '#D50000');

  weightLabel = createDiv('How Heavy?');
  weightLabel.position(240, 28);
  styleLabel(weightLabel);
  weightSlider = createSlider(0, 6, 1, 1);
  weightSlider.position(340, 32);
  weightSlider.style('width', '100px');
  weightSlider.style('accent-color', '#D50000');

  flyButton = createButton('RELEASE THOUGHTS');
  flyButton.position(470, 25);
  buttonStyle(flyButton);
  flyButton.mousePressed(triggerFly);

  saveButton = createButton('SAVE');
  saveButton.position(670, 25);
  buttonStyle(saveButton);
  saveButton.mousePressed(saveAsImage);
}

function styleLabel(label) {
  label.style('color', '#920000');
  label.style('font-family', 'Helvetica');
  label.style('font-weight', 'bold');
  label.style('font-size', '13px');
  label.style('letter-spacing', '1px');
}

function triggerFly() {
  for (let l of letters) { l.startFlying(); }
}

function saveAsImage() {
  saveCanvas('myStory_Snapshot', 'png');
}

class SpiralLetter {
  constructor(baseX, baseY, char) {
    this.baseX = baseX;
    this.baseY = baseY;
    this.x = baseX;
    this.y = baseY;
    this.angle = random(TWO_PI);
    this.char = char;
    this.angleSpeedBase = random(0.05, 3.0); 
    this.isMoving = false;
    this.vx = 0;
    this.vy = 0;
    this.alpha = 255;
    this.fadeSpeed = random(0.5, 1.5); 
  }

  startFlying() {
    this.isMoving = true;
    this.vx = random(-8, 8);
    this.vy = random(-8, 8);
  }

  update() {
    if (this.isMoving) {
      this.x += this.vx;
      this.y += this.vy;
      this.vy -= 0.1;
      this.alpha -= 2;
    } else {
      let shakeIntensity = map(fontSize, 10, 100, 0.4, 2); 
      let shakeSpeedFactor = map(fontSize, 10, 100, 0.2, 1.2);
      this.angle += (this.angleSpeedBase * shakeSpeedFactor);
      this.x = this.baseX + shakeIntensity * cos(this.angle);
      this.y = this.baseY + shakeIntensity * sin(this.angle);
      this.alpha -= this.fadeSpeed;
    }
  }

  display() {
    let c = color(213, 0, 0, this.alpha);
    fill(c);
    if (fontWeight > 0) {
        stroke(213, 0, 0, this.alpha);
        strokeWeight(fontWeight);
    } else {
        noStroke();
    }
    textSize(fontSize);
    text(this.char, this.x, this.y);
  }
}