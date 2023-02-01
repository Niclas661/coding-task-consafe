export type QueueType = 'pick' | 'puzzle';

export interface IAssignmentQueue {
  displayName: string
  subTitle: string
  type: QueueType
};
