/* ------------------------------------------------------------------------------------------------------------------ *\

   File: error.d.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectType,
  expectNotType,
} from 'tsd'

import {
  IsError,
  IsAggregateError
} from '../../lib/error'

{ // IsError
  expectType<IsError<Error>>(true)
  expectType<IsError<EvalError>>(true)
  expectType<IsError<RangeError>>(true)
  expectType<IsError<ReferenceError>>(true)
  expectType<IsError<SyntaxError>>(true)
  expectType<IsError<TypeError>>(true)
  expectType<IsError<URIError>>(true)
  expectType<IsError<AggregateError>>(true)
}

{ // IsAggregateError
  expectType<IsAggregateError<AggregateError>>(true)
  expectNotType<IsAggregateError<Error>>(true)
}
