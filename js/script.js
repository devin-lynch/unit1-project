// TODO
// Make the pokemon that takes damage shake upon receiving damage
// Make the attacking pokemon do a dash motion
// Try to add 'critical' attack chance
// Change hp background-color based on current hp
// Add '>' to button on hover?

console.log('hello from js')
const attackOne = document.querySelector('#attack-one')
const attackTwo = document.querySelector('#attack-two')
const attackThree = document.querySelector('#attack-three')
const attackFour = document.querySelector('#attack-four')
const textBar = document.querySelector('.textbar')
const text = document.querySelector('#text')
const cpuHealthBar = document.querySelector('#cpu-health')
const playerHealthBar = document.querySelector('#user-health')
const cpuHealthZone = document.querySelector('.cpu-health')
const playerHealthZone = document.querySelector('.user-health')
const aButton = document.querySelector('#a')
const bButton = document.querySelector('#b')
const startButton = document.querySelector('#start')
const selectButton = document.querySelector('#select')
const userPokemon = document.querySelector('#user-pokemon')
const cpuPokemon = document.querySelector('#cpu-pokemon')
let playerHealth = 100
let cpuHealth = 100
let turn //= 'MANKEY'

function typeWriter() {
    let i = 0
    let speed = 50
    if (i < text.length) {
        text.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}
// typeWriter()

// a button to clear text. can then add conditional "if turn = DRAGONITE and text = ""... then allow DRAGONITE to attack"
// need to add prompt to tell player to press a button so that DRAGONITE can attack. 
aButton.addEventListener('click', function() {
    if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
        dragoniteAttack()
     }
})

// GAME RESET BUTTON
startButton.addEventListener('click', function() {
    text.style.fontSize = '22px'
    userPokemon.style.visibility = 'visible'
    cpuPokemon.style.visibility = 'visible'
    playerHealth = 100
    cpuHealth = 100
    updatePlayerHealth()
    updateCpuHealth()
    cpuHealthBar.innerText = cpuHealth
    playerHealthBar.innerText = playerHealth
    turn = 'MANKEY'
    text.innerText = `You're up first, MANKEY! Please select an attack!`
})

selectButton.addEventListener('click', function () {
    // typeWriter()
    text.style.fontSize = '18px'
    text.innerText = `The player goes first! Select one of four attacks. Follow on screen instructions to alternate turns until a victor is declared (a Pokemon reaching 0hp.) Press 'START' to begin!`
})


function updatePlayerHealth() {
    if (playerHealth < 0) { // makes sure hp does not show a negative amount. 
        playerHealth = 0
    }

    if (playerHealth > 50) {
        playerHealthZone.style.backgroundColor = 'rgba(102, 232, 102, 0.355)'
    } else if (playerHealth > 20) {
        playerHealthZone.style.backgroundColor = 'rgba(206, 244, 81, 0.355)'
    } else {
        playerHealthZone.style.backgroundColor = 'rgba(240, 31, 12, 0.355)'
    }
    playerHealthBar.innerText = playerHealth
}

function updateCpuHealth() {
    if (cpuHealth < 0) { // makes sure hp does not show a negative amount. 
        cpuHealth = 0
    }

    if (cpuHealth > 50) {
        cpuHealthZone.style.backgroundColor = 'rgba(102, 232, 102, 0.355)'
    } else if (cpuHealth > 20) {
        cpuHealthZone.style.backgroundColor = 'rgba(206, 244, 81, 0.355)'
    } else {
        cpuHealthZone.style.backgroundColor = 'rgba(240, 31, 12, 0.355)'
    }
    cpuHealthBar.innerText = cpuHealth
}
// Need to alternate turns and ensure DRAGONITE does not immediately attack after MANKEY attacks. 
// Can make an 'a' button to advance text.


// Stretch goal: make an ability that enhances the next turns ability?

// Attack buttons
attackOne.addEventListener('click', lowKick)
attackTwo.addEventListener('click', scratch)
attackThree.addEventListener('click', closeCombat)
attackFour.addEventListener('click', skullBash)

// Need to stop console logging turn if a pokemon has fainted

// MANKEY moves
function lowKick() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 20
        console.log(`MANKEY used Low Kick!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Low Kick! DRAGONITE has ${cpuHealth}hp!`
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function scratch() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 25
        console.log(`MANKEY used Scratch!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Scratch! DRAGONITE has ${cpuHealth}hp!`
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function closeCombat() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 30
        console.log(`MANKEY used Close Combat!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Close Combat! DRAGONITE has ${cpuHealth}hp!`
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}

function skullBash() {
    if (turn === "MANKEY" && cpuHealth > 0 && playerHealth > 0) {
        cpuHealth -= 20
        console.log(`MANKEY used Skull Bash!`)
        console.log(`DRAGONITE has ${cpuHealth}hp!`)
        updateCpuHealth()
        text.innerText = `MANKEY used Skull Bash! DRAGONITE has ${cpuHealth}hp!`
        victory() // checks if cpu HP is 0
        turn = 'DRAGONITE'
        if (turn === 'DRAGONITE' && playerHealth > 0 && cpuHealth > 0) {
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Press 'A' to continue!`
        }
    }
}



// DRAGONITE moves

const cpuAttacks = [hyperBeam, dragonRush, hurricane, thunderPunch]

function dragoniteAttack() {
    if (playerHealth > 0 && cpuHealth > 0) {
        const random = Math.floor(Math.random() * 4);
        cpuAttacks[random]()
        console.log(`MANKEY has ${playerHealth}hp!`)
        updatePlayerHealth()
        if (playerHealth > 0) {
            text.innerText += ` MANKEY has ${playerHealth}hp!`
            console.log(`It's ${turn}'s turn to attack!`)
            text.innerText += ` It's ${turn}'s turn to attack! Please select an attack!`
        }
        // console.log(cpuAttacks[random])
    }
} 


function hyperBeam() {
    playerHealth -= 25
    console.log(`The wild DRAGONITE used Hyper Beam!`)
    text.innerText = `The wild DRAGONITE used Hyper Beam!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function dragonRush() {
    playerHealth -= 20
    console.log(`The wild DRAGONITE used Dragon Rush!`)
    text.innerText = `The wild DRAGONITE used Dragon Rush!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function hurricane() {
    playerHealth -= 35
    console.log(`The wild DRAGONITE used Hurricane!`)
    text.innerText = `The wild DRAGONITE used Hurricane!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}

function thunderPunch() {
    playerHealth -= 20
    console.log(`The wild DRAGONITE used Thunder Punch!`)
    text.innerText = `The wild DRAGONITE used Thunder Punch!`
    defeat() // checks if user HP is 0
    turn = 'MANKEY'
}


//message if player wins
function victory() {
    // Ensure you can't continue attacking after victory
    if (cpuHealth <= 0) { 
        // turn = 'gameOver'
        // typeWriter()
        cpuPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` The wild DRAGONITE fainted!  Please press 'START' to battle again!`
        console.log(`The wild DRAGONITE fainted!`)
    }
}

//message if cpu wins
function defeat() {
    // Ensure you can't continue attacking after defeat
    if (playerHealth <= 0) {
        // turn = 'gameOver'
        // typeWriter()
        userPokemon.style.visibility = 'hidden' // hides the defeated pokemon
        text.innerText += ` Your MANKEY fainted! You were overwhelmed by your defeat!`
        console.log(`Your MANKEY fainted! You were overwhelmed by your defeat! Please press 'START' to battle again!`)
    }
}

