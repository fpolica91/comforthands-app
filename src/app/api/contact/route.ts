import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyConsent: z.literal(true, {
    message: "You must agree to the privacy policy",
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (field && typeof field === "string") {
          fieldErrors[field] = issue.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your inputs.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    // Log the contact form data (Resend integration will be added later)
    console.log("Contact form submission:", result.data);

    // TODO: Send email via Resend
    // const { data, error } = await resend.emails.send({
    //   from: "ComfortHands <noreply@comforthands.care>",
    //   to: "gioceci18@gmail.com",
    //   subject: `New Contact Form Submission from ${result.data.firstName} ${result.data.lastName}`,
    //   text: result.data.message,
    // });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
