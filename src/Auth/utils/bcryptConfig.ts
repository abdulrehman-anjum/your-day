import bcrypt from 'bcrypt'

export async function hashPassword(plainTextPassword: string): Promise<string>{
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(plainTextPassword, salt)
    return hashedPassword
}

export async function comparePasswords(plainTextPassword:string, hashedPassword: string): Promise<boolean> {
    const match = await bcrypt.compare(plainTextPassword, hashedPassword)
    return match
}