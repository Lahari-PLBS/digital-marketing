import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Configure your email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, email, website, message } = body;

        // Validate required fields
        if (!name || !phone || !email || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER, // Where you want to receive contact emails
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
                    </div>
                    
                    <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Message:</h3>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding: 15px; background-color: #e7f3ff; border-radius: 8px; border-left: 4px solid #2196F3;">
                        <p style="margin: 0; color: #555;">
                            This message was sent from your website's contact form on ${new Date().toLocaleString()}.
                        </p>
                    </div>
                </div>
            `,
        };

        // Auto-reply email to the user
        const autoReplyOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting us!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
                        Thank You for Your Message!
                    </h2>
                    
                    <p>Dear ${name},</p>
                    
                    <p>Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.</p>
                    
                    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap; line-height: 1.6; background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
                    </div>
                    
                    <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4CAF50; margin: 20px 0;">
                        <p style="margin: 0; color: #2e7d32;">
                            <strong>Our team typically responds within 24 hours during business days.</strong>
                        </p>
                    </div>
                    
                    <p>Best regards,<br/>
                    Your Support Team</p>
                    
                    <hr style="margin: 30px 0; border: none; height: 1px; background-color: #ddd;">
                    <p style="color: #666; font-size: 12px;">
                        This is an automated response. Please do not reply to this email.
                    </p>
                </div>
            `,
        };

        // Send both emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoReplyOptions);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        
        // Return different error messages based on error type
        if (error.code === 'EAUTH') {
            return NextResponse.json(
                { error: 'Email authentication failed. Please contact support.' },
                { status: 500 }
            );
        }
        
        if (error.code === 'ECONNECTION') {
            return NextResponse.json(
                { error: 'Could not connect to email server. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}