/* ------------------------------------------------------------------------------------------------------------------ *\

   File: error.d.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectType,
  expectNotType,
  expectAssignable,
  expectNotAssignable,
} from 'tsd'

import {
  AggregateErrorCtor,
  ErrorCtor,
  IsError,
  IsAggregateError
} from '../../lib/error'

class MyErrorType extends Error {}
class MyAggregateErrorType extends AggregateError {}

class ErrorLike
{
  constructor(message?: string) { /* do stuff */ }
}

class AggregateErrorLike
{
  constructor(errors: Iterable<unknown>, message?: string) { /* do stuff */ }
}

{ // ErrorCtor
  expectAssignable<ErrorCtor<Error>>(Error)
  expectAssignable<ErrorCtor<Error>>(MyErrorType)
  expectAssignable<ErrorCtor<MyErrorType>>(MyErrorType)
  expectNotAssignable<ErrorCtor<Error>>(ErrorLike)
}

{ // AggregateErrorCtor
  expectAssignable<AggregateErrorCtor<AggregateError>>(AggregateError)
  expectAssignable<AggregateErrorCtor<AggregateError>>(MyAggregateErrorType)
  expectAssignable<AggregateErrorCtor<MyAggregateErrorType>>(MyAggregateErrorType)
  expectNotAssignable<AggregateErrorCtor<AggregateError>>(AggregateErrorLike)
}

{ // IsError
  expectType<IsError<Error>>(true)
  expectType<IsError<EvalError>>(true)
  expectType<IsError<RangeError>>(true)
  expectType<IsError<ReferenceError>>(true)
  expectType<IsError<SyntaxError>>(true)
  expectType<IsError<TypeError>>(true)
  expectType<IsError<URIError>>(true)
  expectType<IsError<AggregateError>>(true)
  expectType<IsError<MyErrorType>>(true)
}

{ // IsAggregateError
  expectType<IsAggregateError<AggregateError>>(true)
  expectType<IsAggregateError<MyAggregateErrorType>>(true)
  expectNotType<IsAggregateError<Error>>(true)
}
