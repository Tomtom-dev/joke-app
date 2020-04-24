const express= require('express')

const app= express();
 
const port =3000;

const render = (req) =>`
<html>
    <style> 
        h1 {
            color:#FABF00;
        }
    </style>
  <head>
    <title>joke Generator</title>
  </head>

  <body>
    <h1>Hi Dear Sir or Madam ${req.params.name}! welcome to the joke generator ${req.params.age}</h1>
    <h2>Here is your joke<h2>
` 
;

 jokes = [
  { jokeOne: `What does a cloud wear underhis raincoat ? / Thunderwear`},
  { jokeTwo: `What do kids play when they can't play with a phone ?  / Bored games`},
  { jokeThree:`What do birds give out on halloween / Tweets`},
  { jokeFour: ` Why teddy bear are never hungry ? / They are always stuffed`},
 { jokeFive:` What did a math book say to the other ? / I have too many problems`},
 ]


 //function
function GenerateRandomJoke(){
  const testRandom= Math.floor(Math.random()*(jokes.length));
  return jokes[testRandom];
}

function onListen(){
  console.log(`listen on port : ${port}`);
}

const gagGenerator =GenerateRandomJoke();


//APP

app.listen( port, onListen );


app.get('/joke/:name/:age', function(req, res){
  const PrincipalPage= render(req);

  const total = PrincipalPage + gagGenerator;
  
  res.send(total)
  
});
