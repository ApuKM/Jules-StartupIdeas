"use server";
import { revalidatePath } from "next/cache";

export async function addIdea(formData, user, tokenData) {
  const data = Object.fromEntries(formData.entries());
  const { name, email } = user;
  data.tags = data.tags.split(",");
  data.estimatedBudget = Number(data.estimatedBudget);
  data.userName = name;
  data.userEmail = email;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-idea`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${tokenData.token}`
    },
    body: JSON.stringify(data),
  });
  // console.log(res)
  if (!res.ok) {
    throw new Error("Failed to add idea");
  }
  revalidatePath("/ideas");
  revalidatePath("/my-ideas");
  return { success: true };
}

export async function addComment(commentText, tokenData, ideaId, user){
  const payload = {
    comment: commentText,
    userEmail: user?.email,
    userName: user?.name,
    ideaId,
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${tokenData.token}`
    },
    body: JSON.stringify(payload)
  })
  // console.log(res)
  if (!res.ok) {
    throw new Error("Failed to add comment");
  }
  revalidatePath(`/ideas/${ideaId}`);
  return { success: true };
}

export async function editProfile(user, formData, tokenData) {
  try {
    const data = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/edit/${user.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      return { success: false };
    }

    revalidatePath("/profile");

    return { success: true };
  } catch (err) {
    return { success: false };
  }
}
