export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export interface User {
    id?: string;
    name?: string | null;
    createdAt?: Date | string;
    email: string;
    emailConfirm?: boolean;
    emailVertified?: Date | string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    role?: Role;
    accounts?: Array<Account>;
    sessions?: Array<Session>;
    todolist?: Array<Todo>;
}

export interface Profile {
    id?: string;
    name_first?: string;
    name_last?: string;
    image?: string | null;
    bio?: string;
    handles?: Array<string>;
    complete?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    userId?: string;
}

export enum ListType {
    TODOLIST = 'TODOLIST',
    TODOLISTPLUS = 'TODOLISTPLUS',
}

export interface Todo {
    id?: number;
    title?: string;
    item?: Array<string>;
    complete?: boolean;
    listType?: ListType;
    createdAt?: Date | string;
    updatedAt: Date | string;
    published?: boolean;
    title: string;
    userId?: string;
}

export interface Item {
    id?: number;
    action?: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    complete?: boolean;
    todoId?: number;
}

export interface Account {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
}

export interface Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date | string;
}

export interface VerificationToken {
    identifier: string;
    token: string;
    expires: Date | string;
}
