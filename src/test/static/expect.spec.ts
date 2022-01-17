/* ------------------------------------------------------------------------------------------------------------------ *\

   File: expect.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectNotType,
  expectType
} from 'tsd'

import type {
  Expect,
  ExpectEqual,
  ExpectFalse,
  ExpectTrue,
} from '../../lib/expect'

{ // Expect
  type _Expected = string|number

  expectType<Expect<_Expected, _Expected>>(0 as _Expected)
  expectType<Expect<_Expected, string>>(0 as never)

  expectNotType<Expect<_Expected, number>>(0 as _Expected)
  expectNotType<Expect<_Expected, string>>(0 as _Expected)
}

{ // ExpectTrue
  expectType<ExpectTrue<true>>(true)
  expectType<ExpectTrue<false>>({} as never)

  expectNotType<ExpectTrue<true>>({} as never)
  expectNotType<ExpectTrue<false>>(true)
}

{ // ExpectFalse
  expectType<ExpectFalse<false>>(false)
  expectType<ExpectFalse<true>>({} as never)

  expectNotType<ExpectFalse<false>>({} as never)
  expectNotType<ExpectFalse<true>>(false)
}

{ // ExpectEqual
  type A = string
  type B = number

  expectType<ExpectEqual<A, A>>(true)
  expectType<ExpectEqual<A, B>>({} as never)

  expectNotType<ExpectEqual<A, A>>({} as never)
  expectNotType<ExpectEqual<A, B>>(true)
}
