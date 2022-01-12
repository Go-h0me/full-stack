import { ObjectType, Field, ID } from "type-graphql";
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Post } from "./Post";
import { Upvote } from "./Upvote";

@ObjectType() // noi chuyen graphql
@Entity() // noi chuyen database
export class User extends BaseEntity {
  @Field((_type) => ID) //dang trong grapsql
  @PrimaryGeneratedColumn()
  id!: number;

  @Field() //tu dong string
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  password!: string;


  @OneToMany(() => Post,post => post.user)
  post: Post[]

  @OneToMany(_to => Upvote,upvote=> upvote.user)
  upvote:Upvote[]


  @Field()
  @CreateDateColumn()
  createAt: Date;

  @Field()
  @UpdateDateColumn()
  updateAt: Date;
}
