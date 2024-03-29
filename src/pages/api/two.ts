import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  // Simulate long database call
  await new Promise(res => setTimeout(res, 2500))

  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      success: true,
      message: "Success!"
    }),
    { status: 200 }
  );
}