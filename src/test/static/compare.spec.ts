/* ------------------------------------------------------------------------------------------------------------------ *\

   File: boolean.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectNotType,
  expectType
} from 'tsd'

import type {
  Falsy,
  Truthy,
  Equal,
  AllEqual,
  If
} from '../../lib/compare'

{ // Falsy
  expectType<Falsy<false>>(true)
  expectType<Falsy<0>>(true)
  expectType<Falsy<-0>>(true)
  expectType<Falsy<0n>>(true)
  expectType<Falsy<''>>(true)
  expectType<Falsy<null>>(true)
  expectType<Falsy<undefined>>(true)

  expectType<Falsy<true>>(false)
  expectType<Falsy<1>>(false)
  expectType<Falsy<-1>>(false)
  expectType<Falsy<1n>>(false)
  expectType<Falsy<'asdf'>>(false)
  expectType<Falsy<{}>>(false)
  expectType<Falsy<[]>>(false)
  expectType<Falsy<number>>(false)
  expectType<Falsy<object>>(false)
  expectType<Falsy<string>>(false)

  expectType<Falsy<boolean>>({} as boolean)
}

{ // Truthy
  expectType<Truthy<false>>(false)
  expectType<Truthy<0>>(false)
  expectType<Truthy<-0>>(false)
  expectType<Truthy<0n>>(false)
  expectType<Truthy<''>>(false)
  expectType<Truthy<null>>(false)
  expectType<Truthy<undefined>>(false)

  expectType<Truthy<true>>(true)
  expectType<Truthy<1>>(true)
  expectType<Truthy<-1>>(true)
  expectType<Truthy<1n>>(true)
  expectType<Truthy<{}>>(true)
  expectType<Truthy<number>>(true)
  expectType<Truthy<string>>(true)

  expectType<Truthy<boolean>>({} as boolean)
}

{ // Equal
  expectType<Equal<false, false>>(true)
  expectType<Equal<false, true>>(false)
  expectType<Equal<true, false>>(false)
  expectType<Equal<true, true >>(true)

  expectType<Equal<boolean, true>>(false)
  expectNotType<Equal<boolean, true>>({} as boolean)

  expectType<Equal<true, boolean>>(false)
  expectNotType<Equal<true, boolean>>({} as boolean)

  expectType<Equal<boolean, false>>(false)
  expectNotType<Equal<boolean, false>>({} as boolean)

  expectType<Equal<false, boolean>>(false)
  expectNotType<Equal<false, boolean>>({} as boolean)

  expectType<Equal<[], []>>(true)
  expectType<Equal<[1,2,3], [1,2,3]>>(true)
  expectType<Equal<[1,2,3], [1,2,'X']>>(false)

  expectType<Equal<{}, {}>>(true)
  expectType<Equal<{ 0:'0', 1:'1' }, { 0:'0', 1:'1' }>>(true)

  expectType<Equal<'', ''>>(true)
  expectType<Equal<'qwer', 'qwer'>>(true)
  expectType<Equal<'asdf', 'ghjk'>>(false)
}

{ // AllEqual
  expectType<AllEqual<[]>>({} as boolean)
  expectNotType<AllEqual<[]>>(true)
  expectNotType<AllEqual<[]>>(false)

  expectType<AllEqual<[true]>>(true)
  expectNotType<AllEqual<[true]>>({} as boolean)

  expectType<AllEqual<[false]>>(true)
  expectNotType<AllEqual<[false]>>({} as boolean)

  expectType<AllEqual<[boolean]>>(true)
  expectNotType<AllEqual<[boolean]>>({} as boolean)

  expectType<AllEqual<[0, 0]>>(true)
  expectType<AllEqual<[0, 1]>>(false)
  expectType<AllEqual<[1, 0]>>(false)
  expectType<AllEqual<[1, 1]>>(true)

  expectType<AllEqual<[boolean, false]>>(false)
  expectNotType<AllEqual<[boolean, false]>>({} as boolean)

  expectType<AllEqual<[boolean, true]>>(false)
  expectNotType<AllEqual<[boolean, true]>>({} as boolean)

  expectType<AllEqual<[false, boolean]>>(false)
  expectNotType<AllEqual<[false, boolean]>>({} as boolean)
  expectType<AllEqual<[true, boolean]>>(false)
  expectNotType<AllEqual<[true, boolean]>>({} as boolean)

  // expectType<AllEqual<[0, 0, 0]>>(true )
  // expectType<AllEqual<[0, 0, 1]>>(false)
  // expectType<AllEqual<[0, 1, 0]>>(false)
  // expectType<AllEqual<[0, 1, 1]>>(false)
  // expectType<AllEqual<[1, 0, 0]>>(false)
  // expectType<AllEqual<[1, 0, 1]>>(false)
  // expectType<AllEqual<[1, 1, 0]>>(false)
  // expectType<AllEqual<[1, 1, 1]>>(true )

  // expectType<AllEqual<[0, 0, 0, 0]>>(true )
  // expectType<AllEqual<[0, 0, 0, 1]>>(false)
  // expectType<AllEqual<[0, 0, 1, 0]>>(false)
  // expectType<AllEqual<[0, 0, 1, 1]>>(false)
  // expectType<AllEqual<[0, 1, 0, 0]>>(false)
  // expectType<AllEqual<[0, 1, 0, 1]>>(false)
  // expectType<AllEqual<[0, 1, 1, 0]>>(false)
  // expectType<AllEqual<[0, 1, 1, 1]>>(false)
  // expectType<AllEqual<[1, 0, 0, 0]>>(false)
  // expectType<AllEqual<[1, 0, 0, 1]>>(false)
  // expectType<AllEqual<[1, 0, 1, 0]>>(false)
  // expectType<AllEqual<[1, 0, 1, 1]>>(false)
  // expectType<AllEqual<[1, 1, 0, 0]>>(false)
  // expectType<AllEqual<[1, 1, 0, 1]>>(false)
  // expectType<AllEqual<[1, 1, 1, 0]>>(false)
  // expectType<AllEqual<[1, 1, 1, 1]>>(true )
}

{ // If
  expectType<If<true, true, false>>(true)
  expectNotType<If<true, true, false>>({} as boolean)

  expectType<If<false, true, false>>(false)
  expectNotType<If<false, true, false>>({} as boolean)

  expectType<If<boolean, true, false>>({} as boolean)
}
