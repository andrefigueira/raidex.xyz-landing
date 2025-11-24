import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const baseEmailStyles = `
  body { margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
  .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
  .card { background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 32px; }
  .logo { font-size: 24px; font-weight: 700; color: #fafafa; letter-spacing: -0.02em; margin-bottom: 24px; }
  .logo span { color: #71717a; font-weight: 400; font-size: 12px; margin-left: 8px; }
  h1 { color: #fafafa; font-size: 24px; font-weight: 600; margin: 0 0 8px 0; letter-spacing: -0.02em; }
  h2 { color: #fafafa; font-size: 18px; font-weight: 600; margin: 24px 0 16px 0; letter-spacing: -0.02em; }
  p { color: #a1a1aa; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0; }
  .highlight { color: #fafafa; }
  .detail-row { display: flex; padding: 12px 16px; background: rgba(255,255,255,0.02); border-radius: 8px; margin-bottom: 8px; }
  .detail-label { color: #71717a; font-size: 13px; min-width: 100px; }
  .detail-value { color: #fafafa; font-size: 14px; }
  .message-box { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 16px; margin-top: 8px; }
  .message-box p { color: #d4d4d8; margin: 0; }
  .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); margin: 24px 0; }
  .footer { text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.06); }
  .footer p { color: #52525b; font-size: 12px; margin: 0; }
  .footer a { color: #71717a; text-decoration: none; }
  .badge { display: inline-block; background: rgba(16, 185, 129, 0.1); color: #34d399; font-size: 12px; font-weight: 500; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; }
  .cta-button { display: inline-block; background: #fafafa; color: #09090b; font-size: 14px; font-weight: 600; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 16px; }
`;

function getTeamNotificationEmail(name: string, email: string, role: string, message: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Team Application</title>
  <style>${baseEmailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="logo">RAIDEX <span>Team Application</span></div>

      <span class="badge">New Application</span>
      <h1>Someone wants to join the raid</h1>
      <p>A new team application has been submitted through the website.</p>

      <div class="divider"></div>

      <h2>Applicant Details</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 16px; background: rgba(255,255,255,0.02); border-radius: 8px 8px 0 0;">
            <span style="color: #71717a; font-size: 13px;">Name</span><br>
            <span style="color: #fafafa; font-size: 14px;">${name}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; background: rgba(255,255,255,0.02);">
            <span style="color: #71717a; font-size: 13px;">Email</span><br>
            <a href="mailto:${email}" style="color: #fafafa; font-size: 14px; text-decoration: none;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; background: rgba(255,255,255,0.02); border-radius: 0 0 8px 8px;">
            <span style="color: #71717a; font-size: 13px;">Role Interest</span><br>
            <span style="color: #fafafa; font-size: 14px;">${role}</span>
          </td>
        </tr>
      </table>

      ${message ? `
      <h2>Message</h2>
      <div class="message-box">
        <p>${message}</p>
      </div>
      ` : ''}

      <div class="footer">
        <p>RAIDEX - Infrastructure for AI Agents to Raid DeFi</p>
      </div>
    </div>
  </div>
</body>
</html>
`;
}

function getApplicantConfirmationEmail(name: string, role: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received - RAIDEX</title>
  <style>${baseEmailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="logo">RAIDEX</div>

      <span class="badge">Application Received</span>
      <h1>Thanks for reaching out, ${name}</h1>
      <p>We've received your application to join the RAIDEX team as a <span class="highlight">${role}</span>.</p>

      <div class="divider"></div>

      <h2>What happens next?</h2>
      <p>Our team reviews every application personally. If your skills and experience align with what we're building, we'll reach out to schedule a conversation.</p>
      <p>In the meantime, you can learn more about our vision by reading the <a href="https://raidex.xyz/whitepaper" style="color: #fafafa; text-decoration: underline;">whitepaper</a>.</p>

      <div class="divider"></div>

      <p style="color: #71717a; font-size: 13px;">This is an automated confirmation. Please don't reply to this email.</p>

      <div class="footer">
        <p>RAIDEX - Infrastructure for AI Agents to Raid DeFi</p>
        <p style="margin-top: 8px;"><a href="https://raidex.xyz">raidex.xyz</a> · <a href="https://twitter.com/voidmode_">@voidmode_</a></p>
      </div>
    </div>
  </div>
</body>
</html>
`;
}

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

      // Send notification to team
      await resend.emails.send({
        from: "RAIDEX <noreply@email.raidex.xyz>",
        to: ["hello@polyxmedia.com"],
        subject: `New Team Application: ${name} - ${role}`,
        html: getTeamNotificationEmail(name, email, role, message || ""),
      });

      // Send confirmation to applicant
      await resend.emails.send({
        from: "RAIDEX <noreply@email.raidex.xyz>",
        to: [email],
        subject: "Application Received - RAIDEX",
        html: getApplicantConfirmationEmail(name, role),
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
