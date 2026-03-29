let video;
let handPose;
let hands = [];
let thresholdVal = 0.30;

let story = `I AM SLOUCHED ON MY BED, AS MY LAPTOP IS BALANCED PRECARIOUSLY ON A PILLOW; THE SCREEN ON MY LAPTOP IS BLINDING ME. "WRITE SOMETHING, YOU COWARD," MY BRAIN SCREAMS WHILE I TRY TO THINK OF ALL THE POSSIBLE STORIES I COULD WRITE FOR THIS ASSIGNMENT. I LOOK AROUND MYSELF. MY ROOM'S A DISASTER WITH EMPTY COFFEE MUGS, A NOTEBOOK FULL OF DUMB SCRIBBLES, AND A RANDOM RED SOCK THAT'S BEEN LYING ON TOP OF MY LAMP. AS I STARE AT MY SCREEN, OUT OF NOWHERE, I GET THIS IDEA: WHAT IF I WRITE A STORY ABOUT WRITING THIS STORY? WILD, RIGHT? "YEAH, WOW, HOW COULD I EVEN THINK OF SUCH A COOL THING THAT HAS NEVER BEEN DONE BEFORE?" MY MIND MOCKS ME, DRIPPING WITH SARCASM SOOOO THICK THAT IT COULD CHOKE ME. WELL, MY SPECIAL TALENT'S NOT WRITING; IT'S OVERTHINKING. SO LET ME DO THAT ON PAPER. LET'S GET STARTED ON THE CHARACTERS IN THIS STORY. IT WOULD BE ME, OF COURSE, AND I ASSUME YOU, WHOEVER'S READING THIS, ARE PART OF THIS STORY. I MEAN, CAN I EVEN CALL THIS THING A STORY? IT FEELS MORE LIKE A ONE-SIDED CONVERSATION/RANT BY AN INDECISIVE GIRL IN HER 20S WHO CAN'T MAKE UP HER MIND, FOR FUCK'S SAKE. SOMETIMES, CREATING FEELS LIKE HITTING A BRICK WALL, AND RIGHT NOW, I AM BANGING MY HEAD AGAINST THAT WALL IN A NICE REPETITIVE OSCILLATORY MOTION. YET, I CAN'T SEEM TO GET ANY IDEAS. WELL, BURNOUT'S A BITCH. AS I TYPE EVERY SENTENCE, "THIS IS GARBAGE," MY BRAIN TEASES ME. "A STORY ABOUT A STORY? THAT'S THE DUMBEST, MOST UNORIGINAL SHIT YOU COULD'VE PICKED." IT IS GETTING PRETTY ANNOYING IN MY HEAD, JUST LIKE THIS STORY NOW, BUT I GUESS I'M STUCK WITH THIS META CRAP. WHY CAN'T I WRITE SOMETHING CUTE AND SIMPLE? LIKE A HEARTWARMING LITTLE STORY ABOUT TWO IDIOTS IN A COFFEE SHOP? MY BRAIN STARTS VOMITING IDEAS - THRILLERS, GHOSTS, MAGIC FORESTS, FUTURISTIC CITIES YET I WANT TO WRITE THIS? AHH, I'M SCREWING MYSELF OVER, AND I'M DAMN GOOD AT IT. IT'S GETTING DARKER OUTSIDE, AND MY LAPTOP SWITCHED TO 'NIGHT MODE.' I SEE A FAINT REFLECTION ON MY SCREEN; SHE LOOKS CRAZY. LIKE SHE HASN'T SLEPT IN FOREVER. THEN I THINK TO MYSELF, WHAT IF I WRITE A STORY OF HER? ME? MY LIFE? SOMETHING THAT I'VE EXPERIENCED AND LIVED THROUGH? BUT WAIT, IN THE GRAND SCHEME OF THINGS, AND WITH MILLIONS OF PEOPLE IN THE WORLD, I STILL CHOOSE TO TALA ABOUT MYSELF? HOW NARCISSISTIC! WHAT IF I WRITE ABOUT A MAGICAL WORLD? I ASK MYSELF. WHAT MAGICAL WORLD CAN I EVEN FANTASIZE ABOUT AND WRITE A MAKE-BELIEVE STORY, WHEN THE WHOLE WORLD FEELS LIKE IT IS CONSTANTLY BURNING, PEOPLE FACE SO MUCH EVERY DAY, STRUGGLE, AND SURVIVE, WHILE THE GREEDY GET GREEDIER AND THE POWERFUL GET MORE POWERFUL? I SHOULD PROBABLY WRITE ABOUT SOMETHING IMPORTANT. SOMETHING HUGE, SOMETHING THAT HAS AN IMPACT. BUT WHAT CAN BE SAID THAT HAS NOT BEEN SAID BEFORE? WHAT CAN I WRITE WHEN I'M NOT SURE WHAT MY voice is? I'M TERRIBLE AT GETTING MY THOUGHTS OUT OF MY HEAD. I WANT TO MAKE SOMETHING REAL, BUT I KEEP SECOND-GUESSING EVERY WORD. NEVERTHELESS, I NEED TO TRY. TRY AND TRY. TO CREATE. SOMETHING. ANYTHING. BUT THERE'S ALWAYS A LIMIT. A TIME LIMIT. FUCK. THE UNIVERSE IS 13.8 BILLION YEARS OLD WITH GINORMOUS GALAXIES AND BLACK HOLES ON A SCALE WE CAN'T EVEN IMAGINE. AMONG ALL THAT, I'M NOTHING BUT A SPECK OF DUST. STUCK ON A HUGE ROCK. INSIDE FOUR WALLS THAT WE BUILT TO CONTAIN OURSELVES. AND THE SIGNIFICANCE OF MY ASSIGNMENT? MY STORIES? MICROSCOPIC. WHATEVER I WRITE, IT WON'T MATTER. WE ALL PERISH, DON'T WE? JUST FLEETING BLIPS IN THE COSMIC STATIC. WELL NOW, DON'T I SOUND PRETENTIOUSLY DEEP? I AM CRUMBLING UNDER THE INSIGNIFICANCE OF MY WORK AND HOW MUCH IT DOESN'T MATTER IN THE GRAND SCHEME OF THINGS, AND YET, AS I TYPE THIS, IT FEELS LIKE THE WHOLE WORLD IS WATCHING OVER MY SHOULDER, JUDGING MY EVERY CLUMSY PHRASE. IT'S IRRATIONAL, BUT IT'S REAL, THIS PRESSURE TO BE PROFOUND, TO BE HEARD, TO BE SOMETHING. I CHOSE THIS CREATIVE LIFE TO LET MY VOICE BE HEARD, BUT RIGHT NOW IT'S A JUMBLED MESS, BUT I BELIEVE IT WON'T STAY IN THE SAME PLACE FOREVER. JUST LIKE THIS RED SOCK ON MY LAMP. DEAR SOCK, YOU WILL GET WHERE YOU BELONG WHEN IT'S TIME. AND THEN, A SHIFT. I THINK ABOUT YOU! THE READER! MAYBE YOU'RE OUT THERE, FEELING THIS TOO. THE DREAD OF CREATING, THE FEAR THAT YOUR WORK DOESN'T MATTER, THE EXHAUSTION OF TRYING TO FIND YOUR PLACE IN A WORLD THAT'S TOO BIG AND TOO BROKEN. IF YOU CAN FEEL THIS, EVEN FOR A SECOND, THEN WE'RE CONNECTED. WE'RE IN THIS TOGETHER. AND THAT'S THE POINT, ISN'T IT? NOT TO CHANGE THE UNIVERSE, BUT TO REACH ONE PERSON, TO MAKE THEM FEEL LESS ALONE. WE CAN'T ALWAYS DO SHIT, AND THAT'S OKAY. SOMETIMES, JUST SHOWING UP IS ENOUGH. SO, I KEEP WRITING. THIS STORY'S NOT PERFECT. IT'S NOT GROUNDBREAKING. IT'S JUST MINE—RAW, MESSY, HONEST. IT'S A SNAPSHOT OF A GIRL, OVERTHINKING HER WAY THROUGH A BLANK PAGE, TRYING TO MAKE SENSE OF HER PLACE IN THE WORLD. IT'S A REMINDER THAT CREATING IS HARD, BUT IT'S ALSO HUMAN. WE MIGHT JUST BE SPECKS IN THE UNIVERSE, BUT OUR STORIES? THEY'RE THE SPARKS THAT LIGHT UP THE DARK, EVEN IF JUST FOR A MOMENT.`;

