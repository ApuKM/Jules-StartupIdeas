"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function EditModal({
  currentComment,
  commentId,
  setComments,
}) {
  const [editComment, setEditComment] = useState(currentComment);
  const router = useRouter();
  //   console.log(id)
  const handleEdit = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/edit/${commentId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify({ editComment }),
      },
    );

    if (!res.ok) {
      toast.error("Something went wrong!");
      return;
    }

    const data = await res.json();
    console.log(data)

    setComments((prev) =>
      prev.map((comment) => (comment._id === data._id ? data : comment)),
    );

  };
  
  return (
    <Modal>
      <Button variant="outline">Edit Comment</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit your comment</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <TextField
                  className="w-full"
                  name="comment"
                  label="edit-comment"
                  type="text"
                  variant="secondary"
                >
                  <Input
                    placeholder="edit your comment"
                    value={editComment}
                    // defaultValue={}
                    onChange={(e) => setEditComment(e.target.value)}
                  />
                </TextField>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button
                slot="close"
                className={"bg-(--primary)"}
                onClick={handleEdit}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
