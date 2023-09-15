const SCRIPTS = require('../scripts.js')

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({ name, count }) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

// console.log(countBy('dance', char => {
//   let script = characterScript(char.codePointAt(0));
//   return script ? script.name : 'none';
// }))

function domWritingDirection(text) {
  let script;
  let scripts = countBy(text, char => {
    script = characterScript(char.codePointAt(0));
    console.log(script, "Script")
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  if (scripts.length == 1) {
    console.log("Yes the script is just one")
    return script.direction;
  }

  let dominant = scripts.reduce((a, b) => {
    return a.count > b.count ? a : b;
  })

  return SCRIPTS.filter(script => script.name == dominant.name).map(script => script.direction);
}

// Don't know how to get text to test my exercise, so I'll create a function that generates an
// indicated number of words
const generateTextFromCode = code => String.fromCharCode(code);

function generateText(from, to, wordNumber = 3) {
  // Just error checking
  if (to < from) {
    console.warn("I don't really think lack of comprehension of English is your only problem")
    return "Wrong arguments";
  }

  let generated = '',
    textCodes = [];

  for (let words = 0; words < wordNumber; words++) {
    for (let letters = 0; letters < 5; letters++) {
      let letterCode;
      do {
        letterCode = Math.floor(Math.random() * to)
      } while ((letterCode <= from || letterCode > to) && !textCodes.includes(letterCode))
      textCodes.push(letterCode);
    }

    for (let code of textCodes) {
      generated += generateTextFromCode(code);
    }

    console.log(textCodes, words);
    textCodes = []; // Clear the array to make way for new words
    generated += ' ';
  }

  console.log(generated, "So this is the generated text")
  return generated;
}


console.log(domWritingDirection("Checking thos out"));
console.log(domWritingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'), "dont know");
console.log(domWritingDirection(generateText(5000, 5500)), "Anticipate")