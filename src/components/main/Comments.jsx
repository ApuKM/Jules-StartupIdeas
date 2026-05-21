import { TextArea } from "@heroui/react";
import { Button } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { Input } from "@heroui/react";
import { Chip } from "@heroui/react";
import { Separator } from "@heroui/react";
import { Card, CardHeader } from "@heroui/react";
import React from "react";


const comments = [
  {
    id: "1",
    userName: "Apu Kumar",
    commentText:
      "This is a strong idea. The mentor connection feature makes it more useful.",
    timestamp: "2 hours ago",
    isOwner: true,
  },

  {
    id: "2",
    userName: "Nusrat Jahan",
    commentText:
      "I like the personalized roadmap concept. It solves a real problem.",
    timestamp: "30 minutes ago",
    isOwner: false,
  },
];

const Comments = () => {
  return (

      <Card className="border border-white/10 bg-white/5 backdrop-blur-md mt-5">
        <CardHeader className="flex items-center">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Comments</h2>

            <p className="text-sm ">
              Add, edit, and delete your own comments
            </p>
          </div>
        </CardHeader>

        <Card.Content className="space-y-5 bg-red-200">
          {/* add comment */}
          <div className="space-y-3 rounded-2xl border p-4">
            <TextArea
              label="Add Comment"
              placeholder="Write something..."
              variant="bordered"
              className={"w-full"}
            />

            <div className="flex justify-end">
              <Button color="primary">Add Comment</Button>
            </div>
          </div>

          <Separator className="bg-white/10" />

          {/* comments list */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex gap-3">
                  <Avatar name={comment.userName} />

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium">{comment.userName}</p>

                      <span className="text-xs">
                        {comment.timestamp}
                      </span>

                      {comment.isOwner && (
                        <Chip size="sm" color="success" variant="flat">
                          Yours
                        </Chip>
                      )}
                    </div>

                    {/* editing */}
                    <div className="mt-3 space-y-3 hidden">
                      <Input
                        variant="bordered"
                      />

                      <div className="flex gap-2">
                        <Button size="sm" color="primary">
                          Save
                        </Button>

                        <Button size="sm" variant="flat">
                          Cancel
                        </Button>
                      </div>
                    </div>

                    <p className="mt-3 text-sm">
                      {comment.commentText}
                    </p>

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
