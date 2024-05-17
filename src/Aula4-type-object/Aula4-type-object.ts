const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // indexSignature to create more keys
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

// objectA.keyA = 'Other value';
objectA.keyC = 'New key';
objectA.keyD = 'New key';

// Dont use type object
