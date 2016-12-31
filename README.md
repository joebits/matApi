#matApi

## Installation
```sh
klona eller ladda ner
npm install
npm start
öppna chrome
http://localhost:8080
```

## Beskrivning
Vue.js / Node.js / Express / Materializedcss /

En app för att hämta maträtter och ingredienser via matapi.se
Jag valde att använda Vue.js då det verkade spännande och något som vi ska använda i Kompetensmatris-projektet.
Node.js kom med lite på köpet och det visade sig vara relativt smidigt att använda.

Hela repot har utgångspunkt ur en boilerplate som finns här: https://www.npmjs.com/package/node-vue

Jag fick snabbt problem med mina anrop till Api:et och fick felet:

"XMLHttpRequest cannot load http://blablabla. No
'Access-Control-Allow-Origin' header is present on the requested
resource. Origin 'blablabla' is therefore not allowed access."

Detta resulterade i att jag istället gjorde anropet via node.Js på serversidan
och skickade detta vidare till klienten. Eftersom jag är helt grön på både Node och
Vue var detta lite småkinkigt men jag fick till det tillslut!

Sidan är minimalt style'ad med Materialzedcss som också finns som en component (betaisch)
till Vue. Detta krävde även jQuery...
https://github.com/johnleider/vue-materials

Om jag skulle jobba vidare hade det varit kul att få till sorteringen av produkter/ingredienser 
och senare även implementera grafer för att presentera ingrediensfakta!
