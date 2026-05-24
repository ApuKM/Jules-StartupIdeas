"use client";

import { editProfile } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";

export function ProfileModal({ user }) {
  // console.log(user)
  const handleUpdateProfile = async (formData) => {
    try {
      const { data: tokenData } = await authClient.token();

      const result = await editProfile(user, formData, tokenData);

      if (!result.success) {
        toast.error("Failed to edit profile");
        return;
      }

      toast.success("Profile edit successful");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Modal>
        <div className="flex justify-center">
          <Button variant="secondary">Edit Your Profile</Button>
        </div>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Edit your profile</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    action={handleUpdateProfile}
                    className="flex flex-col gap-4"
                  >
                    <TextField className="w-full" variant="secondary">
                      <Label>Name</Label>
                      <Input name="name" placeholder="Enter your name" />
                    </TextField>

                    <TextField className="w-full" variant="secondary">
                      <Label>Email</Label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </TextField>

                    <TextField className="w-full" variant="secondary">
                      <Label>PhotoURL</Label>
                      <Input
                        name="image"
                        type="url"
                        placeholder="Enter your photo url"
                      />
                    </TextField>

                    <Modal.Footer>
                      <Button type="button" variant="secondary" slot={"close"}>
                        Cancel
                      </Button>
                      <Button
                        className={"bg-(--primary)"}
                        type="submit"
                        slot={"close"}
                      >
                        Update
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}
