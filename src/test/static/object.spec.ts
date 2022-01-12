/* ------------------------------------------------------------------------------------------------------------------ *\

   File: object.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectType,
  expectNotType,
} from 'tsd'

import type {
  AsObject,
  AllKeys,
  KeysOf,
  Merge,
  ValuesOf
} from '../../lib/object'

{ // AsObject
  expectType<AsObject<[]>>([])
  expectType<AsObject<['a']>>({ 0: 'a' })
  expectType<AsObject<['elephant', 'giraffe']>>({ 0: 'elephant', 1: 'giraffe'})
}

{ // KeysOf
  expectType<KeysOf<{}>>({} as never)

  const someObj = { 'a': 0, 'b': 1, c: { x: 'y' }}

  expectType<KeysOf<typeof someObj>>('a')
  expectType<KeysOf<typeof someObj>>('b')
  expectType<KeysOf<typeof someObj>>('c')

  expectNotType<KeysOf<{ 'a': 0 }>>('moose')
}

{ // AllKeys
  expectType<AllKeys<[]>>({} as never)

  expectType<AllKeys<[{ 'a': 0 }, { 'b': 1 }, { 'elephant': 42 }]>>('a')
  expectType<AllKeys<[{ 'a': 0 }, { 'b': 1 }, { 'elephant': 42 }]>>('b')
  expectType<AllKeys<[{ 'a': 0 }, { 'b': 1 }, { 'elephant': 42 }]>>('elephant')
  expectType<AllKeys<[{ 'a': 0 }, { 'a': 1 }, { 'gopher': 9000 }]>>('a')
  expectType<AllKeys<[{ 'a': 0 }, { 'a': 1 }, { 'gopher': 9000 }]>>('gopher')
}

{ // ValuesOf
  expectType<ValuesOf<{}>>({} as never)

  const someObj = { 'a': 0, 'b': 1, c: { x: 'y' }}

  expectType<ValuesOf<typeof someObj>>(0)
  expectType<ValuesOf<typeof someObj>>(1)
  expectType<ValuesOf<typeof someObj>>({ x: 'y' })
}

{ // Merge
  expectType<Merge<[]>>({} as never)

  expectType<Merge<[{ 'a': 0 }, { 'b': 1 }, { 'c': 2 }]>>({ 'a': 0, 'b': 1, 'c': 2 })
  expectType<Merge<[{ 'a': 0 }, { 'a': 0 }]>>({ 'a': 0 })
  expectType<Merge<[{ 'a': 0 }, { 'a': 1 }]>>({} as never)
}
