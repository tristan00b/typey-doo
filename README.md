[![CI](https://github.com/tristan00b/typey-doo/actions/workflows/tests.yml/badge.svg)](https://github.com/tristan00b/typey-doo/actions/workflows/tests.yml)
[![NPM](https://img.shields.io/npm/v/typey-doo)](https://www.npmjs.com/package/typey-doo)
[![Downloads](https://img.shields.io/npm/dm/typey-doo.svg)](https://www.npmjs.com/package/typey-doo)

# *It's typey-doo!*

## What it is?

*typey-doo* is a library of utility types and helper functions to help with your [TypeScript](https://www.typescriptlang.org/) projects. *I doo declare!*

## What it do?

It *doo* a lot! As much as I need it to do in my own projects... *And, probably more!*

##  *Algebraic Types &mdash; Any way you want it!*

### type: `KeysOfUnion<U extends object>`

Gets the union of keys of from a union of objects.

```ts
type Keys = KeysOfUnion<{ 'A': 0 }|{ 'B': 1 }|{ 'elephant': 2 }>
// type Keys = 'A'|'B'|'elephant
```

### type: `UnionToIntersection<U extends object>`

Transforms a union of objects to an intersection of objects.

```ts
type I = UnionToIntersection<{ 'A': 0 }|{ 'B': 1 }|{ 'elephant': 2 }>
// type I = { 'A': 0 }&{ 'B': 1 }&{ 'elephant': 2 }

const i0: I = { 'A': 0, 'B': 1, 'elephant': 2 } // Ok!
const i1: I = { 'A': 1, 'B': 1, 'elephant': 2 } // Nope!
// Error: type 1 is not assignable to type 0
```

### type: `MergeIntersection<I extends object>`

Combines an ugly intersection of object types into a single, beautiful object type.

```ts
type T = MergeIntersection<{ 'A': 0 }&{ 'B': 1 }&{ 'elephant': 2 }>
// type T = { 'A': 0, 'B': 1, 'elephant': 2 }
```

Much better!! Now I can sleep easy 😂*zzzzz!*

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

## *Errors &mdash; Oopsies!*

### type: `AggregateErrorCtor<E extends AggregateError>`

This type can be used in function signatures that expect a constructor for a subclass of `AggregateError`, without needing to extend the `AggregateErrorConstructor` interface.

See also:
- [ErrorCtor](#type-errorctore-extends-error)
- [fail](#function-failt-extends-stringerroraggregateerror-e-extends-errorerr-t-errt-errorconstructorerrorctore--error-never)

### type: `ErrorCtor<E extends Error>`

This type can be used in function signatures that expect a constructor for a subclass of `Error`, without needing to extend the `ErrorConstructor` interface.

See also:
- [AggregatErrorCtor](#type-aggregateerrorctore-extends-aggregateerror)
- [fail](#function-failt-extends-stringerroraggregateerror-e-extends-errorerr-t-errt-errorconstructorerrorctore--error-never)

### type: `IsError<T>`

Evaluates to type `true` for any type `T` that extends `Error`, `false` otherwise.

### type: `IsAggregateError<T>`

Evaluates to type `true` for any type `T` that extends `AggregateError`, `false` otherwise.

### function: `concatErrors<Ts extends Error[]>(errors: [...Ts], msg?: string): AggregateError`

Takes a *bunch o' errors* and gives back an `AggregateError`.

```ts
let e0 = new TypeError('Oopsies!')

let e1 = new AggregateError([
    new Error('Something is wrong!'),
    new Error('Something else is wrong!')
  ], 'These happened together')

let e2 = new Error('The icing on the cake!')

let allMyErrors = concatErrors([e0, e1, e2], 'All my Errors in one place!')

console.dir(allMyErrors)
// AggregateError: All my errors in one place!
//   columnNumber: 5
//   errors: Array [ TypeError, AggregateError, Error ]
//   fileName: "debugger eval code"
//   lineNumber: 1
//   message: "All my errors in one place!"
//   stack: "@debugger eval code:1:5\n"
//   <prototype>: AggregateError.prototype { stack: "", _ }
```

### function: `fail<T extends string|Error|AggregateError, E extends Error>(err: T, ErrT: ErrorConstructor|ErrorCtor<E> = Error): never`

A convenience function that allows errors to be thrown from within an expression:

```ts
definitelyNotUndefined ?? fail('it was undefined...')
```

With 2 overloads to choose from!

```ts
// 1st overload: function fail(err: Error | AggregateError): never
fail(new MyErrorType('Throw me!'))
fail(new MyAggregateErrorType([...], 'Throw us!'))

// 2nd overload: function fail<E extends Error>(msg: string, ErrT?: ErrorConstructor|ErrorCtor<T>): never
fail("Don't make me work for you!")
fail('...but do it my way!!', MyErrorType)
```

## *Expectations &mdash; We've all got &#39;em!*

### type: `Expect<Expected, Actual>`

Gives the expected type back when `Expected` and `Actual` are the same, otherwise `never`.

### type: `ExpectTrue<Actual>`

Gives the type `true` back when `Actual` has type `true`, otherwise `never`.

### type: `ExpectFalse<Actual>`

Gives the type `false` back when `Actual` has type `false`, otherwise `never`.

### type: `ExpectEqual<A, B>`

Behaves like `Equal`, giving the type `true` back when types `A` and `B` are of the same type. However, when `A` and `B` are of *differing* types, behaves like `Expect`, giving back `never`.

## *Tuples &mdash; It's tuples all the way down!*

### type: `Concat<A extends unknown[], B extends unknown []>`

Concatenates a pair of tupes `A` and `B`.

### type: `Drop<T extends unknown[]>`

Evaluates to the tuple matching `T` but with the last element removed.

Aliases: `OmitLast`

### type: `Head<T extends unknown[]>`

Evaluates to the type of the first element of `T` when `T` is a nonempty tuple, otherwise `undefined`.

### type: `Last<T extends unknown[]>`

Evaluates to the type of the last element of `T` when `T` is a nonempty tuple, otherwise `undefined`.

### type: `Tail<T extends unknown[]>`

Evaluates to the tuple matching `T` but with the first element removed.

Aliases: `Rest`, `OmitFirst`

### type: `FindIndex<V, T extends unknown[]>`

Finds the index of an element `V` in tuple `T`, or `never` if not found.

### type: `Filter<V, T extends unknown[]>`

Filters any elements of type `V` from tuple `T`.

### type: `Repeat<V, N extends number>`

Generates a tuple of `N` occurrences of type `V`.

## *Nominals &mdash; A rose by any other name would fail to type check!*

### type: `TaggedType<T extends string, U>`

Creates a tagged type for a common underlying type.

```ts
type Seconds  = TaggedType<'Seconds', number>
type Meters   = TaggedType<'Meters', number>
type Velocity = TaggedType<'Meters/Second', number>

declare function getVelocity(d: Meters, t: Seconds): Velocity

// ...

const d: Meters  = ...
const t: Seconds = ...

const v0 = getVelocity(4, 2) // Error!
const v1 = getVelocity(t, d) // Error!
const v2 = getVelocity(d, t) // Ok!
```

### function: `to<T extends ...>(value: ValueType<T>): T`

Casts a value of some type `V` to a tagged type of the same underlying type `V`.

```ts
const d: Meters  = to<Meters>(4)
const t: Seconds = to<Seconds>(2)

let x: number = 9000
x = d // Error!
x = t // Error!
```

### function: `fr<T extends ...>(value: T): ValueType<T>`

Casts a tagged type back to its underlying type.

```ts
const d: Meters = ...

let x: number = 9000
x = d             // Error!
x = fr<Meters>(d) // Ok!
x = fr(d)         // Ok! TypeScript is smart enough to infer T
```

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

## *Asertions &mdash; The key to being assertive!*

### function:
  - `assert(cond, error?): asserts cond`
  - `assert(cond, message?, ErrT?): asserts cond`

Asserts the thruthiness of `cond`, throwing either an optional error instance `error`, or a string `message` as either an instance of `Error` or an optionally specified error type `ErrT`.

# License

MIT © [Tristan Bayfield](http://github.com/tristan00b)
