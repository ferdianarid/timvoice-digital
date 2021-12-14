// interface Users
export interface Users {
       id: number,
       name: string,
       address: string,
       nationality: string,
       timestamp: Date
}

// interface User Action
export interface UsersAction {
       id: number,
       name: string,
       createAt: Date,
       expiresAt: Date
}