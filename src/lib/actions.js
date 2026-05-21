"use server";
import { revalidatePath } from "next/cache";

export async function addIdea(formData) {
  const data = Object.fromEntries(formData.entries());
  //   console.log(data);
  data.tags = data.tags.split(",");
  data.estimatedBudget = Number(data.estimatedBudget);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-idea`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to add idea");
  }
  revalidatePath("/ideas");
  return { success: true };
}
