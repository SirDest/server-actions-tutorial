"use server";

import { Product } from "@/typings.d";
import { revalidatePath } from "next/cache";

const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product,
    price,
  };

  await fetch("https://652b228e4791d884f1fda35a.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath("products");
};

export default addProductToDatabase;
