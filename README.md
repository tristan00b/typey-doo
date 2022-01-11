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

Performs a shallow check to determine whether types `U` and `V` are the same.

### type: `AllEqual<T extends unknown[]>`

Performs a shallow check to determine whether all elements of a given list `T` of types are the same.

### type: `If<Cond extends boolean, A, B>`

Evaluates to a type `A` if `Cond` has type `true`, or `B` when `Cond` has type `false`.

## Functions

*TODO*

# License

MIT © [Tristan Bayfield](http://github.com/tristan00b)
