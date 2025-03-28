const pres = Array.from(document.getElementsByClassName('text'));
let n = 0;

const textArr = [
  'HEJ BROBYGGERE',
  'Her på webdev bruger vi mange teknologier, så som HTML, CSS og Javascript.',
  'HTML er "byggeblokkene" til hjemmesiden, det er det der har defineret at der skal være de har tekststumper ol.',
  'CSS er det visuelle, det er det som bestemmer hvor stor teksten skal være, hvilken farve osv. osv.',
  'JavaScript tager sig af funktionaliteten, og kan beskrives som husets elektricitet. Det er også javascript, som får det her tekst til at dukke op.',
];
function print() {
  if (n >= textArr.length || n >= pres.length) return;

  const word = textArr[n];
  const el = pres[n];

  for (let i = 0; i < word.length; i++) {
    setTimeout(() => {
      el.innerHTML += word[i];
    }, i * 25);
  }
  n++;
}
document.addEventListener('keydown', print);
