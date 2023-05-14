class VerifyEmailService {
  constructor(private readonly baseUrl: string) {}

  async verifyEmail(email: string): Promise<{}> {
    return await fetch(`${this.baseUrl}/user/register/verify-email`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  }
}

export const verifyEmailService = new VerifyEmailService(
  'http://localhost:8000'
)
