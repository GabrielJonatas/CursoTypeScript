declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MYGLOBAL: string;
  }
}

declare let global: typeof globalThis & {
  MINHAGLOBAL: string;
}
