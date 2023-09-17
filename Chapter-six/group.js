/* Groups
The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a 
collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part 
of the set. A value can be part of a set only once — adding it again doesn’t have any effect. Write a class called Group 
(since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, 
add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if 
it was a member), and has returns a Boolean value indicating whether its argument is a member of the group. Use the === 
operator, or something equivalent such as indexOf, to determine whether two values are the same. Give the class a static 
from method that takes an iterable object as argument and creates a group that contains all the values produced by 
iterating over it.

Psuedo-code
    class Groups
        Create an empty array bound to this with the name members
        Write a method add that adds a new value to the groups members
        Create a method delete that removes a member
        Create a method has that checks if a value is a member and returns a boolean
*/

class Group {
    constructor(members = []) {
        this.members = members;
    }

    has(value) {
        return this.members.includes(value)
    }

    add(value) {
        if (!this.has(value)) this.members = this.members.concat(value)
    }

    delete(value) {
        if (this.has(value)) this.members = this.members.filter(val => val !== value)
    }
}

let group1 = new Group;
group1.add('boy')
group1.add('girl')
group1.add('man')
group1.add(1)
group1.add(45)
console.log(group1.members, "Members")
group1.delete('boy')
group1.delete('dancer')
console.log(group1.members, "Second list")
console.log(group1.has('girl'), 'has')
console.log(group1.has('dog'), 'has2')
