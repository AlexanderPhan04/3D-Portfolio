import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
    }}
  >
    <div
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
        📧 New Contact Form Submission
      </h1>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      >
        <p style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#555" }}>
          <strong>From:</strong> {fullName}
        </p>
        <p style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#555" }}>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${email}`}
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            {email}
          </a>
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <p
          style={{
            margin: "0 0 10px 0",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Message:
        </p>
        <blockquote
          style={{
            margin: "0",
            padding: "15px",
            backgroundColor: "#f9f9f9",
            borderLeft: "4px solid #0066cc",
            fontSize: "15px",
            color: "#444",
            lineHeight: "1.6",
          }}
        >
          {message}
        </blockquote>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            color: "#777",
            textAlign: "center",
          }}
        >
          💡 Reply to this email to respond to {fullName}
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "12px",
          color: "#999",
        }}
      >
        <p>Sent from your Portfolio Contact Form</p>
        <p>AlexanderPhan.site</p>
      </div>
    </div>
  </div>
);
