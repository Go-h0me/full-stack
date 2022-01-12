import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class Upvote extends BaseEntity {
  @PrimaryColumn()
  userId!: number;

  @ManyToOne((_to) => User, (user) => user.upvote)
  user!: User;

  @PrimaryColumn()
  postId!: number;

  // nhieu upvote se ve 1 vote
  @ManyToOne((_to) => Post, (post) => post.upvote)
  post!: Post;

  @Column()
  value: number;
}
//k bao gio co ban ghi va trung ban ghi
