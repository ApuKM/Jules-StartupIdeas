"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({ commentId, setComments }) {
  const router = useRouter();
  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/delete/${commentId}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${tokenData.token}`,
        },
      },
    );

    if (!res.ok) {
      toast.error("Something went wrong!");
      return;
    }

    setComments((prev) => prev.filter((comment) => comment._id !== commentId));
  };
  return (
    <AlertDialog>
      <Button variant="danger">Delete Comment</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete comment permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
