'use strict'
let router = require('express').Router()

const YahooFinance = require('yahoo-finance')
const util = require('util')

// this will trigger on the root url (/)
router.route('/')
  .get(function (request, response, next) {
    // render the view for the home page

    YahooFinance.quote({
        symbol: 'NDA-SE.ST',
        modules: ['price', 'summaryDetail']
    }, function (err, Nordea) {
        if (err)
        {
            throw err
        }
        
        Nordea.myStats = {
            bought: 69,
            have: 153
        }

        YahooFinance.quote({
            symbol: 'BYND',
            modules: ['price', 'summaryDetail']
        }, function (err, BeyondMeat) {
            if (err)
            {
                throw err
            }
            
            BeyondMeat.myStats = {
                bought: 153.04,
                have: 15
            }

            response.render('home/index', {Quotes : [Nordea, BeyondMeat]})
        })
    })

  })

// Exports
module.exports = router