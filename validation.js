export function validationEmail(email){
  const emailRegex = /\S+@\S+\.\S+/;
  if(!emailRegex.test.(email)) {
    throw new Error("Invalid Email")
  }
}

export function validateArrayNonEmpty(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        throw new Error("Array cannot be empty")
    }
}
