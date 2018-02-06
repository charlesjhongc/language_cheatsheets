// This is a cheat sheet which leveraging syntax highlighting, don't execute it
// String Quotes : single quote
// Style guide : PEP 8 (online checker provided)


//Programs start running in package main.
package main
// package 名稱相同則share same scope
/**********************************************************************/
var i int
/*An array's length is part of its type,
so arrays cannot be resized.
This seems limiting, but don't worry;
Go provides a convenient way of working with arrays.
*/
var a [10]int
// variable declarations may be "factored" into blocks
var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)
// Constants cannot be declared using the := syntax
const Pi = 3.14
// A slice is a dynamically-sized, flexible view into the elements of an array
// This selects a half-open range which includes the first element, but excludes the last one.
// Slices are like references to arrays
// The type []T is a slice with elements of type T
primes := [6]int{2, 3, 5, 7, 11, 13}
var s []int = primes[1:4]
// A slice has both a length and a capacity
// length of a slice is the number of elements it contains
// capacity of a slice is the number of elements in the underlying array
// counting from the first element in the slice!!!!
len(s)
cap(s)
// The zero value of a slice is nil.
/**********************************************************************/
// Functions
func add(x int, y int) int {
	return x + y
}

// A function can return any number of results.
func swap(x, y string) (string, string) {
	return y, x
}

// Go's return values may be named. If so, they are treated as variables defined at the top of the function.
// Naked return statements should be used only in short functions
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return // naked return
}

// Inside a function, the := short assignment statement can be used in place of a var declaration with implicit type.
// Only can be used inside a function
func main() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}
/**********************************************************************/
// Flow control
// Go has only one looping construct, the for loop.
sum := 1
for ; sum < 1000; {
	sum += sum
}
// For is Go's "while"
sum := 1
for sum < 1000 {
	sum += sum
}
// Forever(omit the loop condition it loops forever)
for {
}
// Like for, the if statement can start with a short statement to execute before the condition.
if v := math.Pow(x, n); v < lim {
	return v
}
/**********************************************************************/
// Pointers
// The type *T is a pointer to a T
var p *int
// The & operator generates a pointer to its operand
i := 42
p = &i
// The * operator denotes the pointer's underlying value
fmt.Println(*p) // read i through the pointer p
*p = 21         // set i through the pointer p
// Unlike C, Go has no pointer arithmetic
/**********************************************************************/
// Struct
type Vertex struct {
	X int
	Y int
}
v := Vertex{1, 2}
v.X = 4
/**********************************************************************/



/**********************************************************************/
/*
The range form of the for loop iterates over a slice or map.
When ranging over a slice, two values are returned for each iteration. The first is the index, and the second is a copy of the element at that index.
range iterates over elements in a variety of data
*/
var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
}

/**********************************************************************/
/*
A map maps keys to values.
The zero value of a map is nil. A nil map has no keys, nor can keys be added.
The make function returns a map of the given type, initialized and ready for use.
*/
type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"])
}
​
// Map literals
var m = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}

/**********************************************************************/
/*
Function closures
Go functions may be closures. A closure is a function value that references variables from outside its body. The function may access and assign to the referenced variables; in this sense the function is "bound" to the variables.
For example, the adder function returns a closure. Each closure is bound to its own sum variable.
*/
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
		)
	}
}
/**********************************************************************/
/*
Methods:
define某個type(不僅限於struct, general type都可以)的method
*/
func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}
/**********************************************************************/

/*
pended:
defer
switch
*/




// In Go, a name is exported if it begins with a capital letter.
// When importing a package, you can refer only to its exported names. Any "unexported" names are not accessible from outside the package.
