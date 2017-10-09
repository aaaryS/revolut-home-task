# Web Development Home Task

Open the current Revolut app, on either iOS or Android, and navigate to the exchange screen.
If the app is not available in your country you can observe how application works in video https://youtu.be/c0zPSiKYipc?t=29s. (Exchange screen is on the 29th second of the video)

Implement functionality of this screen in your own custom web widget using FX rates from either source:
* http://www.ecb.int/stats/exchange/eurofxref/html/index.en.html#dev
* https://openexchangerates.org/
* Your preferred source of FX rates

## Explicit Requirements
* Your app should poll the endpoint every 10 seconds to get the latest rates for GBP, EUR and USD. (The API provides close of day FX rates. Although we expect you to refresh the rate every 10s, we do not expect the rate to change every 10s as most free rate sources won’t provide live rates)

## Implicit Requirements
* The widget must work and produce correct results.
* The code produced is expected to be of high standard.
* You should implement as many features from the model exchange screen as possible.

## Other expectations
* Tech stack for application: React (Preact) and Redux (or Alternatives)
* The application should be bug-free. Test your app before write to us that it is ready :)
