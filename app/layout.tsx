import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SahlanSuuq',
  description: 'Wax ka iibso, wax ku iibso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="so">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
