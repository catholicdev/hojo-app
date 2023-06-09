export interface AuthenticationResp {
  accessToken: string
}

export interface LoginReq {
  email: string
  password: string
}

export interface RegisterReq {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface VerifyEmailReq {
  email: string
}

export interface VerifyEmailResp {
  isUsed: boolean
}
