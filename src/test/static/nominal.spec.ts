/* ------------------------------------------------------------------------------------------------------------------ *\

   File: nominal.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectType,
  expectAssignable,
  expectNotAssignable,
} from 'tsd'

import {
  type TaggedType,
  to,
  fr,
} from '../../lib/nominal'

type Acceleration = TaggedType<'Acceleration', number>
type Meters       = TaggedType<'Meters', number>
type Seconds      = TaggedType<'Seconds', number>

function calcAcceleration(dist: Meters, time: Seconds): Acceleration
{
  return to<Acceleration>(fr(dist) / (fr(time) * fr(time)))
}

{ // TaggedType
  expectNotAssignable<Acceleration>(42)
  expectAssignable<Acceleration>(42 as unknown as Acceleration)
}

{ // to, fr
  const dist = to<Meters>(42)
  const time = to<Seconds>(1)
  const accl = calcAcceleration(dist, time)

  expectAssignable<Acceleration>(accl)
  expectNotAssignable<number>(accl)

  expectNotAssignable<Meters>(time)
  expectNotAssignable<Seconds>(dist)
}
