const string = 'JavaScript is a wonderful programming language'

const replaceString = string.replace('JavaScrip', 'TypeScript')

console.log(string);
console.log(replaceString);


const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
  let emojized = ""
  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized;
}

console.log(emojiReplace(inputText))