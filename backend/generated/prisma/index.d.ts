
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model IntakeForm
 * 
 */
export type IntakeForm = $Result.DefaultSelection<Prisma.$IntakeFormPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IntakeForms
 * const intakeForms = await prisma.intakeForm.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more IntakeForms
   * const intakeForms = await prisma.intakeForm.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.intakeForm`: Exposes CRUD operations for the **IntakeForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntakeForms
    * const intakeForms = await prisma.intakeForm.findMany()
    * ```
    */
  get intakeForm(): Prisma.IntakeFormDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    IntakeForm: 'IntakeForm'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "intakeForm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      IntakeForm: {
        payload: Prisma.$IntakeFormPayload<ExtArgs>
        fields: Prisma.IntakeFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntakeFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntakeFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>
          }
          findFirst: {
            args: Prisma.IntakeFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntakeFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>
          }
          findMany: {
            args: Prisma.IntakeFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>[]
          }
          create: {
            args: Prisma.IntakeFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>
          }
          createMany: {
            args: Prisma.IntakeFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntakeFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>[]
          }
          delete: {
            args: Prisma.IntakeFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>
          }
          update: {
            args: Prisma.IntakeFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>
          }
          deleteMany: {
            args: Prisma.IntakeFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntakeFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntakeFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>[]
          }
          upsert: {
            args: Prisma.IntakeFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeFormPayload>
          }
          aggregate: {
            args: Prisma.IntakeFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntakeForm>
          }
          groupBy: {
            args: Prisma.IntakeFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntakeFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntakeFormCountArgs<ExtArgs>
            result: $Utils.Optional<IntakeFormCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    intakeForm?: IntakeFormOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model IntakeForm
   */

  export type AggregateIntakeForm = {
    _count: IntakeFormCountAggregateOutputType | null
    _avg: IntakeFormAvgAggregateOutputType | null
    _sum: IntakeFormSumAggregateOutputType | null
    _min: IntakeFormMinAggregateOutputType | null
    _max: IntakeFormMaxAggregateOutputType | null
  }

  export type IntakeFormAvgAggregateOutputType = {
    id: number | null
  }

  export type IntakeFormSumAggregateOutputType = {
    id: number | null
  }

  export type IntakeFormMinAggregateOutputType = {
    id: number | null
    mainSymptom: string | null
    painLevel: string | null
    duration: string | null
    otherSymptoms: string | null
    medications: string | null
    medicalHistory: string | null
    visualIndicators: string | null
    createdAt: Date | null
  }

  export type IntakeFormMaxAggregateOutputType = {
    id: number | null
    mainSymptom: string | null
    painLevel: string | null
    duration: string | null
    otherSymptoms: string | null
    medications: string | null
    medicalHistory: string | null
    visualIndicators: string | null
    createdAt: Date | null
  }

  export type IntakeFormCountAggregateOutputType = {
    id: number
    mainSymptom: number
    painLevel: number
    duration: number
    otherSymptoms: number
    medications: number
    medicalHistory: number
    visualIndicators: number
    createdAt: number
    _all: number
  }


  export type IntakeFormAvgAggregateInputType = {
    id?: true
  }

  export type IntakeFormSumAggregateInputType = {
    id?: true
  }

  export type IntakeFormMinAggregateInputType = {
    id?: true
    mainSymptom?: true
    painLevel?: true
    duration?: true
    otherSymptoms?: true
    medications?: true
    medicalHistory?: true
    visualIndicators?: true
    createdAt?: true
  }

  export type IntakeFormMaxAggregateInputType = {
    id?: true
    mainSymptom?: true
    painLevel?: true
    duration?: true
    otherSymptoms?: true
    medications?: true
    medicalHistory?: true
    visualIndicators?: true
    createdAt?: true
  }

  export type IntakeFormCountAggregateInputType = {
    id?: true
    mainSymptom?: true
    painLevel?: true
    duration?: true
    otherSymptoms?: true
    medications?: true
    medicalHistory?: true
    visualIndicators?: true
    createdAt?: true
    _all?: true
  }

  export type IntakeFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntakeForm to aggregate.
     */
    where?: IntakeFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeForms to fetch.
     */
    orderBy?: IntakeFormOrderByWithRelationInput | IntakeFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntakeFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntakeForms
    **/
    _count?: true | IntakeFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntakeFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntakeFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntakeFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntakeFormMaxAggregateInputType
  }

  export type GetIntakeFormAggregateType<T extends IntakeFormAggregateArgs> = {
        [P in keyof T & keyof AggregateIntakeForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntakeForm[P]>
      : GetScalarType<T[P], AggregateIntakeForm[P]>
  }




  export type IntakeFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntakeFormWhereInput
    orderBy?: IntakeFormOrderByWithAggregationInput | IntakeFormOrderByWithAggregationInput[]
    by: IntakeFormScalarFieldEnum[] | IntakeFormScalarFieldEnum
    having?: IntakeFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntakeFormCountAggregateInputType | true
    _avg?: IntakeFormAvgAggregateInputType
    _sum?: IntakeFormSumAggregateInputType
    _min?: IntakeFormMinAggregateInputType
    _max?: IntakeFormMaxAggregateInputType
  }

  export type IntakeFormGroupByOutputType = {
    id: number
    mainSymptom: string
    painLevel: string
    duration: string
    otherSymptoms: string
    medications: string
    medicalHistory: string
    visualIndicators: string
    createdAt: Date
    _count: IntakeFormCountAggregateOutputType | null
    _avg: IntakeFormAvgAggregateOutputType | null
    _sum: IntakeFormSumAggregateOutputType | null
    _min: IntakeFormMinAggregateOutputType | null
    _max: IntakeFormMaxAggregateOutputType | null
  }

  type GetIntakeFormGroupByPayload<T extends IntakeFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntakeFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntakeFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntakeFormGroupByOutputType[P]>
            : GetScalarType<T[P], IntakeFormGroupByOutputType[P]>
        }
      >
    >


  export type IntakeFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mainSymptom?: boolean
    painLevel?: boolean
    duration?: boolean
    otherSymptoms?: boolean
    medications?: boolean
    medicalHistory?: boolean
    visualIndicators?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["intakeForm"]>

  export type IntakeFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mainSymptom?: boolean
    painLevel?: boolean
    duration?: boolean
    otherSymptoms?: boolean
    medications?: boolean
    medicalHistory?: boolean
    visualIndicators?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["intakeForm"]>

  export type IntakeFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mainSymptom?: boolean
    painLevel?: boolean
    duration?: boolean
    otherSymptoms?: boolean
    medications?: boolean
    medicalHistory?: boolean
    visualIndicators?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["intakeForm"]>

  export type IntakeFormSelectScalar = {
    id?: boolean
    mainSymptom?: boolean
    painLevel?: boolean
    duration?: boolean
    otherSymptoms?: boolean
    medications?: boolean
    medicalHistory?: boolean
    visualIndicators?: boolean
    createdAt?: boolean
  }

  export type IntakeFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mainSymptom" | "painLevel" | "duration" | "otherSymptoms" | "medications" | "medicalHistory" | "visualIndicators" | "createdAt", ExtArgs["result"]["intakeForm"]>

  export type $IntakeFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntakeForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mainSymptom: string
      painLevel: string
      duration: string
      otherSymptoms: string
      medications: string
      medicalHistory: string
      visualIndicators: string
      createdAt: Date
    }, ExtArgs["result"]["intakeForm"]>
    composites: {}
  }

  type IntakeFormGetPayload<S extends boolean | null | undefined | IntakeFormDefaultArgs> = $Result.GetResult<Prisma.$IntakeFormPayload, S>

  type IntakeFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntakeFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntakeFormCountAggregateInputType | true
    }

  export interface IntakeFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntakeForm'], meta: { name: 'IntakeForm' } }
    /**
     * Find zero or one IntakeForm that matches the filter.
     * @param {IntakeFormFindUniqueArgs} args - Arguments to find a IntakeForm
     * @example
     * // Get one IntakeForm
     * const intakeForm = await prisma.intakeForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntakeFormFindUniqueArgs>(args: SelectSubset<T, IntakeFormFindUniqueArgs<ExtArgs>>): Prisma__IntakeFormClient<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntakeForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntakeFormFindUniqueOrThrowArgs} args - Arguments to find a IntakeForm
     * @example
     * // Get one IntakeForm
     * const intakeForm = await prisma.intakeForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntakeFormFindUniqueOrThrowArgs>(args: SelectSubset<T, IntakeFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntakeFormClient<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntakeForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFormFindFirstArgs} args - Arguments to find a IntakeForm
     * @example
     * // Get one IntakeForm
     * const intakeForm = await prisma.intakeForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntakeFormFindFirstArgs>(args?: SelectSubset<T, IntakeFormFindFirstArgs<ExtArgs>>): Prisma__IntakeFormClient<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntakeForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFormFindFirstOrThrowArgs} args - Arguments to find a IntakeForm
     * @example
     * // Get one IntakeForm
     * const intakeForm = await prisma.intakeForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntakeFormFindFirstOrThrowArgs>(args?: SelectSubset<T, IntakeFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntakeFormClient<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntakeForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntakeForms
     * const intakeForms = await prisma.intakeForm.findMany()
     * 
     * // Get first 10 IntakeForms
     * const intakeForms = await prisma.intakeForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intakeFormWithIdOnly = await prisma.intakeForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntakeFormFindManyArgs>(args?: SelectSubset<T, IntakeFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntakeForm.
     * @param {IntakeFormCreateArgs} args - Arguments to create a IntakeForm.
     * @example
     * // Create one IntakeForm
     * const IntakeForm = await prisma.intakeForm.create({
     *   data: {
     *     // ... data to create a IntakeForm
     *   }
     * })
     * 
     */
    create<T extends IntakeFormCreateArgs>(args: SelectSubset<T, IntakeFormCreateArgs<ExtArgs>>): Prisma__IntakeFormClient<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntakeForms.
     * @param {IntakeFormCreateManyArgs} args - Arguments to create many IntakeForms.
     * @example
     * // Create many IntakeForms
     * const intakeForm = await prisma.intakeForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntakeFormCreateManyArgs>(args?: SelectSubset<T, IntakeFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntakeForms and returns the data saved in the database.
     * @param {IntakeFormCreateManyAndReturnArgs} args - Arguments to create many IntakeForms.
     * @example
     * // Create many IntakeForms
     * const intakeForm = await prisma.intakeForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntakeForms and only return the `id`
     * const intakeFormWithIdOnly = await prisma.intakeForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntakeFormCreateManyAndReturnArgs>(args?: SelectSubset<T, IntakeFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntakeForm.
     * @param {IntakeFormDeleteArgs} args - Arguments to delete one IntakeForm.
     * @example
     * // Delete one IntakeForm
     * const IntakeForm = await prisma.intakeForm.delete({
     *   where: {
     *     // ... filter to delete one IntakeForm
     *   }
     * })
     * 
     */
    delete<T extends IntakeFormDeleteArgs>(args: SelectSubset<T, IntakeFormDeleteArgs<ExtArgs>>): Prisma__IntakeFormClient<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntakeForm.
     * @param {IntakeFormUpdateArgs} args - Arguments to update one IntakeForm.
     * @example
     * // Update one IntakeForm
     * const intakeForm = await prisma.intakeForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntakeFormUpdateArgs>(args: SelectSubset<T, IntakeFormUpdateArgs<ExtArgs>>): Prisma__IntakeFormClient<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntakeForms.
     * @param {IntakeFormDeleteManyArgs} args - Arguments to filter IntakeForms to delete.
     * @example
     * // Delete a few IntakeForms
     * const { count } = await prisma.intakeForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntakeFormDeleteManyArgs>(args?: SelectSubset<T, IntakeFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntakeForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntakeForms
     * const intakeForm = await prisma.intakeForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntakeFormUpdateManyArgs>(args: SelectSubset<T, IntakeFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntakeForms and returns the data updated in the database.
     * @param {IntakeFormUpdateManyAndReturnArgs} args - Arguments to update many IntakeForms.
     * @example
     * // Update many IntakeForms
     * const intakeForm = await prisma.intakeForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntakeForms and only return the `id`
     * const intakeFormWithIdOnly = await prisma.intakeForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntakeFormUpdateManyAndReturnArgs>(args: SelectSubset<T, IntakeFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntakeForm.
     * @param {IntakeFormUpsertArgs} args - Arguments to update or create a IntakeForm.
     * @example
     * // Update or create a IntakeForm
     * const intakeForm = await prisma.intakeForm.upsert({
     *   create: {
     *     // ... data to create a IntakeForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntakeForm we want to update
     *   }
     * })
     */
    upsert<T extends IntakeFormUpsertArgs>(args: SelectSubset<T, IntakeFormUpsertArgs<ExtArgs>>): Prisma__IntakeFormClient<$Result.GetResult<Prisma.$IntakeFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntakeForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFormCountArgs} args - Arguments to filter IntakeForms to count.
     * @example
     * // Count the number of IntakeForms
     * const count = await prisma.intakeForm.count({
     *   where: {
     *     // ... the filter for the IntakeForms we want to count
     *   }
     * })
    **/
    count<T extends IntakeFormCountArgs>(
      args?: Subset<T, IntakeFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntakeFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntakeForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntakeFormAggregateArgs>(args: Subset<T, IntakeFormAggregateArgs>): Prisma.PrismaPromise<GetIntakeFormAggregateType<T>>

    /**
     * Group by IntakeForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntakeFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntakeFormGroupByArgs['orderBy'] }
        : { orderBy?: IntakeFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntakeFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntakeFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntakeForm model
   */
  readonly fields: IntakeFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntakeForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntakeFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IntakeForm model
   */
  interface IntakeFormFieldRefs {
    readonly id: FieldRef<"IntakeForm", 'Int'>
    readonly mainSymptom: FieldRef<"IntakeForm", 'String'>
    readonly painLevel: FieldRef<"IntakeForm", 'String'>
    readonly duration: FieldRef<"IntakeForm", 'String'>
    readonly otherSymptoms: FieldRef<"IntakeForm", 'String'>
    readonly medications: FieldRef<"IntakeForm", 'String'>
    readonly medicalHistory: FieldRef<"IntakeForm", 'String'>
    readonly visualIndicators: FieldRef<"IntakeForm", 'String'>
    readonly createdAt: FieldRef<"IntakeForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntakeForm findUnique
   */
  export type IntakeFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * Filter, which IntakeForm to fetch.
     */
    where: IntakeFormWhereUniqueInput
  }

  /**
   * IntakeForm findUniqueOrThrow
   */
  export type IntakeFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * Filter, which IntakeForm to fetch.
     */
    where: IntakeFormWhereUniqueInput
  }

  /**
   * IntakeForm findFirst
   */
  export type IntakeFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * Filter, which IntakeForm to fetch.
     */
    where?: IntakeFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeForms to fetch.
     */
    orderBy?: IntakeFormOrderByWithRelationInput | IntakeFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntakeForms.
     */
    cursor?: IntakeFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeForms.
     */
    distinct?: IntakeFormScalarFieldEnum | IntakeFormScalarFieldEnum[]
  }

  /**
   * IntakeForm findFirstOrThrow
   */
  export type IntakeFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * Filter, which IntakeForm to fetch.
     */
    where?: IntakeFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeForms to fetch.
     */
    orderBy?: IntakeFormOrderByWithRelationInput | IntakeFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntakeForms.
     */
    cursor?: IntakeFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeForms.
     */
    distinct?: IntakeFormScalarFieldEnum | IntakeFormScalarFieldEnum[]
  }

  /**
   * IntakeForm findMany
   */
  export type IntakeFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * Filter, which IntakeForms to fetch.
     */
    where?: IntakeFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeForms to fetch.
     */
    orderBy?: IntakeFormOrderByWithRelationInput | IntakeFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntakeForms.
     */
    cursor?: IntakeFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeForms.
     */
    skip?: number
    distinct?: IntakeFormScalarFieldEnum | IntakeFormScalarFieldEnum[]
  }

  /**
   * IntakeForm create
   */
  export type IntakeFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * The data needed to create a IntakeForm.
     */
    data: XOR<IntakeFormCreateInput, IntakeFormUncheckedCreateInput>
  }

  /**
   * IntakeForm createMany
   */
  export type IntakeFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntakeForms.
     */
    data: IntakeFormCreateManyInput | IntakeFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntakeForm createManyAndReturn
   */
  export type IntakeFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * The data used to create many IntakeForms.
     */
    data: IntakeFormCreateManyInput | IntakeFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntakeForm update
   */
  export type IntakeFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * The data needed to update a IntakeForm.
     */
    data: XOR<IntakeFormUpdateInput, IntakeFormUncheckedUpdateInput>
    /**
     * Choose, which IntakeForm to update.
     */
    where: IntakeFormWhereUniqueInput
  }

  /**
   * IntakeForm updateMany
   */
  export type IntakeFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntakeForms.
     */
    data: XOR<IntakeFormUpdateManyMutationInput, IntakeFormUncheckedUpdateManyInput>
    /**
     * Filter which IntakeForms to update
     */
    where?: IntakeFormWhereInput
    /**
     * Limit how many IntakeForms to update.
     */
    limit?: number
  }

  /**
   * IntakeForm updateManyAndReturn
   */
  export type IntakeFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * The data used to update IntakeForms.
     */
    data: XOR<IntakeFormUpdateManyMutationInput, IntakeFormUncheckedUpdateManyInput>
    /**
     * Filter which IntakeForms to update
     */
    where?: IntakeFormWhereInput
    /**
     * Limit how many IntakeForms to update.
     */
    limit?: number
  }

  /**
   * IntakeForm upsert
   */
  export type IntakeFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * The filter to search for the IntakeForm to update in case it exists.
     */
    where: IntakeFormWhereUniqueInput
    /**
     * In case the IntakeForm found by the `where` argument doesn't exist, create a new IntakeForm with this data.
     */
    create: XOR<IntakeFormCreateInput, IntakeFormUncheckedCreateInput>
    /**
     * In case the IntakeForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntakeFormUpdateInput, IntakeFormUncheckedUpdateInput>
  }

  /**
   * IntakeForm delete
   */
  export type IntakeFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
    /**
     * Filter which IntakeForm to delete.
     */
    where: IntakeFormWhereUniqueInput
  }

  /**
   * IntakeForm deleteMany
   */
  export type IntakeFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntakeForms to delete
     */
    where?: IntakeFormWhereInput
    /**
     * Limit how many IntakeForms to delete.
     */
    limit?: number
  }

  /**
   * IntakeForm without action
   */
  export type IntakeFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeForm
     */
    select?: IntakeFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeForm
     */
    omit?: IntakeFormOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IntakeFormScalarFieldEnum: {
    id: 'id',
    mainSymptom: 'mainSymptom',
    painLevel: 'painLevel',
    duration: 'duration',
    otherSymptoms: 'otherSymptoms',
    medications: 'medications',
    medicalHistory: 'medicalHistory',
    visualIndicators: 'visualIndicators',
    createdAt: 'createdAt'
  };

  export type IntakeFormScalarFieldEnum = (typeof IntakeFormScalarFieldEnum)[keyof typeof IntakeFormScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type IntakeFormWhereInput = {
    AND?: IntakeFormWhereInput | IntakeFormWhereInput[]
    OR?: IntakeFormWhereInput[]
    NOT?: IntakeFormWhereInput | IntakeFormWhereInput[]
    id?: IntFilter<"IntakeForm"> | number
    mainSymptom?: StringFilter<"IntakeForm"> | string
    painLevel?: StringFilter<"IntakeForm"> | string
    duration?: StringFilter<"IntakeForm"> | string
    otherSymptoms?: StringFilter<"IntakeForm"> | string
    medications?: StringFilter<"IntakeForm"> | string
    medicalHistory?: StringFilter<"IntakeForm"> | string
    visualIndicators?: StringFilter<"IntakeForm"> | string
    createdAt?: DateTimeFilter<"IntakeForm"> | Date | string
  }

  export type IntakeFormOrderByWithRelationInput = {
    id?: SortOrder
    mainSymptom?: SortOrder
    painLevel?: SortOrder
    duration?: SortOrder
    otherSymptoms?: SortOrder
    medications?: SortOrder
    medicalHistory?: SortOrder
    visualIndicators?: SortOrder
    createdAt?: SortOrder
  }

  export type IntakeFormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IntakeFormWhereInput | IntakeFormWhereInput[]
    OR?: IntakeFormWhereInput[]
    NOT?: IntakeFormWhereInput | IntakeFormWhereInput[]
    mainSymptom?: StringFilter<"IntakeForm"> | string
    painLevel?: StringFilter<"IntakeForm"> | string
    duration?: StringFilter<"IntakeForm"> | string
    otherSymptoms?: StringFilter<"IntakeForm"> | string
    medications?: StringFilter<"IntakeForm"> | string
    medicalHistory?: StringFilter<"IntakeForm"> | string
    visualIndicators?: StringFilter<"IntakeForm"> | string
    createdAt?: DateTimeFilter<"IntakeForm"> | Date | string
  }, "id">

  export type IntakeFormOrderByWithAggregationInput = {
    id?: SortOrder
    mainSymptom?: SortOrder
    painLevel?: SortOrder
    duration?: SortOrder
    otherSymptoms?: SortOrder
    medications?: SortOrder
    medicalHistory?: SortOrder
    visualIndicators?: SortOrder
    createdAt?: SortOrder
    _count?: IntakeFormCountOrderByAggregateInput
    _avg?: IntakeFormAvgOrderByAggregateInput
    _max?: IntakeFormMaxOrderByAggregateInput
    _min?: IntakeFormMinOrderByAggregateInput
    _sum?: IntakeFormSumOrderByAggregateInput
  }

  export type IntakeFormScalarWhereWithAggregatesInput = {
    AND?: IntakeFormScalarWhereWithAggregatesInput | IntakeFormScalarWhereWithAggregatesInput[]
    OR?: IntakeFormScalarWhereWithAggregatesInput[]
    NOT?: IntakeFormScalarWhereWithAggregatesInput | IntakeFormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IntakeForm"> | number
    mainSymptom?: StringWithAggregatesFilter<"IntakeForm"> | string
    painLevel?: StringWithAggregatesFilter<"IntakeForm"> | string
    duration?: StringWithAggregatesFilter<"IntakeForm"> | string
    otherSymptoms?: StringWithAggregatesFilter<"IntakeForm"> | string
    medications?: StringWithAggregatesFilter<"IntakeForm"> | string
    medicalHistory?: StringWithAggregatesFilter<"IntakeForm"> | string
    visualIndicators?: StringWithAggregatesFilter<"IntakeForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IntakeForm"> | Date | string
  }

  export type IntakeFormCreateInput = {
    mainSymptom: string
    painLevel: string
    duration: string
    otherSymptoms: string
    medications: string
    medicalHistory: string
    visualIndicators: string
    createdAt?: Date | string
  }

  export type IntakeFormUncheckedCreateInput = {
    id?: number
    mainSymptom: string
    painLevel: string
    duration: string
    otherSymptoms: string
    medications: string
    medicalHistory: string
    visualIndicators: string
    createdAt?: Date | string
  }

  export type IntakeFormUpdateInput = {
    mainSymptom?: StringFieldUpdateOperationsInput | string
    painLevel?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    otherSymptoms?: StringFieldUpdateOperationsInput | string
    medications?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    visualIndicators?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeFormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mainSymptom?: StringFieldUpdateOperationsInput | string
    painLevel?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    otherSymptoms?: StringFieldUpdateOperationsInput | string
    medications?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    visualIndicators?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeFormCreateManyInput = {
    id?: number
    mainSymptom: string
    painLevel: string
    duration: string
    otherSymptoms: string
    medications: string
    medicalHistory: string
    visualIndicators: string
    createdAt?: Date | string
  }

  export type IntakeFormUpdateManyMutationInput = {
    mainSymptom?: StringFieldUpdateOperationsInput | string
    painLevel?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    otherSymptoms?: StringFieldUpdateOperationsInput | string
    medications?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    visualIndicators?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeFormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mainSymptom?: StringFieldUpdateOperationsInput | string
    painLevel?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    otherSymptoms?: StringFieldUpdateOperationsInput | string
    medications?: StringFieldUpdateOperationsInput | string
    medicalHistory?: StringFieldUpdateOperationsInput | string
    visualIndicators?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntakeFormCountOrderByAggregateInput = {
    id?: SortOrder
    mainSymptom?: SortOrder
    painLevel?: SortOrder
    duration?: SortOrder
    otherSymptoms?: SortOrder
    medications?: SortOrder
    medicalHistory?: SortOrder
    visualIndicators?: SortOrder
    createdAt?: SortOrder
  }

  export type IntakeFormAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntakeFormMaxOrderByAggregateInput = {
    id?: SortOrder
    mainSymptom?: SortOrder
    painLevel?: SortOrder
    duration?: SortOrder
    otherSymptoms?: SortOrder
    medications?: SortOrder
    medicalHistory?: SortOrder
    visualIndicators?: SortOrder
    createdAt?: SortOrder
  }

  export type IntakeFormMinOrderByAggregateInput = {
    id?: SortOrder
    mainSymptom?: SortOrder
    painLevel?: SortOrder
    duration?: SortOrder
    otherSymptoms?: SortOrder
    medications?: SortOrder
    medicalHistory?: SortOrder
    visualIndicators?: SortOrder
    createdAt?: SortOrder
  }

  export type IntakeFormSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}