import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { name, email, role, message } = await request.json();

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Only send email if RESEND_API_KEY is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "RAIDEX <noreply@email.raidex.xyz>",
        to: ["andre@polyxmedia.com"],
        subject: `New Team Application: ${name} - ${role}`,
        html: `
          <h2>New Team Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Role Interest:</strong> ${role}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>
        `,
      });
    } else {
      // Log to console for development
      console.log("Team application received:", { name, email, role, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Join team error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