let letters = [];
let currentCharIndex = 0;
let saveButton, flyButton, homeButton, recordButton, muteButton, infoButton;
let sizeSlider, weightSlider;
let sizeLabel, weightLabel;
let fontSize = 40;
let fontWeight = 1;

// ── SOUND ─────────────────────────────────────────────────────────────────
let clickOsc;
let clickEnv;
let soundStarted = false;
let isMuted = false;
const CLICK_VOLUME = 0.008; 

// ── RECORDING ─────────────────────────────────────────────────────────────
let mediaRecorder = null;
let recordedChunks = [];
let isRecording = false;

function preload() {
  handPose = ml5.handPose({ maxHands: 2 });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  handPose.detectStart(video, gotHands);
  textFont('Helvetica');

  clickOsc = new p5.Oscillator('sine');
  clickEnv = new p5.Envelope();
  clickEnv.setADSR(0.005, 0.02, 0.0, 0.02);
  clickEnv.setRange(CLICK_VOLUME, 0);
  clickOsc.amp(clickEnv);
  clickOsc.freq(600);

  setupUI();
}

function gotHands(results) {
  hands = results;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repositionUI();
}

function draw() {
  background("#f5f5dc");

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

  fontSize   = sizeSlider.value();
  fontWeight = weightSlider.value();

  for (let hand of hands) {
    let tip = hand.index_finger_tip;
    let tx = map(tip.x, 0, video.width, windowWidth, 0);
    let ty = map(tip.y, 0, video.height, 0, windowHeight);
    spawnLetters(tx, ty);
  }

  for (let i = letters.length - 1; i >= 0; i--) {
    letters[i].update();
    letters[i].display();
    if (letters[i].alpha <= 0 || letters[i].y > height + 200) {
      letters.splice(i, 1);
    }
  }

  if (isRecording) {
    fill(213, 0, 0);
    noStroke();
    ellipse(windowWidth - 250, 35, 10, 10);
  }
}

