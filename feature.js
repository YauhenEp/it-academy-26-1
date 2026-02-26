function getNumberOfFridaysThirteensInRange(startDateStr, endDateStr) {
    let startDate = new Date(Date.UTC(startDateStr.split('/')[2], startDateStr.split('/')[1] - 1, startDateStr.split('/')[0]))
    const endDate = new Date(Date.UTC(endDateStr.split('/')[2], endDateStr.split('/')[1] - 1, endDateStr.split('/')[0]))
    let fridaysCount = 0;
    startDate.setDate(13)

    while(startDate <= endDate) {
        if(startDate.getDate() === 13 && startDate.getDay() === 5) {
            fridaysCount++
        }
        
        startDate.setMonth(startDate.getMonth() + 1)
    }
    console.log('Number of Fridays is ', fridaysCount)
    return fridaysCount;
}

// getNumberOfFridaysThirteensInRange('01/01/2000', '26/02/2026');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function createPlayers(number) {
    const players = []
    for(let i = 0; i < number; i++) {
        players.push({
            name: `Player ${i + 1}`,
            sum: 0
        })
    }
    return players
}

function playGame(numberOfplayers, numberOfThrows) {
    const players = createPlayers(numberOfplayers);
    for(let player of players) {
        for(let i = 0; i < numberOfThrows; i++) {
            player.sum += getRandomNumber(1, 6)
        } 
        console.log(player)
    }
}

function splitNumberToParts(number, parts) {
    const result = []
    for(let i = 0; i < parts; i++) {
        part = getRandomNumber(0, number)
        number > 0 && parts === i + 1 ? result.push(number) : result.push(part);
        number = number - part;
    }
    console.log(result)
    return result
}

splitNumberToParts(20, 4)