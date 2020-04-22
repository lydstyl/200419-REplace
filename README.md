# REplacer

Permet de programmer de mutliples remplacements, avec ou sans expression régulière, d'un texte original.

Cette web app est réalisé à partir d'un boilerplate utilisant le bundler Parcel pour un workflow en vanilla JS.

[REplacer, la web app ici](https://rereplacer.netlify.app "REplacer's Homepage")

# Usage

Install dependencies

```
npm install
```

Run dev server - http://localhost:3000

```
npm run dev
```

Build assets for production

```
npm run build
```

# To do

- test
- video

# Regex cheatsheet

- parler des flags //g et //i >> 'coucou les amis'.replace(/\s/g,'\_\_\_'); et 'couCou les amis'.replace(/coucou/i,'Yo');
- exemple sans regex >> J'aime les chats. Les chats sont cools.
- au moins 1 >> cool coooooool coool
- ? optional >> chien chiens avec ou sans s
- . tout sauf nouvelle ligne >> Ma lettre préférée est le E mais j'aime aussi le B >> est le . par est le Z
- \ pour trouver le . exemple \. >> C'est terrible ... Oui.
- /\w/g tous les mots; le négatif W >> word %\_!caracter
- /\s/g tous les spaces; le négatif S >> un_espace encore un
- /\w{4,}/g tous les mots de 4 ou plus car >> un deux trois quatre gigantesque \w{5,} puis \w{5,6}
- /\w{4,5}/g tous les mots de 4 ou 5 car
- /[fc]at/g fat et cat par exemple >> La loi c'est moi quelle joie >> [lm]oi par fête
- /[a-z]at/g >> La loi c'est moi quelle joie >> [a-z]oie? par fête
- /[a-zA-Z]at/g >> remontrer aussi les flags "La Loi c'est moi quelle joie".replace(/\woie?/gi, 'fête')
- /[0-9]at/g >> La l0i c'est m5i quelle j0ie >> .?[0-9]ie? par fiesta
- /(t|T)/g >> jojo toto >> (j|t) par c
- /(t|e|r){2,3}\./g >> ttttrrrrrooooooooooo cooooool >> (t|o){3,} --> a pareil que [ot]{3,}
- /^I/gm m de multiligne >> `Une ligne\n Encore une\n Une autre`.replace(/^U/gm,'xxx')
- /\.\$/gm chaque . de fin de chaque ligne >> x est au début et z est à là z >> ^x --> début puis z\$ --> fin
- /(?<=[tT]he) /g tous les espaces qui commence par le ou Le >> Le chat est énervé mais pas le chien. Le mouton est amusant. (?<=[lL]e)\s --> \_\_\_ >> rempalcer le = par ! pour inverser la selection
- /.(?=at)/g tous les car qui sont suivis de at comme le f de fat
- /\d{10}/g 10 chiffres in a row
- (\d{3}) sera \$1 on peut le nomé truc ainsi /(?<truc>\d{3})/
- /(?:\d{3})/ not capturing group
