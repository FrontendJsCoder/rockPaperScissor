//Array
let [computer_score,user_score] =[0,0];
//DOM Element
let result_ref = document.getElementById('result');
//Object
let choices_object = {
                'rock' : {
                        'rock' : 'draw', 
                        'scissor' : 'win',
                        'paper' : 'lose'
                        },
                        'scissor' : {
                        'scissor' : 'lose', 
                        'scissor' : 'draw',
                        'paper' : 'win'
                        },
                        'scissor' : {
                        'paper' : 'draw', 
                        'rock' : 'win',
                        'scissor' : 'lose',
                        'paper' : 'draw'
                        }
                    }
function checker(input){
    var choices = ['rock', 'paper', 'scissor'];
    var num = Math.floor(Math.random()*3);

    document.getElementById('comp_choice').innerHTML =
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById('user_choice').innerHTML =
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];
}