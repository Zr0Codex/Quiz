//#### The Palindrome ##### //
function checkPalindrome(word) {
  var low = word.toLowerCase()
  for (var i in ((low.length) / 2)) {
    if (low[i] !== low[len - 1 - i]) {
        return false
    }
  }
    return true
}
var words = "Developed"
console.log(`#############################`);
console.log(`1. The Palindrome`);
console.log(`${words} is The Palindrome Words: ${checkPalindrome(words)}`);
console.log(`#############################`);
//#### The Palindrome ##### //


//#### 2. Group words with same set of characters ##### //
var words = ["VMRCO", "VORCM", "MCRTOX", "ZXTAC", "XZATC", "XMTCOR", "OXVS", "AZTXC", "VXOS", "RZAT", "MRCOTX", "SVXO", "TRAZ", "ZTAR", "MVOCR"]

function grouper(key) {
  var list = []
  count = 1
  for (var i of key) {
    var data = i.split('').sort().join('')
    if (!list[data]) {
      list[data] = [i]
    }
    else {
      list[data].push(i)
    }
  }
  for (var loop in list) {
    var data = list[loop]
    data = String(data).replace(',', ' - ')
    data = String(data).replace(',', ' - ')
    console.log(`${count++}. ${data}`);
  }

}
console.log(`#############################`);
console.log(`2. The words group`);
grouper(words)
console.log(`#############################`);

//#### 2. Group words with same set of characters ##### //

//### 3. The Permutations ###//
function permut(string) {
  if (string.length < 2) {
    return string;
  }
  var permutations = []
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (string.indexOf(char) != i) {
      continue;
    }
    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
    for (var subPermutation of permut(remainingString)) {
      permutations.push(char + subPermutation)
    }
  }
  return permutations;
}
console.log(`#############################`);
console.log(`3. The Permutations`);
console.log(`Result of ABC: ${permut('ABC')}`);
console.log(`Result of 112: ${permut('112')}`);
console.log(`Result of AB: ${permut('AB')}`);
console.log(`#############################`);
//### 3. The Permutations ###//


//### 4. The sum of exponent series ###//

function calculation(n) {
  var result = 0
  for (var i = 1; i <= n; i++){
    result += (i ** i)
  }
  return result
}
console.log(`#############################`);
console.log(`4. The Sum of Exponent Series`);
console.log(`Sum of series n=${2}: ${calculation(2)}`);
console.log(`Sum of series n=${3}: ${calculation(3)}`);
console.log(`Sum of series n=${5}: ${calculation(5)}`);
console.log(`#############################`);
//### 4. The sum of exponent series ###//


//### 5. The Parking Fee ###//

function fee(hours, min) {
  var datalist = []
  var amountfee = 0

  // less than 1H //
  if (min >= 0 && min <= 30 && hours == 0) {
    var fee = 0
    datalist.push(fee)
  }

  else if (min >= 31 && min <= 59 && hours == 0) {
    var fee = 0
    var multiply = 10
    fee = multiply
    datalist.push(fee)
  }
  // less than 1H //
    
  // 1H //
  else if (min == 0 && hours > 0 && hours == 1) {
    var fee = 0
    var multiply = 10
    fee = hours*multiply
    datalist.push(fee)
  }
    
  else if (min >= 1 && min <= 59 && hours > 0 && hours == 1) {
    var fee = 0
    var multiply = 10
    hours += 1
    fee = hours*multiply
    datalist.push(fee)
  }
  // 1H //
    
  // 2H //
  else if (min == 0 && hours > 0 && hours == 2) {
    var fee = 0
    var multiply = 10
    fee = hours*multiply
    datalist.push(fee)
  }
    
  else if (min >= 1 && min <= 59 && hours > 0 && hours == 2) {
    var fee = 0
    var multiply = 10
    hours += 1
    fee = hours*multiply
    datalist.push(fee)
  }
  // 2H //
    
  // 3H //
  else if (min == 0 && hours > 0 && hours == 3) {
    var fee = 0
    var multiply = 10
    fee = hours*multiply
    datalist.push(fee)
  }
    
  else if (min >= 1 && min <= 59 && hours > 0 && hours == 3) {
    var fee = 0
    var multiply = 10
    hours += 1
    fee = hours*multiply
    datalist.push(fee)
  }
  // 3H //
  
  // 4H //
  else if (min == 0 &&  hours == 4) {
    var fee = 0
    var multiply = 20
    fee = ((hours-3)*10)+((hours-3)*multiply)
    datalist.push(fee)
  }
  else if (min >= 1 && min <= 59 && hours == 4) {
    var fee = 0
    var multiply = 20
    fee = ((hours-3)*10)+((hours-2)*multiply)
    datalist.push(fee)
  }
  // 4H //

  // 5H //
  else if (min == 0 &&  hours == 5) {
    var fee = 0
    var multiply = 20
    fee = ((hours-2)*10)+((hours-4)*multiply)
    datalist.push(fee)
  }
  else if (min >= 1 && min <= 59 && hours == 5) {
    var fee = 0
    var multiply = 20
    fee = ((hours-2)*10)+((hours-3)*multiply)
    datalist.push(fee)
  }
  // 5H //
  
  // 6H //
  else if (min == 0 &&  hours == 6) {
    var fee = 0
    var multiply = 20
    fee = ((hours-3)*10)+((hours-4)*multiply)
    datalist.push(fee)
  }
  else if (min >= 1 && min <= 59 && hours == 6) {
    var fee = 10
    var multiply = 20
    fee = fee * multiply
    datalist.push(fee)
  }
  // 6H //
  // more than 6H //
  else if (hours > 6) {
    var fee = 10
    var multiply = 20
    fee = fee * multiply
    datalist.push(fee)
  }
  // more than 6H //
  for (var fee in datalist) {
    amountfee = amountfee + datalist[fee]
    return amountfee
  }
  amountfee = 0
}


function timeConvertMinToH(h,num) {
  var hoursx = h
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  var list = [(hoursx+rhours), rminutes]
  return list
}
console.log(`#############################`);
console.log(`5. The Parking Fee`);
var more30minless3 = timeConvertMinToH(2, 10)
console.log(`Input Hours: ${more30minless3[0]}, Input Minutes: ${more30minless3[1]}`);
console.log(`your parking fee: ${fee(more30minless3[0], more30minless3[1])} Bath`);

var more4less6 = timeConvertMinToH(4, 15)
console.log(`Input Hours: ${more4less6[0]}, Input Minutes: ${more4less6[1]}`);
console.log(`your parking fee: ${fee(more4less6[0], more4less6[1])} Bath`);

var over6 = timeConvertMinToH(6, 2)
console.log(`Input Hours: ${over6[0]}, Input Minutes: ${over6[1]}`);
console.log(`your parking fee: ${fee(over6[0], over6[1])} Bath`);
console.log(`#############################`);
//### 5. The Parking Fee ###//


///// ######### HOW TO RUN ######### //////
/// open terminal in folder that have this file and type ///
///  node IAMC.js ///
/// get the result ///