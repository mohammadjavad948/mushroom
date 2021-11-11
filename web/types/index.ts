/**
 * Model User
 */

export type User = {
  id: number;
  username: string;
  password: string;
  isVerified: boolean;
  canCreatePublicWorkGroup: boolean;
  createdAt: string;

  workGroups?: WorkGroup[];
  works?: Work[];
  subedGroups?: Subscription[];
};

/**
 * Model Session
 */

export type Session = {
  id: number;
  userId: number;
  hash: string;
  createdAt: string;
};

/**
 * Model WorkGroup
 */

export type WorkGroup = {
  id: number;
  creatorId: number;
  name: string;
  color: string;
  info: string;
  haveComments: boolean;
  isVerified: boolean;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;

  works?: Work[];
  subscribers?: Subscription[];
  pins?: Pin[];
};

/**
 * Model Subscription
 */

export type Subscription = {
  id: number;
  userId: number;
  user?: User;
  groupId: number;
  group?: WorkGroup;
  createdAt: string;
};

/**
 * Model Work
 */

export type Work = {
  id: number;
  groupId: number;
  group?: WorkGroup;
  creatorId: number;
  creator?: User;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;

  pins?: Pin[];
};

/**
 * Model Pin
 */

export type Pin = {
  id: number;
  workId: number;
  work?: Work;
  workGroupId: number;
  workGroup?: WorkGroup;
  createdAt: string;
};
