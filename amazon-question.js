// Amazon interview question (Based on a video thumbnail, didn't see the video)

// "Find the first non repetable char occurence"

countsObj = {};
"aaabccdee".split("").forEach(el => {
  (countsObj[el] == undefined) ? countsObj[el] = 1 : countsObj[el] += 1
})
let counts = Object.entries(countsObj);
for(let [letter, count] of counts) {
  if(count == 1) { 
    console.log(letter);
    break;
  }
}
