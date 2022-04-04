export interface USER_TYPE {
    userId: string;
    roles: ROLES[]
}

export interface ROLES {
    role: string;
    features: string[]
}
