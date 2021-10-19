
export type User = {
    id: number
    username: string
    password: string
    isVerified: boolean
    canCreatePublicWorkGroup: boolean
    createdAt: Date

    workGroups?: WorkGroup[]
    works?: Work[]
    subedGroups?: Subscription[]
}

/**
 * Model WorkGroup
 */

export type WorkGroup = {
    id: number
    creatorId: number
    name: string
    color: string
    info: string
    haveComments: boolean
    isVerified: boolean
    isPrivate: boolean
    createdAt: Date
    updatedAt: Date

    works?: Work[]
    subscribers?: Subscription[]
}

/**
 * Model Subscription
 */

export type Subscription = {
    id: number
    userId: number
    user?: User
    groupId: number
    group?: WorkGroup
    createdAt: Date
}

/**
 * Model Work
 */

export type Work = {
    id: number
    groupId: number
    group?: WorkGroup
    creatorId: number
    creator?: User
    title: string
    description: string
    dueDate: Date
    createdAt: Date
    updatedAt: Date
}

