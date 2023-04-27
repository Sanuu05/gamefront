// GAME NAME: Hi Stricker, Puch Challange, Bow & Arrow, Catch Fish
import game1 from '../img/game1.jpg'
import game2 from '../img/game2.jpg'
import game3 from '../img/game3.jpg'
import game4 from '../img/game4.jpg'
const gameData =[
    {
        id:1,
        name:"Hi Stricker",
        img:game1,
        des:'A high striker, also known as a strength tester, or strongman game, is an attraction used in funfairs, amusement parks, fundraisers, and carnivals. It operates by utilizing the lever where one end holds a puck attached to the tower and the other end is struck by the person or contestant using a hammer or mallet.',
        price:900
    }, {
        id:2,
        name:"Puch Challange",
        img:game2,
        des:'Punch The Ball is an arcade game which enables the person to test their strength.This is a competitive game that can add ultimate fun and buzz to your party.Players need to punch the ball as hard as they can to set the highest score and let others break it.',
        price:850
    }, {
        id:3,
        name:"Bow & Arrow",
        img:game3,
        des:' One archer calls the shot, and the other must match it. For example, an archer calls the left 6-ring from 20 yards, and then takes the shot. Assuming the shot is on target, the other archer must then match it. If the second shooter misses, they get an H. The game continues until someone loses by getting all the letters in H-O-R-S-E.',
        price:800
    }, {
        id:4,
        name:"Catch Fish",
        img:game4,
        des:'A Rotating Musical Fishing Game which both FUN & CHALLENGING. Players use mini fishing poles to try to catch the most fish while the game base spins. While the fish board spins, the fish opens and closes their mouth.',
        price:800
    }
]

const User=[{
    Id: 1,
    name: 'Baghajatin, Kolkata, WB',
    Distance:10
    },
    {
    Id: 2,
    name: 'Garia, Kolkata, WB',
    Distance: 20
    }
    ,
    {
    Id: 3,
    name: 'Sealdaha, Kolkata, WB',
    Distance:15
    },
    
    {
    Id: 4,
    name: 'Jadavpur, Kolkata, WB',
    Distance: 25
    }
    ]
    
export {gameData,User}