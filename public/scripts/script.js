'use strict'

window.onload = function() {
    calculateStuff()
};

function calculateStuff()
{
    for (let i = 0; i < 2; ++i)
    {
        let nordea = document.getElementById('stock-' + i)
        let nordeaCurrent = document.getElementById('stock-'+ i +'-current').textContent
        let nordeaStats = document.getElementById('stock-'+ i +'-stats').textContent
        let nordeaShares = document.getElementById('stock-'+ i +'-shares').textContent

        let spent = parseInt(nordeaShares) * parseInt(nordeaStats)
        let x = document.createElement('H5')
        x.textContent = 'Spent: ' + spent
        nordea.append(x)

        let value = parseInt(nordeaShares) * parseFloat(nordeaCurrent)
        let y = document.createElement('H5')
        y.textContent = 'Current Value: ' + value
        nordea.append(y)

        let z = document.createElement('H5')
        z.textContent = 'Current W/L: ' + ((parseFloat(nordeaCurrent) - parseInt(nordeaStats)) * parseInt(nordeaShares))
        nordea.append(z)
    }
}