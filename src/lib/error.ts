/* ------------------------------------------------------------------------------------------------------------------ *\

   File: error.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

/** Evaluates to the `true` if `T` extends `ErrorConstructor`, `false` otherwise. */
export type IsError<T> = T extends Error ? true : false

/** Evaluates to `true` if `T` extends `AggregateErrorConstructor`, `false` otherwise. */
export type IsAggregateError<T> = T extends AggregateError ? true : false

/** Given an iterable of `Error` elements, and an optional message, returns their aggregate. */
export function concatErrors<Ts extends Error[]>(errors: [...Ts], msg?: string): AggregateError
{
  const fst = errors.at(0)
  const rst = errors.slice(1)

  const reducer = (agg: AggregateError, err: Error) => {
    agg.errors.push(err)
    return agg
  }

  return rst.reduce(reducer, new AggregateError([fst], msg))
}

/**
 * Wraps a throw statement in a function call, enabling throws within expressions.
 * @example
 * isElementSet(x) || fail('element not set!')
 *
 * @todo Include ErrorOptions when available (>= TypeScript 4.6)
 */
export function fail(err: Error | AggregateError): never
export function fail(msg: string, ErrT?: ErrorConstructor): never
export function fail(err: string | Error | AggregateError, ErrT: ErrorConstructor = Error): never
{
  if (isError(err)) throw err
  else throw new ErrT(err)
}

/** Returns `true` when `value` is an instance of either `Error`, or one of its subclasses, otherwise `false`. */
export function isError(value: unknown): value is Error
{
  return value instanceof Error
}

/** Returns `true` when `value` is an instance of either `AggregateError`, or one of its subclasses, otherwise `false`. */
export function isAggregateError(value: unknown): value is AggregateError
{
  return value instanceof AggregateError
}