export interface AuthenticationResp {
  idToken: string
  refreshToken: string
  expiresIn: string
  expiredAt: Date
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
