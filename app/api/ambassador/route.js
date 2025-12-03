import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.formData();

    const name = body.get("name");
    const instagram = body.get("instagram");
    const email = body.get("email");
    const item = body.get("item");
    const other = body.get("other_description") || "N/A";

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send intake email to your inbox
    await resend.emails.send({
      from: "Eight Studios <no-reply@eightstudios.org>",
      to: "eight888studios@gmail.com",
      subject: "New Ambassador Intake Submission",
      html: `
        <h2>New Ambassador Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Instagram:</strong> ${instagram}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Item Requested:</strong> ${item}</p>
        <p><strong>Other Details:</strong> ${other}</p>
        <hr />
        <p style="opacity:0.6;">Sent automatically by Eight Studios (888)</p>
      `,
    });

    // Redirect user after successful submit
    return Response.redirect("https://eightstudios.org/ambassador-thanks", 303);
  } catch (error) {
    console.error("Ambassador form error:", error);

    return new Response("Error submitting form.", { status: 500 });
  }
}