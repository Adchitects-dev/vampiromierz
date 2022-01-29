export function checkIsError(message: string) {
    console.log(message, message === "Email is not valid")
  if (message === "Email is not valid") return true

  return false
}
