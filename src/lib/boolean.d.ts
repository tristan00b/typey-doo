/* ------------------------------------------------------------------------------------------------------------------ *\

   File: boolean.d.ts
   Author: Tristan Bayfield
   License: MIT

\* ------------------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------------------------ *\
   Boolean Operations
\* ------------------------------------------------------------------------------------------------------------------ */

/** Negates a boolean type argument */
export declare type NOT<A extends boolean> =
  boolean extends A ? boolean
: A extends true ? false : true

/** AND's two boolean type arguments */
export declare type AND<A extends boolean, B extends boolean> =
  boolean extends A ? A&B
: boolean extends B ? A&B
: A extends true ?
    B extends true ?
      true
    : false
  : false

/** OR's two boolean type arguments */
export declare type OR<A extends boolean, B extends boolean> =
  boolean extends A ? A|B
: boolean extends B ? A|B
: A extends false ?
    B extends false ?
      false
    : true
  : true

/** XOR's two boolean type arguments */
export declare type XOR<A extends boolean, B extends boolean> =
  A extends B ? B extends A ? false : true : true

/** NAND's two boolean type arguments */
export declare type NAND<A extends boolean, B extends boolean> = NOT<AND<A, B>>

/** NOR's two boolean type arguments */
export declare type NOR <A extends boolean, B extends boolean> = NOT< OR<A, B>>

/** XNOR's two boolean type arguments */
export declare type XNOR<A extends boolean, B extends boolean> = NOT<XOR<A, B>>
