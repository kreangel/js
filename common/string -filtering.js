const string = "Привет! Как дела?";

const vowels = ["у", "й", "я", "ы", "ё", "а", "е", "и", "о", "ю", "э"]

const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
    //    const currentLetter = stringToFilter[i] (без приведения к одному регистру)
        const currentLetter = stringToFilter[i].toLowerCase();

    //    if (vowels.indexOf(currentLetter) !== -1) {} (не современный способ)
        if (vowels.includes(currentLetter)) {
        //    extractedVowels = extractedVowels + currentLetter; (полная запись "не сокращенная")
            extractedVowels += currentLetter;

        }
    }
    return extractedVowels;
}

console.log(getVowels(string))