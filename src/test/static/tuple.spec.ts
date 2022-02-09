/* ------------------------------------------------------------------------------------------------------------------ *\

   File: tuple.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import {
  expectType,
} from 'tsd'

import type {
  Concat,
  Drop,
  Head,
  Last,
  Tail,
  Filter,
  FindIndex,
  Repeat,
  Replace,
} from '../../lib/tuple'

{ // Concat
  expectType<Concat<[],[]>>([])

  expectType<Concat<[],[0]>>([0])
  expectType<Concat<[0],[]>>([0])

  expectType<Concat<[1,2,3],[4,5,6]>>([1,2,3,4,5,6])
}

{ // Drop
  expectType<Drop<[]>>([])
  expectType<Drop<[0]>>([])
  expectType<Drop<[0,1,2,3]>>([0,1,2])
}

{ // Head
  expectType<Head<[]>>(undefined)
  expectType<Head<[0]>>(0)
  expectType<Head<[0,1,2,3]>>(0)
}

{ // Last
  expectType<Last<[]>>(undefined)
  expectType<Last<[0]>>(0)
  expectType<Last<[0,1,2,3]>>(3)
}

{ // Rest
  expectType<Tail<[]>>([])
  expectType<Tail<[0]>>([])
  expectType<Tail<[0,1,2,3]>>([1,2,3])
}

{ // Repeat
  expectType<Repeat<0, 0>>([])
  expectType<Repeat<0, 1>>([0])
  expectType<Repeat<0, 4>>([0,0,0,0])
}

{ // Filter
  expectType<Filter<0, []>>([])
  expectType<Filter<0, [0,1,0,1]>>([1,1])
  expectType<Filter<0, [1, 2, 0, 3, 0, 0, 0]>>([1,2,3])
}

{ // FindIndex
  expectType<FindIndex<0, []>>({} as never)
  expectType<FindIndex<0, [0]>>(0)
  expectType<FindIndex<0, [1,2,0,3]>>(2)
}

{ // Replace
  expectType<Replace<[], never, 0>>([])
  expectType<Replace<[0], 0, never>>([{} as never])
  expectType<Replace<[0, 1, 2, 0], 0, 'X'>>(['X', 1, 2, 'X'])
  expectType<
    Replace<
      Replace<[0, 1, 0, 1], 0, 'X'>, 1, 'Y'
    >
  >([ 'X', 'Y', 'X', 'Y' ])
}
