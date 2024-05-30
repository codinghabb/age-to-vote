function toVote(age) {
   if (age >= 18) {
     return "you are eligible";
   }
   else{
    return "you are not eligible to vote";
   }
}
console.log(toVote(0))