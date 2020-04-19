# Vanilla JS Parcel Boilerplate

This is a starter workflow for building vanilla JavaScript applications using Parcel along with Babel and Sass.

There is some sample code (Header and User components) and styling, but feel free to remove them

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

- au moins 1
  ? optional

* 0 ou plus
  . tout sauf nouvelle ligne
  \ pour trouver le . exemple \.
  /\w/g tous les mots; le négatif W
  /\s/g tous les spaces; le négatif S
  /\w{4,}/g tous les mots de 4 ou plus car
  /\w{4,5}/g tous les mots de 4 ou 5 car
  /[fc]at/g fat et cat par exemple
  /[a-z]at/g fat, cat et eat par exemple
  /[a-zA-Z]at/g
  /[0-9]at/g
  /(t|T)/g
  /(t|e|r){2,3}\./g street --> eet je pense pareil que /[ter]{2,3}\./g
  /^I/gm m de multiligne donc la chaque I en début de ligne
  /\.\$/gm chaque . de fin de chaque ligne
  /(?<=[tT]he) /g tous les espaces qui commence par the ou The; rempalcer le = par ! pour inverser la selection
  /.(?=at)/g tous les car qui sont suivis de at comme le f de fat
  /\d{10}/g 10 chiffres in a row

(\d{3}) sera \$1 on peut le nomé truc ainsi /(?<truc>\d{3})/
/(?:\d{3})/ not capturing group
