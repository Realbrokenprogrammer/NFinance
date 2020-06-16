'use strict'
let router = require('express').Router()

const YahooFinance = require('yahoo-finance')
const util = require('util')

// this will trigger on the root url (/)
router.route('/')
  .get(function (request, response, next) {
    // render the view for the home page

    // NOTE(Oskar): Example stocks for testing. Load theese dynamically.
    YahooFinance.quote({
        symbol: 'NDA-SE.ST',
        modules: ['price', 'summaryDetail']
    }, function (err, Nordea) {
        if (err)
        {
            throw err
        }
        
        // TODO(Oskar): Example values. User can fill in w/e
        Nordea.myStats = {
            boughtAt: 30,
            have: 200
        }

        YahooFinance.quote({
            symbol: 'BYND',
            modules: ['price', 'summaryDetail']
        }, function (err, BeyondMeat) {
            if (err)
            {
                throw err
            }
            
            // TODO(Oskar): Example values. User can fill in w/e
            BeyondMeat.myStats = {
                boughtAt: 100.00,
                have: 30
            }

            response.render('home/index', {Quotes : [Nordea, BeyondMeat]})
        })
    })

  })

module.exports = router