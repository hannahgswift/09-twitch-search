// This function should take in one arguments:
// parent: element which is an existing element
//
// This function should return a number that is the sum
// of the contents of ALL of the child elements within the parent argument

export default function sumFromList(parent) {
  var allList = parent.querySelectorAll('li');
  var collector = 0;

 for (var i = 0; i < allList.length; i++) {
   collector = parseInt(allList[i].innerText) + collector;
 }
 return collector;
}
