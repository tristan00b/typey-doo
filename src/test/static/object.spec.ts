/* ------------------------------------------------------------------------------------------------------------------ *\

   File: object.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectType,
  expectNotType,
  expectAssignable,
  expectNotAssignable
} from 'tsd'

import type {
  AsObject,
  AllKeys,
  KeysOf,
  Merge,
  ValuesOf
} from '../../lib/object'

{ // AsObject
  expectType<AsObject<[]>>({})
  expectType<AsObject<['a']>>({ 0: 'a' })
  expectType<AsObject<['elephant', 'giraffe']>>({ 0: 'elephant', 1: 'giraffe'})
}

{ // KeysOf
  expectType<KeysOf<{}>>({} as never)

  const someObj = { 'a': 0, 'b': 1, c: { x: 'y' }}

  expectAssignable<KeysOf<typeof someObj>>('a')
  expectAssignable<KeysOf<typeof someObj>>('b')
  expectAssignable<KeysOf<typeof someObj>>('c')

  expectNotAssignable<KeysOf<{ 'a': 0 }>>('moose')
}

{ // AllKeys
  expectType<AllKeys<[]>>({} as never)
  expectAssignable<AllKeys<[{ 'a': 0 }, { 'b': 1 }, { 'elephant': 42 }]>>('a')
  expectAssignable<AllKeys<[{ 'a': 0 }, { 'b': 1 }, { 'elephant': 42 }]>>('b')
  expectAssignable<AllKeys<[{ 'a': 0 }, { 'b': 1 }, { 'elephant': 42 }]>>('elephant')
}

{ // ValuesOf
  expectType<ValuesOf<{}>>({} as never)

  expectAssignable<ValuesOf<{ 'a': 0, 'b': 1, c: { x: 'y' }}>>(0)
  expectAssignable<ValuesOf<{ 'a': 0, 'b': 1, c: { x: 'y' }}>>(1)
  expectAssignable<ValuesOf<{ 'a': 0, 'b': 1, c: { x: 'y' }}>>({ x: 'y' })
}

{ // Merge
  expectType<Merge<[]>>({})

  expectAssignable<Merge<[{ 'a': 0 }, { 'b': 1 }, { 'c': 2 }]>>({ 'a': 0, 'b': 1, 'c': 2 })
  expectAssignable<Merge<[{ 'a': 0 }, { 'a': 0 }]>>({ 'a': 0 })
  expectAssignable<Merge<[{ 'a': 0 }, { 'a': 1 }]>>({} as never)
}