function spawnLetters(x, y) {
  if (y > 80) {
    if (currentCharIndex >= story.length) currentCharIndex = 0;
    let char = story.charAt(currentCharIndex);
    letters.push(new SpiralLetter(x, y, char));
    currentCharIndex++;

    if (soundStarted && !isMuted) {
      clickOsc.freq(random(200, 500));
      clickEnv.play(clickOsc);
    }
  }
}

function setupUI() {
  const buttonStyle = (btn, small = false) => {
    btn.style('background-color', '#fff');
    btn.style('color', '#D50000');
    btn.style('border', '2px solid #D50000');
    btn.style('padding', small ? '5px 12px' : '8px 18px');
    btn.style('border-radius', '25px');
    btn.style('font-family', 'Helvetica');
    btn.style('font-weight', 'bold');
    btn.style('font-size', small ? '11px' : '13px');
    btn.style('cursor', 'pointer');
    btn.style('transition', '0.2s');
    btn.mouseOver(() => { btn.style('background-color', '#D50000'); btn.style('color', '#fff'); });
    btn.mouseOut(() => {
      if (btn === recordButton && isRecording) return;
      btn.style('background-color', '#fff');
      btn.style('color', '#D50000');
    });
  };

  sizeLabel = createDiv('How Loud?');
  styleLabel(sizeLabel);
  sizeSlider = createSlider(10, 100, 40, 1);
  sizeSlider.style('width', '80px');
  sizeSlider.style('accent-color', '#D50000');

  weightLabel = createDiv('How Heavy?');
  styleLabel(weightLabel);
  weightSlider = createSlider(0, 6, 1, 1);
  weightSlider.style('width', '80px');
  weightSlider.style('accent-color', '#D50000');

  flyButton = createButton('RELEASE THOUGHTS');
  buttonStyle(flyButton);
  flyButton.mousePressed(triggerFly);

  saveButton = createButton('SCREENSHOT');
  buttonStyle(saveButton);
  saveButton.mousePressed(saveAsImage);

  recordButton = createButton('⏺ RECORD');
  buttonStyle(recordButton);
  recordButton.mousePressed(toggleRecording);

  // ── INFO BUTTON ──────────────────────────────────────────────────────────
  infoButton = createButton('INFO');
  buttonStyle(infoButton);
  infoButton.mousePressed(() => {
    window.open("https://www.tejasridesign.com/a-story", "_blank");
  });

  homeButton = createButton('READ A STORY');
  buttonStyle(homeButton);
  homeButton.mousePressed(() => {
    window.location.href = "https://tjsri.github.io/A-Story/";
  });

  repositionUI();

  // ── Mute button — bottom left corner ───────────────────────────────────
  muteButton = createButton('🔊 SOUND ON');
  muteButton.style('position', 'fixed');
  muteButton.style('bottom', '16px');
  muteButton.style('left', '20px');
  muteButton.style('background-color', 'rgba(255,255,255,0.75)');
  muteButton.style('color', '#920000');
  muteButton.style('border', '1.5px solid #D50000');
  muteButton.style('padding', '4px 14px');
  muteButton.style('border-radius', '20px');
  muteButton.style('font-family', 'Helvetica');
  muteButton.style('font-weight', 'bold');
  muteButton.style('font-size', '11px');
  muteButton.style('cursor', 'pointer');
  muteButton.style('backdrop-filter', 'blur(4px)');
  muteButton.style('z-index', '9999');
  muteButton.mousePressed(toggleMute);
}

