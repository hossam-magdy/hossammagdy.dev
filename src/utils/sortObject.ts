interface SomeObject {
  [key: string]: any;
}

export const sortObject = (o: SomeObject) =>
  Object.keys(o).sort().reduce((r: SomeObject, k) => (r[k] = o[k], r), {});
