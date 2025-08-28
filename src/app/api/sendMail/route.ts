import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Nodemailer Transport Config
    const transporter = nodemailer.createTransport({
      service: "gmail", // ya SMTP server
      auth: {
        user: process.env.EMAIL_USER,  // .env me rakho
        pass: process.env.EMAIL_PASS
      }
    });

    // Email Content
    const mailOptions = {
      from: email,
      to: "kanishkavats69@gmail.com", // yaha apni email likho
      subject: "New Contact Form Message",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
