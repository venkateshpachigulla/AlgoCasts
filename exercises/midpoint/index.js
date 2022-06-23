// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  // if the person is going with exact double speed and reached destination then the slow person will cover half distance
  //if next elements available then move else slow will be the middle point
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;
