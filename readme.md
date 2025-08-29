 Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelector**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- Answer -->

Answe Number = 1
 # getElementById 
. It selects the only specific id 
.It has only on element name and collects only one name by group
#  getElementsByClassName
.It selects the many elements name
.can collect many name by team or group

# querySelector
.selects the first element by group by parent
# querySelector
.selects the all  element by parent 


Answe Number = 2
# creating and inserting a new element into the DOM
.selector and apply document.creatElement("tag name")
.creating new value  for selector.textContent = "value"
.then insert tag.appendChild(selector) 


Answe Number = 3
# Event Bubbling*
.when first clicked on a selector event triggered occours 
and starts bubblinf search parent   or grandparent and soon..like a tree and it's root


Answe Number = 4
# Event Delegation
.it means use only one even lisener and clicked which shears its parent and selects it 


Answe Number = 3
# preventDefault()
.stop page reloding 
.open another page otherwise show alart message

# stopPropagation()
it stop bubbling .