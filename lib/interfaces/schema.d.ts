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
    profile?: Profile;
}

export interface Profile {
    id?: string;
    name_first?: string | null;
    name_last?: string | null;
    image?: string | null;
    bio?: string | null;
    handles?: Array<Handle>;
    complete?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    userName?: string | null;
}

export enum Social {
    GOOGLE = 'GOOGLE',
    GITHUB = 'GITHUB',
    TWITTER = 'TWITTER',
    FACEBOOK = 'FACEBOOK',
}

export interface Handle {
    id?: string | null;
    social: Social;
    userName?: string | null;
    link?: string | null;
    public?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    profileId?: string | null;
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
