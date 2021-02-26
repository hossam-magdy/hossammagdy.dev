export const reformObject = (
  o: Record<string, unknown>,
): Record<string, unknown> =>
  Object
    .fromEntries(
      Object
        .entries(o)
        .sort(
          ([k1], [k2]) => k1 > k2 ? 1 : -1,
        ),
    );
