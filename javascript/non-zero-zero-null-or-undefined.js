function nonZeroZeroNullOrUndefined(v) {
  const type = typeof v
  if (
    (type === "number" && v !== 0) || // Check for non-zero numbers
    (type === "string" && v !== "") || // Check for strings
    (type === "object" && (v !== {} || v !== []) && v !== null) // Check for non-zero objects and arrays
  ) {
    return "non-zero"
  } else if (
    (type === "number" && v === 0) || // Check for 0
    (type === "string" && v === "") || // Check for empty strings
    (type === "object" && (v === {} || v === []) // Check for empty arrays and objects
  ) {
    return "zero"
  } else if (type === "object" && v === null) {
    return "null"
  } else if (type === "undefined") {
    return "undefined"
  }
}
