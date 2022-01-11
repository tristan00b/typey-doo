/* ------------------------------------------------------------------------------------------------------------------ *\

   File: boolean.spec.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

import { expectType } from 'tsd'

import type {
  NOT,
  AND,
  OR,
  XOR,
  NAND,
  NOR,
  XNOR
} from '../../lib/boolean'

{ // NOT
  expectType<NOT<true>>(false)
  expectType<NOT<false>>(true)
  expectType<NOT<boolean>>({} as boolean)
}

{ // AND
  expectType<AND<false, false>>(false)
  expectType<AND<false, true>>(false)
  expectType<AND<true, false>>(false)
  expectType<AND<true, true>>(true)

  expectType<AND<boolean, true>>(true)
  expectType<AND<boolean, false>>(false)
  expectType<AND<boolean, boolean>>({} as boolean)
}

{ // OR
  expectType<OR<false, false>>(false)
  expectType<OR<false, true>>(true)
  expectType<OR<true, false>>(true)
  expectType<OR<true, true>>(true)

  expectType<OR<boolean, true>>({} as boolean)
  expectType<OR<boolean, false>>({} as boolean)
  expectType<OR<boolean, boolean>>({} as boolean)
}

{ // XOR
  expectType<XOR<false, false>>(false)
  expectType<XOR<false, true>>(true)
  expectType<XOR<true, false>>(true)
  expectType<XOR<true, true >>(false)

  expectType<XOR<boolean, true>>({} as boolean)
  expectType<XOR<boolean, false>>({} as boolean)
  expectType<XOR<boolean, boolean>>({} as boolean)
}

{ // NAND
  expectType<NAND<false, false>>(true)
  expectType<NAND<false, true>>(true)
  expectType<NAND<true, false>>(true)
  expectType<NAND<true, true>>(false)

  expectType<NAND<boolean, true>>(false)
  expectType<NAND<boolean, false>>(true)
  expectType<NAND<boolean, boolean>>({} as boolean)
}

{ // NOR
  expectType<NOR<false, false>>(true)
  expectType<NOR<false, true>>(false)
  expectType<NOR<true, false>>(false)
  expectType<NOR<true, true>>(false)

  expectType<NOR<boolean, true>>({} as boolean)
  expectType<NOR<boolean, false>>({} as boolean)
  expectType<NOR<boolean, boolean>>({} as boolean)
}

{ // XNOR
  expectType<XNOR<false, false>>(true)
  expectType<XNOR<false, true>>(false)
  expectType<XNOR<true, false>>(false)
  expectType<XNOR<true, true>>(true)

  expectType<XNOR<boolean, true>>({} as boolean)
  expectType<XNOR<boolean, false>>({} as boolean)
  expectType<XNOR<boolean, boolean>>({} as boolean)
}
