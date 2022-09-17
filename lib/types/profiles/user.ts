// User Interface
export interface Private {
    name: string
    email: string
    password: string
    accounts: Array<Object>
    profile?: {
        id: number
        name: string
        image?: string
        bio: string
        handles: string[]
    }
}

export interface Public {
    name?: string
    email?: string
    profile?: {
        id: number
        name?: string
        image?: string
        bio?: string
        handles?: string[]
    }
}

