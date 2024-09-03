import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import path from "path";

type RequestBody = {
  email: string;
};

export async function POST(req: NextRequest) {
  const { email }: RequestBody = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Load the service account credentials from JSON file
    const credentialsPath = path.join(
      process.cwd(),
      "/config/hip-polymer-327607-cb1a3b9a6bd9.json"
    );
    const spreadsheetId = "1oDRpKMIDAXvpBLiLj-QIQ_OKQ4b4V0S9e2ofM0JdkiY";

    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    // Check if the 'email' column header exists
    const headerRange = "Sheet1!A1"; // The first cell in column A
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: headerRange,
    });

    const header = headerResponse.data.values?.[0]?.[0];

    if (header !== "email") {
      // Insert the 'email' header if it doesn't exist
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: headerRange,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [["Email"]],
        },
      });
    }

    // Check if the email already exists in the sheet
    const existingEmailsRange = "Sheet1!A:A"; // Assuming emails are stored in column A
    const existingEmailsResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: existingEmailsRange,
    });

    const existingEmails =
      existingEmailsResponse.data.values?.flat().slice(1) || []; // Exclude header row

    if (existingEmails.includes(email)) {
      return NextResponse.json(
        { error: `This ${email} has already subscribed.` },
        { status: 400 }
      );
    }

    // Append new email
    const range = "Sheet1!A:A"; // Append to column A

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[email]],
      },
    });

    return NextResponse.json(
      { message: `Email added successfully.` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error appending data to Google Sheets:", error);
    return NextResponse.json(
      { error: "Failed to save email" },
      { status: 500 }
    );
  }
}
