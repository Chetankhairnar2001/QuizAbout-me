//console.log("Hi am Chetan Khiarnar");
var readlinesync=require("readline-sync");
const chalk =require("chalk");
var score=0;

var data=[
  {name:"sunil",score:4},
  {name:"vedant",
  score:3},
  {name:"sahil",score:2},
  {name:"rohan",score:2}
]

var name=readlinesync.question("Whats ur name Buddy ");
console.log(chalk.yellowBright(name,`Welcome to the game
    `));

function play(question,answer){
  var userName=readlinesync.question(question);

  if(userName.toUpperCase()===answer.toUpperCase()){
    score++;
    console.log(chalk.bold.green("right"));
  }
 else{
   console.log(chalk.bold.red("wrong"));
   console.log(chalk.cyan(answer,"is the correct answer"));
 }
  console.log("Your Score is",score);
  console.log("-------");
}

var questionList=[
  {
  question:"What is my favourite character in Naruto? ",
  answer:"Sasuke"
  },{question:"what do i like Bike or Car? ",
  answer:"car"},
  { question:"Which game do i like the most ",
  answer:"SanAndres"
  },
  { question:"Which is my Favourite Dish  ",
    answer:"Hyderabadi Biryani"
  },{
    question:"My Favourite Color  ",
    answer:"Yellow"
  }
  ]

for(var i=0;i<questionList.length;i++){
  play(questionList[i].question,questionList[i].answer);
}

if(score>=data[0].score){
  console.log(chalk.cyanBright("YAYY U ARE HIGHEST SCORER  with score",score));
  console.log(chalk.cyanBright("send a screenshot of your"))
}else{
  console.log(chalk.cyanBright("Highest Score Until Now is ",data[0].score,"belongs to",data[0].name.toUpperCase()));
}