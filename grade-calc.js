// Arguments = students score, total possible score
// 15/20 -> You got a C (75%!) 
// return a string

// A 90--100, B 80-89, C 70-79, D 60-69, F 0-59

let calculator = function (score, maxScore) {

    let percent = (score / maxScore) * 100;
    let letterGrade = '';

    if (percent <= 100 && percent >= 90) {
        letterGrade = 'A';
    } else if (percent <= 89 && percent >= 80) {
        letterGrade = 'B';
    } else if (percent <= 79 && percent >= 70) {
        letterGrade = 'C';
    } else if (percent <= 69 && percent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    
    return `${score}/${maxScore} -> You got a ${letterGrade} (${percent}%!)`
}

let result = calculator(18, 20);
console.log(result)