function repositionUI() {
  sizeLabel.position(20, 25);
  sizeSlider.position(100, 28);
  
  weightLabel.position(200, 25);
  weightSlider.position(290, 28);

  flyButton.position(395, 20);
  saveButton.position(585, 20);
  recordButton.position(725, 20);
  infoButton.position(windowWidth - 100, 60);
  homeButton.position(windowWidth - 160, 20);
}

function styleLabel(label) {
  label.style('color', '#920000');
  label.style('font-family', 'Helvetica');
  label.style('font-weight', 'bold');
  label.style('font-size', '13px');
  label.style('letter-spacing', '1px');
}

function toggleMute() {
  isMuted = !isMuted;
  muteButton.html(isMuted ? '🔇 SOUND OFF' : '🔊 SOUND ON');
}

function mousePressed() {
  if (!soundStarted) {
    userStartAudio().then(() => {
      clickOsc.start();
      clickOsc.amp(0);
      soundStarted = true;
    });
  }
}

function triggerFly() {
  for (let l of letters) l.startFlying();
}

function saveAsImage() {
  saveCanvas('myStory_Snapshot', 'png');
}

function toggleRecording() {
  if (!isRecording) startRecording();
  else stopRecording();
}

function startRecording() {
  recordedChunks = [];
  const canvas = document.querySelector('canvas');
  const stream = canvas.captureStream(30);
  mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
  mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) recordedChunks.push(e.data); };
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'myStory_Recording.webm';
    a.click();
  };
  mediaRecorder.start();
  isRecording = true;
  recordButton.html('⏹ STOP & SAVE');
  recordButton.style('background-color', '#D50000');
  recordButton.style('color', '#fff');
}

function stopRecording() {
  if (mediaRecorder) mediaRecorder.stop();
  isRecording = false;
  recordButton.html('⏺ RECORD');
  recordButton.style('background-color', '#fff');
  recordButton.style('color', '#D50000');
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
