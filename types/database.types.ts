export type WaitlistRow = {
  id: string
  email: string
  created_at: string
}

export type WaitlistInsert = {
  email: string
  id?: string
  created_at?: string
}
