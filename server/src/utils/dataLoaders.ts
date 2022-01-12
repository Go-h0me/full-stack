import { User } from "../entities/User";
import DataLoader from "dataloader";
import { Upvote } from "../entities/Upvote";
//[1,1,2]
//return la cac user

interface VoteTypeCondition {
  postId: number;
  userId: number;
}

const batchGetUsers = async (userIds: number[]) => {
  const users = await User.findByIds(userIds);
  return userIds.map((userId) => users.find((user) => user.id === userId));
};

const batchGetVoteTypes = async (voteTypeConditions: VoteTypeCondition[]) => {
  const voteTypes = await Upvote.findByIds(voteTypeConditions);
  return voteTypeConditions.map((voteTypeCondition) =>
    voteTypes.find(
      (voteType) =>
        voteType.postId === voteTypeCondition.postId &&
        voteType.userId === voteTypeCondition.userId
    )
  );
};

export const buildDataLoaders = () => ({
  userLoader: new DataLoader<number, User | undefined>((userIds) =>
    batchGetUsers(userIds as number[])
  ),
  VoteTypeLoader: new DataLoader<VoteTypeCondition, Upvote | undefined>(
    (voteTypeConditions) =>
      batchGetVoteTypes(voteTypeConditions as VoteTypeCondition[])
  ),
});
