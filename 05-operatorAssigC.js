


const checkTCSEligibility = (gradScore, hscScore, sscScore, candidateName) => {
  if ((gradScore >= 70) || (hscScore >= 80) || (sscScore >= 90)) {
    console.log(`Congratulations ${candidateName}, you are eligible for TCS interview.`);
  } else {
    console.log(`Unfortunately ${candidateName}, you are not eligible for interview.`);
  }
}

// Invoke the function expression with the given values
checkTCSEligibility(80, 86, 90, "Mahesh");
checkTCSEligibility(70, 65, 55, "Rahul");
checkTCSEligibility(60, 79, 88, "Ajit");