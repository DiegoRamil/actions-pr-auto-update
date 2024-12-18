let VALID_STATUS: number[] = []

export const obtainValidStatus = (): number[] => {
  if (VALID_STATUS.length === 0) {
    console.log('Creating the array with valid status codes')
    VALID_STATUS = HTTP_OK_STATUS
  }
  return VALID_STATUS
}

export const HTTP_OK_STATUS = Array.from({ length: 100 }, (_, i) => i + 200)
