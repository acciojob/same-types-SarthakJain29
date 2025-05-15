function isSameType(value1, value2) {
  const num1 = Number(value1);
  const num2 = Number(value2);

  const isNaN1 = Number.isNaN(num1);
  const isNaN2 = Number.isNaN(num2);

  if (isNaN1 && isNaN2) return true;

  if (!isNaN1 && !isNaN2) return true;

  if (typeof value1 === "string" && typeof value2 === "string") return true;

  return false;
}


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
