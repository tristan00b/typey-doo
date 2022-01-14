/* ------------------------------------------------------------------------------------------------------------------ *\

   File: boolean.d.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------------------------ *\
   Boolean Operations
\* ------------------------------------------------------------------------------------------------------------------ */

export declare type NOT<A extends boolean> =
  boolean extends A ? boolean
: A extends true ? false : true

export declare type AND<A extends boolean, B extends boolean> =
  boolean extends A ? A&B
: boolean extends B ? A&B
: A extends true ?
    B extends true ?
      true
    : false
  : false

export declare type OR<A extends boolean, B extends boolean> =
  boolean extends A ? A|B
: boolean extends B ? A|B
: A extends false ?
    B extends false ?
      false
    : true
  : true

export declare type XOR<A extends boolean, B extends boolean> =
  A extends B ? B extends A ? false : true : true

export declare type NAND<A extends boolean, B extends boolean> = NOT<AND<A, B>>
export declare type NOR <A extends boolean, B extends boolean> = NOT< OR<A, B>>
export declare type XNOR<A extends boolean, B extends boolean> = NOT<XOR<A, B>>
