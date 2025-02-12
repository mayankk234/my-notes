import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Notes",
  description: "A simple note-taking application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}