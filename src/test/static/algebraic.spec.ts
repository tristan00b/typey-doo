/* ------------------------------------------------------------------------------------------------------------------ *\

   File: algebraic.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectType,
  expectNotType,
  expectAssignable,
  expectNotAssignable,
} from 'tsd'

import type {
  KeysOfUnion,
  UnionToIntersection,
  MergeIntersection,
} from '../../lib/algebraic'

{ // KeysOfUnion
  expectType<KeysOfUnion<{}>>({} as never)
  expectType<KeysOfUnion<{ 'A': 0 }>>('A')

  expectAssignable<KeysOfUnion<{ 'A': 0 }|{ 'B': 1 }|{ 'elephant': 2 }>>('A')
  expectAssignable<KeysOfUnion<{ 'A': 0 }|{ 'B': 1 }|{ 'elephant': 2 }>>('B')
  expectAssignable<KeysOfUnion<{ 'A': 0 }|{ 'B': 1 }|{ 'elephant': 2 }>>('elephant')

  expectNotType<KeysOfUnion<{ 'A': 0 }|{ 'B': 1 }|{ 'elephant': 2 }>>(0)
  expectNotType<KeysOfUnion<{ 'A': 0 }|{ 'B': 1 }|{ 'elephant': 2 }>>(null)
  expectNotType<KeysOfUnion<{ 'A': 0 }|{ 'B': 1 }|{ 'elephant': 2 }>>('shoe')
}

{ // UnionToIntersection
  expectType<UnionToIntersection<{}>>({})

  expectType<UnionToIntersection<{ 'A': 0 }|{ 'B': 1 }|{ 'C': 2 }>>({ 'A': 0, 'B': 1, 'C': 2 })
  expectAssignable<UnionToIntersection<{ 'A': 0 }|{ 'B': 1 }|{ 'C': 2 }>>({} as { 'A': 0 } & { 'B': 1 } & { 'C': 2 })

  expectNotAssignable<UnionToIntersection<{ 'A': 0 }|{ 'B': 1 }|{ 'C': 2 }>>({ 'A': 1, 'B': 1, 'C': 2 })

  expectNotAssignable<UnionToIntersection<{}>>(null)
  expectNotType<UnionToIntersection<{}>>({ 'random': -32768 })
  expectNotAssignable<UnionToIntersection<{ 'random': -32768 }>>({})
}

{ // MergeRecords
  expectType<MergeIntersection<{}>>({})

  type I = Record<'A', 0> & Record<'B', 1> & Record<'C', 2>
  type M = MergeIntersection<I>

  const a: I = { 'A': 0, 'B': 1, 'C': 2 }
  const b: M = a
  const c: Readonly<typeof a> = b
  const d: Readonly<typeof a> = { 'A': 0, 'B': 1, 'C': 2 } as const

  expectType<M>({} as M)
  expectNotType<M>({})

  expectNotType<M>({ 'A': 0 })
  expectNotType<M>({ 'B': 1 })
  expectNotType<M>({ 'C': 2 })
  expectNotType<M>({ 'A': 0, 'B': 1 })
  expectNotType<M>({ 'A': 0, 'C': 2 })
  expectType<M>({ 'A': 0, 'B': 1, 'C': 2 })
}

{ // UnionToIntersection + MergeIntersection
  type U = Record<'A', 0> | Record<'B', 1> | Record<'C', 2>

  type M = UnionToIntersection<MergeIntersection<U>>
  type N = MergeIntersection<UnionToIntersection<U>> // works both ways!

  expectAssignable<M>({ 'A': 0, 'B': 1, 'C': 2 })
  expectNotType<M>({ 'A': 0, 'B': 1, 'C': 2 })

  expectType<{ 'A': 0, 'B': 1 }>({ 'A': 0, 'B': 1 })
  expectNotType<{ 'A': 0, 'B': 1 }>({ 'A': 0, 'B': 1 })
  expectAssignable<{ 'A': 0, 'B': 1 }>({ 'A': 0, 'B': 1 })
  expectNotAssignable<{ 'A': 0, 'B': 1 }>({ 'A': 0, 'B': 1 })


  const c0 : { 'A': 0, 'B': 1 } = { 'A': 0, 'B': 1 }
  // const c1 : { 'A': 0 } = { 'A': 0, 'B': 1 } // error
  // const c2 : {'A': 0, 'B': 1 } = { 'A': 0 } // error

  expectNotType<M>({ 'A': 0 })
  expectNotType<M>({ 'B': 1 })
  expectNotType<M>({ 'C': 2 })
  expectNotType<M>({ 'A': 0, 'B': 1 })
  expectNotType<M>({ 'A': 0, 'C': 2 })
  expectAssignable<M>({ 'A': 0, 'B': 1, 'C': 2 })
}
