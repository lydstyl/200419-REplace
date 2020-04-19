const original =
  "Salut, je suis un text qui va être remplacé plusieurs fois et je vais t'aider à trouver le bon algo.";

const replacements = [
  { re: 'Salut', with: 'Bonjour' },
  { re: '(text)|(algo)', with: 'Schtroumpf' },
  { re: '\\s\\.*é', with: ' xx ' },
];

let afterReplacements = original;

for (let i = 0; i < replacements.length; i++) {
  const replacement = replacements[i];
  afterReplacements = afterReplacements.replace(
    new RegExp(replacement.re, 'g'),
    new RegExp(replacement.with)
  );

  console.log(afterReplacements);
}
