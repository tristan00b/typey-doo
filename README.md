# *It's typey-doo!*

## What it is?

*typey-doo* is a library of utility types and helper functions to help with your [TypeScript](https://www.typescriptlang.org/) projects. *I doo declare!*

## What it do?

It *doo* a lot! As much as I need it to do in my own projects... *And, probably more!*

## Types

## *Boolean Algebra &mdash; Simply bootiful!*

### type: `NOT<A extends boolean>`

Negates a boolean.

### type: `AND<A extends boolean, B extends boolean>`

AND's two booleans.

### type: `OR<A extends boolean, B extends boolean>`

OR's two booleans.

### type: `XOR<A extends boolean, B extends boolean>`

XOR's two booleans.

### type: `NAND<A extends boolean, B extends boolean>`

NAND's two booleans.

### type: `NOR<A extends boolean, B extends boolean>`

NOR's two booleans.

### type: `XNOR<A extends boolean, B extends boolean>`

XNOR's two booleans.

## *Comparisons &mdash; I know right?!*

### type: `Falsy<T>`

Determines whether a type `T` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

### type: `Truthy<T>`

Determines whether a type `T` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

### type: `Equal<U, V>`

Performs a shallow check to determine whether types `U` and `V` have the same type.

### type: `AllEqual<T extends unknown[]>`

Performs a shallow check to determine whether all elements of a given list `T` of types have the same type.

### type: `If<Cond extends boolean, A, B>`

Evaluates to a type `A` if `Cond` has type `true`, or `B` when `Cond` has type `false`.

## *Expectations &mdash; We've all got &#39;em!*

### type: `Expect<Expected, Actual>`

Gives the expected type back when `Expected` and `Actual` are the same, otherwise `never`.

### type: `ExpectTrue<Actual>`

Gives the type `true` back when `Actual` has type `true`, otherwise `never`.

### type: `ExpectFalse<Actual>`

Gives the type `false` back when `Actual` has type `false`, otherwise `never`.

### type `ExpectEqual<A, B>`

Behaves like `Equal`, giving the type `true` back when types `A` and `B` are of the same type. However, when `A` and `B` are of *differing* types, behaves like `Expect`, giving back `never`.

## *Tuples &mdash; It's tuples all the way down!*

### type: `Concat<A extends unknown[], B extends unknown []>`

Concatenates a pair of tupes `A` and `B`.

### type: `Drop<T extends unknown[]>`

Evaluates to the tuple matching `T` but with the last element removed.

Aliases: `OmitLast`

### type: `Head<T extends unknown[]>`

Evaluates to the type of the first element of `T`

### type: `Last<T extends unknown[]>`

Evaluates to the type of the last element of `T`

### type: `Tail<T extends unknown[]>`

Evaluates to the tuple matching `T` but with the first element removed.

Aliases: `Rest`, `OmitFirst`

### type: `FindIndex<V, T extends unknown[]>`

Finds the index of an element `V` in tuple `T`, or `never` if not found.

### type: `Filter<V, T extends unknown[]>`

Filters any elements of type `V` from tuple `T`.

### type: `Repeat<V, N extends number>`

Generates a tuple of `N` occurrences of type `V`

## *Objects &mdash; Pretty good. Dare I say, objectively good? I doo dare!*

### type: `AllKeys<T extends unknown[]>`

Gives the union of all keys from the elements of `T`.

```ts
type Keys = AllKeys<[{ 'a': 0 }, { 'b': 1 }, { 'elephant': 42 }]>
// type Keys = 'a' | 'b' | 'elephant'
```

### type: `AsObject<T extends unknown[]>`

Takes a tuple type and converts it into an record type.

Use it like so:
```ts
const obj: AsObject<[ 'a', 'b', 'c' ]> = { 0: 'a', 1: 'b', 2: 'c' }
```

### type: `KeysOf<T extends object>`

Maybe you wanted something *more verbose* than the `keyof` operator?!

### type: `Merge<T extends unknown[]>`

Gives the intersection of the elements of `T`.

```ts
type T0 = Merge<[{ 'a': 0 }, { 'b': 1 }, { 'c': 2 }]>
// type T0 = { a: 0 } & { b: 1 } & { c: 2 }

const o1: T0 = { a: 0, b: 1, c: 2 }         // Ok!
const o2: T0 = { a: 0, b: 1, c: 2, x: 'y' } // Error!
const o3: T0 = { a: 0, b: 1 }               // Error!

type T1 = Merge<[{ a: 0 }, { a: 0, b: 1 }]> // Ok!
// type T1 = { a: 0 } & { a: 0, b: 1}

type T2 = Merge<[{ a: 0 }, { a: 1 }]>       // Nope!
// type T2 = never

```

### type: `ValuesOf<T extends object>`

Gives a shallow union of value types of `T`.

```ts
type Vals = ValuesOf<{ 0: 'a', 1: 'b', 2: 'c', o: { x: 'y' }}>
// type Vals = 'a' | 'b' | 'c' | { x: 'y' }
```

## Functions

*TODO*

# License

MIT © [Tristan Bayfield](http://github.com/tristan00b)
