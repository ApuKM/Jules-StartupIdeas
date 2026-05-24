"use client";

import { editProfile } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function ProfileModal({ user, isOpen, onOpenChange }) {
  const handleUpdateProfile = async (formData) => {
    const { data: tokenData } = await authClient.token();
    await editProfile(user, formData, tokenData);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit your profile</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={handleUpdateProfile} className="flex flex-col gap-4">
                  <TextField className="w-full" variant="secondary">
                    <Label>Name</Label>
                    <Input
                      name="name"
                      defaultValue={user?.name}
                      placeholder="Enter your name"
                    />
                  </TextField>

                  <TextField className="w-full" variant="secondary">
                    <Label>Email</Label>
                    <Input
                      name="email"
                      type="email"
                      defaultValue={user?.email}
                      placeholder="Enter your email"
                    />
                  </TextField>

                  <TextField className="w-full" variant="secondary">
                    <Label>PhotoURL</Label>
                    <Input
                      name="image"
                      type="url"
                      defaultValue={user?.image}
                      placeholder="Enter your photo url"
                    />
                  </TextField>

                  <Modal.Footer>
                    <Button type="button" variant="secondary" onPress={() => onOpenChange(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
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
  );
}