/* ------------------------------------------------------------------------------------------------------------------ *\

   File: assert.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  fail
, isError
, type ErrorCtor
} from './error'

export function assert<T, E extends Error>(cond: T, error?: E): asserts cond
export function assert<T, E extends Error>(cond: T, message?: string, ErrT?: ErrorConstructor | ErrorCtor<E>): asserts cond
export function assert<T, E extends Error>(cond: T, msgOrError?: string|E, ErrT: ErrorConstructor | ErrorCtor<E> = Error): asserts cond
{
  cond || (isError(msgOrError)
    ? fail(msgOrError)
    : fail(new ErrT(msgOrError))
  )
}
