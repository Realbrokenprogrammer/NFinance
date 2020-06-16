'use strict'

window.onload = function() {
    calculateStuff()
};

function calculateStuff()
{
    for (let i = 0; i < 2; ++i)
    {
        let stock = document.getElementById('stock-' + i)
        let stockCurrent = document.getElementById('stock-'+ i +'-current').textContent
        let stockBoughtAt = document.getElementById('stock-'+ i +'-boughtAt').textContent
        let stockShares = document.getElementById('stock-'+ i +'-shares').textContent

        let spentValue = parseInt(stockShares) * parseInt(stockBoughtAt)
        let spentElement = document.createElement('H5')
        spentElement.textContent = 'Spent: ' + spentValue
        stock.append(spentElement)

        let CurrentValue = parseInt(stockShares) * parseFloat(stockCurrent)
        let CurrentValueElement = document.createElement('H5')
        CurrentValueElement.textContent = 'Current Value: ' + CurrentValue
        stock.append(CurrentValueElement)

        let CurrentWinLossElement = document.createElement('H5')
        CurrentWinLossElement.textContent = 'Current W/L: ' + ((parseFloat(stockCurrent) - parseInt(stockBoughtAt)) * parseInt(stockShares))
        stock.append(CurrentWinLossElement)
    }
}