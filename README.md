#matApi

## Installation
```sh
Klona eller ladda ner
npm install
npm start
```

## Beskrivning
Vue.js / Node.js / Express / Materializedcss /

En app för att hämta maträtter och ingridienser via matapi.se
Jag valde att använda Vue.js då det verkade spännande. Node.js kom med lite på köpet
och det visade sig vara relativt smidigt att använda.

Jag fick snabbt problem med mina anrop till Api:et och fick felet:

"XMLHttpRequest cannot load http://blablabla. No
'Access-Control-Allow-Origin' header is present on the requested
resource. Origin 'null' is therefore not allowed access."

Detta resultelrade i att jag istället gjorde anropet via node.Js på serversidan
och skickade detta vidare till klienten. Eftersom jag är helt grön på både Node och
Vue var detta lite småkinkigt men jag fick till det tillslut!

Sidan är minimalt style'ad med Materialzedcss som ochså finns som en component (beta)
till Vue. Detta krävde även jQuery...

Om jag skulle jobba vidare hade det varit kul att implementera grafer för att presentera
ingridiensfakta!
