# This is a cheat sheet which leveraging syntax highlighting, don't execute it
# String Quotes : single quote
# Style guide : PEP 8 (online checker provided)

# TODO:如何正確初始話一個list或是一個string? (see built in type)
# TODO:global

# The pass statement does nothing.
# It can be used when a statement is required syntactically
# but the program requires no action

'''
This is string with multiple line
Also, it's a comment with multiple line....
'''

# There are three basic sequence types: lists, tuples, and range objects
# they share some common sequence operations

###########################################################################
# Useful built-in functions
len(array)
type(obj)
range(5)
range(5, 10) # 5 through 9
range(0, 10, 3) # 0, 3, 6, 9
input('Please give me a number : ')
dir(IMPORTED_MODULE_NAME) # find out which names a module defines
###########################################################################
# Strings
str2 = str(1223)?????

mystr = 'Python'
mystr[0]    # 'P'
mystr[-1]   # 'n'
# string slicing
mystr[0:2]  # 'Py' characters from position 0 (included) to 2 (excluded)
# an omitted first index defaults to zero
mystr[:2]   # 'Py'
# an omitted second index defaults to the size of the string being sliced
mystr[4:]   # 'on'
# string is immutable, assigning results error
mystr[0] = 'J'
# mutiple line string
print('''\
How to use
multiple line string
if you don't wan't to change line
add \
at the end
''')
# triple double quotes works as well
###########################################################################
# Lists
bag = [10, 155, 63, 44, 80, 69, 70, 22]
# slicing applys as well
bag[:3] # [10, 155, 63]
# modify the sequence you are iterating, create a copy first!
# otherwise, infinite loop or unexpected behavior may occur
# example:
for w in words[:]: # Loop over a slice copy of the entire list.
    if len(w) > 6:
        words.insert(0, w)

for w in words: # modify the original, infinite loop
    if len(w) > 6:
        words.insert(0, w)

#bag.sort(key=bag.lower, reverse=True);
newbag = sorted(bag);

###########################################################################
msg = 'Hello world!'
print('Message is : {0}'.format(msg))
print('Message is :', msg)  # a space is inserted between items
# special keyword argument : end
print(msg, end='NEWLINE replacement') # replace new line with different string
###########################################################################
x = 40
if x < 0:
    print('Less than zero')
elif x == 0:
    print('Equal to zero')
else x > 0:
    print('Bigger than zero')
###########################################################################
# Functions
# Call by object reference
def fib(n):
    '''Print a Fibonacci series up to n.'''
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
        print()
# The first statement of the function body can optionally be a string literal;
# this string literal is the function’s documentation string, or docstring.
# There are tools which use docstrings to automatically produce online or
# printed documentation, or to let the user interactively browse
# through code; it’s good practice to include docstrings in code
# that you write, so make a habit of it.
###########################################################################
class Animal():
    noise = "grunt"
    size = "large"
    color = "brown"
    def get_color(self):
        return self.color
    def make_noise(self,greetingstr):
        print "Received str : {0}".format(greetingstr)
        return self.noise

class Dog(Animal):
    color = "yellow"
    name = "John"
    def get_color(self):
        return self.color

animal1 = Animal();
animal1.make_noise("Helloworld");
###########################################################################
