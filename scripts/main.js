/* Practice Assignment 3:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Construct a basic IF statement that assigns "Informatics" to the
// myDept variable IF the value of myNumber is greater than 1.
// The variables are already declared.
// Do not change the existing code.

const question1 = (myNumber) => {
  let myDept;
  /////// write your IF statement below this line /////////
  //If my number is greater than 1.
  if(myNumber > 1){
      //Assign myDept the value "Informatics."
      myDept = "Informatics"
  }
  /////// write your IF statement above this line /////////
  return myDept;
};

// 2) Construct an IF statement that assigns "JavaScript" to the
// myLang variable IF the length property of myValue is equal to 10.
// Add an ELSE statement that assigns "Python" otherwise.
// The variables are already declared.
// Do not change the existing code.

const question2 = (myValue) => {
  let myLang;
  /////// write your IF statement below this line /////////
  //If myValue's length is equal to 10.
  if(myValue.length === 10){
    myLang = "Javascript"
  }else{
    myLang = "Python"
  }
  /////// write your IF statement above this line /////////
  return myLang;
};

// 3) Copy the IF / ELSE statement from #2 and paste it below.
// Add an ELSE IF statement to it that checks if the length property of
// myValue is greater than 3. If true, assign "PHP" to myLang.
// The variables are already declared.
// Do not change the existing code.

const question3 = (myValue) => {
  let myLang;
  /////// write your IF statement below this line /////////
  if(myValue.length === 10){
    myLang = "Javascript"
  }else if(myValue.length > 3){
    myLang = "PHP"
  }else{
    myLang = "Python"
  }
  /////// write your IF statement above this line /////////
  return myLang;
};

// 4) Construct a SWITCH statement that will assign the following values to the variable
// myFaveFood based on the value of myNumber the SWITCH statement receives:
// 1 = Pizza, 2 = Hamburger, 3 = Ice Cream, 4 = Sushi, Anything else = Pho
// The variables are already declared.
// Do not change the existing code.

const question4 = (myNumber) => {
  let myFaveFood;
  /////// write your SWITCH statement below this line /////////
    switch(myNumber){
        case 1:
            myFaveFood = "Pizza";
            break;
        case 2:
            myFaveFood = "Hamburger";
            break;
        case 3:
            myFaveFood = "Ice Cream";
            break;
        case 4:
            myFaveFood = "Sushi";
            break;
        default:
            myFaveFood = "Pho";
    }
  /////// write your SWITCH statement above this line /////////
  return myFaveFood;
};

// 5) Construct a TERNARY statement with the ternary operator
// that checks if the variable myTemp is greater than or equal to 75.
// If true, assign the value "Great weather!" to the variable myWeather.
// If false, assign the value "Still cold." to the variable myWeather.
// This ternary operator statement should just be one line of code.
// The variables are already declared.
// Do not change the existing code.

const question5 = (myTemp) => {
  let myWeather;
  /////// write your TERNARY OPERATOR statement below this line /////////
    myWeather = myTemp >= 75 ? "Great weather!" : "Still cold."
  /////// write your TERNARY OPERATOR statement above this line /////////
  return myWeather;
};



//Below are test cases to verify the functions run with expected output.
//Test cases for question 1
const testQuestion1 = () => {
    //Declare a variable passed.
    let passed;
    //If question1(1) returns the expected value passed = true;
    if(question1(1) === undefined){
        passed = true;
    }else{
        passed = false;
    };
    //If we get the expected result and the previous test passed return true
    if(question1(10) === "Informatics"){
        passed = true && passed;
    }else{
        passed = false;
    }
    return passed;
}
//End test case for question 1.

//Test cases for question 2
const testQuestion2 = () => {
    //Declare a variable passed.
    let passed;
    //If question2 returns the expected value passed = true;
    if(question2("Javascript") === "Javascript"){
        passed = true;
    }else{
        passed = false;
    };
    //If we get the expected result and the previous test passed return true
    if(question2(1) === "Python"){
        passed = true && passed;
    }else{
        passed = false;
    }
    return passed;
}
//End test case for question 2.

//Test cases for question 3
const testQuestion3 = () => {
    //Declare a variable passed.
    let passed;
    //If question3 returns the expected value passed = true;
    if(question3("Javascript") === "Javascript"){
        passed = true;
    }else{
        passed = false;
    };
    //If we get the expected result and the previous test passed return true
    if(question3('PY') === "Python"){
        passed = true && passed;
    }else{
        passed = false;
    }
    //If we get the expected result and the previous test passed return true
    if(question3("PHP!") === "PHP"){
        passed = true && passed;
    }else{
        passed = false;
    }
    return passed;
}
//End test case for question 3.

//Test cases for question 4
const testQuestion4 = () => {
  //Declare a variable passed.
  let passed;
  //If question4 returns the expected value passed = true;
  if(question4(1) === "Pizza"){
      passed = true;
  }else{
      passed = false;
  };
  //If we get the expected result and the previous test passed return true
  if(question4(2) === "Hamburger"){
      passed = true && passed;
  }else{
      passed = false;
  }
  //If we get the expected result and the previous test passed return true
  if(question4(100) === "Pho"){
      passed = true && passed;
  }else{
      passed = false;
  }
  return passed;
}
//End test case for question 4.

//Test cases for question 5
const testQuestion5 = () => {
  //Declare a variable passed.
  let passed;
  //If question5 returns the expected value passed = true;
  if(question5(175) === "Great weather!"){
      passed = true;
  }else{
      passed = false;
  };
  if(question5(75) === "Great weather!"){
    passed = true;
  }else{
      passed = false;
  };
  //If we get the expected result and the previous test passed return true
  if(question5(10) === "Still cold."){
      passed = true && passed;
  }else{
      passed = false;
  }
  return passed;
}
//End test case for question 5.

