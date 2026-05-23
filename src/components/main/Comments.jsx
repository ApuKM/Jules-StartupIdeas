"use client";

import { addComment } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { getCommentsWithIdeaId } from "@/lib/data";
import { TextArea } from "@heroui/react";
import { Button } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { Input } from "@heroui/react";
import { Chip } from "@heroui/react";
import { Separator } from "@heroui/react";
import { Card, CardHeader } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Comments = ({ id }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user)

  const handleComments = async () => {
    const { data: tokenData } = await authClient.token();
    console.log(`tokenDatta ${tokenData}`);
    try {
      await addComment(comment, tokenData, id, user);
      const fetchedComments = await getCommentsWithIdeaId(id, tokenData);
      setComments(fetchedComments);
      setComment("")
    } catch (error) {
      console.log("Error ", error);
      toast.error(`Something went wrong!: ${error}`);
    }
  };
  return (
    <Card className="border border-white/10 bg-white/5 backdrop-blur-md mt-8">
      <CardHeader className="flex items-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Comments</h2>

          <p className=" ">Add, edit, and delete your own comments</p>
        </div>
      </CardHeader>

      <Card.Content className="space-y-5 bg-(--primary)/10 rounded-md">
        {/* add comment */}
        <div className="space-y-3 rounded-2xl border p-4">
          <TextArea
            label="Add Comment"
            placeholder="Write something..."
            variant="bordered"
            className={"w-full"}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <div className="flex justify-end">
            <Button
              size="sm"
              className={"bg-(--primary)"}
              onClick={handleComments}
            >
              Add Comment
            </Button>
          </div>
        </div>

        {/* <Separator className="bg-white/10" /> */}

        {/* comments list */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment?._id}
              className="rounded-md border border-(--primary)/20 bg-white p-4 "
            >
              <div className="flex gap-3">
                <Avatar name={comment?.userName} />

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{comment?.userName}</p>

                    <span className="text-xs">{comment?.createdAt}</span>

                    {comment?.userEmail === user?.email && (
                      <Chip size="sm" color="success" variant="flat">
                        Yours
                      </Chip>
                    )}
                  </div>

                  {/* comment*/}
                  <p className="mt-3 text-sm">{comment?.comment}</p>

                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="flat">
                      Edit
                    </Button>

                    <Button size="sm" color="danger" variant="flat">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card.Content>
    </Card>
  );
};

export default Comments;
