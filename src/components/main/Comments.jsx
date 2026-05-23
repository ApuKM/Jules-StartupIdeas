"use client";

import { useEffect, useState } from "react";
import { addComment } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { getCommentsWithIdeaId } from "@/lib/data";
import { TextArea, Button, Avatar, Chip, Card, CardHeader } from "@heroui/react";
import toast from "react-hot-toast";
import { EditModal } from "./EditModal";

const Comments = ({ id }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    const loadComments = async () => {
      try {
        const { data: tokenData } = await authClient.token();

        const fetchedComments = await getCommentsWithIdeaId(id, tokenData);

        setComments(fetchedComments || []);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load comments");
      }
    };

    if (id) loadComments();
  }, [id]);

  const handleComments = async () => {
    if (!comment.trim()) return;

    try {
      const { data: tokenData } = await authClient.token();

      await addComment(comment, tokenData, id, user);
      const updated = await getCommentsWithIdeaId(id, tokenData);
      setComments(updated || []);

      setComment("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Card className="border border-white/10 bg-white/5 backdrop-blur-md mt-8">
      <CardHeader>
        <div className="text-center space-y-2 w-full">
          <h2 className="text-3xl font-semibold">Comments</h2>
          <p>Add, edit, and delete your own comments</p>
        </div>
      </CardHeader>

      <div className="space-y-5 p-4">
        {/* ADD COMMENT */}
        <div className="space-y-3 border p-4 rounded-2xl">
          <TextArea
            label="Add Comment"
            placeholder="Write something..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={"w-full"}
          />

          <div className="flex justify-end">
            <Button size="sm" className={"bg-(--primary)"} onClick={handleComments}>
              Add Comment
            </Button>
          </div>
        </div>

        {/* COMMENTS LIST */}
        <div className="space-y-4">
          {comments.map((c) => (
            <div
              key={c._id}
              className="border rounded-md p-4 bg-white"
            >
              <div className="flex gap-3">
                <Avatar>
                  <Avatar.Fallback>{c?.userName?.charAt(0)?.toUpperCase() || "?"}</Avatar.Fallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-medium">{c.userName}</p>

                    <span className="text-xs text-gray-500">
                      {c.createdAt?.split("T")[0]}
                    </span>

                    {c.userEmail === user?.email && (
                      <Chip size="sm" color="success" className="ml-auto">
                        Yours
                      </Chip>
                    )}
                  </div>

                  <p className="mt-4 text-sm">{c.comment}</p>

                  {c.userEmail === user?.email && (
                    <div className="flex justify-end mt-3 gap-2">
                      <EditModal id={c._id} />
                      <Button size="sm" variant="danger">
                        Delete
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Comments;