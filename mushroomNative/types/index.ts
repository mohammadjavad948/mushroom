
export interface User {
    id: number
    username: string
    password: string
    isVerified: boolean
    canCreatePublicWorkGroup: boolean
    createdAt: string

    workGroups?: WorkGroup[]
    works?: Work[]
    subedGroups?: Subscription[]
}

/**
 * Model WorkGroup
 */

export interface WorkGroup {
    id: number
    creatorId: number
    name: string
    color: string
    info: string
    haveComments: boolean
    isVerified: boolean
    isPrivate: boolean
    createdAt: string
    updatedAt: string

    works?: Work[]
    subscribers?: Subscription[]
}

/**
 * Model Subscription
 */

export interface Subscription {
    id: number
    userId: number
    user?: User
    groupId: number
    group?: WorkGroup
    createdAt: string
}

/**
 * Model Work
 */

export interface Work {
    id: number
    groupId: number
    group?: WorkGroup
    creatorId: number
    creator?: User
    title: string
    description: string
    dueDate: string
    createdAt: string
    updatedAt: string
}

