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