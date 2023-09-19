export interface BaseResponseInterface<T = any> {
  statusCode: number
  message: string
  data: T
}
