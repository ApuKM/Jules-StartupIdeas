"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function EditModal({ id }) {
  const [editComment, setEditComment] = useState("");
  const router = useRouter();
  //   console.log(id)
  const handleEdit = async () => {
    const { data: tokenData } = await authClient.token();
    // console.log(tokenData)
    console.log(editComment)
    const payload = {
        editComment
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/edit/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData.token}`
        },
        body: JSON.stringify(payload),
      },
    );
    // console.log(res);
    if (res.ok) {
      router.refresh();
    }
    if (!res.ok) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <Modal>
      <Button variant="outline">Edit</Button>
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
                    onChange={(e) => setEditComment(e.target.value)}
                  />
                </TextField>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close" className={"bg-(--primary)"} onClick={handleEdit}>
                Save
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
