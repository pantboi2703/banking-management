// import type { Metadata } from "next";
// import { Inter, IBM_Plex_Serif } from "next/font/google";
// import "./globals.css";

// // type FontOptions = {
// //   subsets: string[];
// //   fontWeight: string[];
// //   variable?: string; // Ensure this is optional and can be a string
// // };


// const inter = Inter({ subsets: ["latin"], variable: '--font-inter'});
// const ibmPlexSerif = IBM_Plex_Serif({ 
//    subsets: ['latin'],
//    fontWeight: ['400', '700'], 
//    variable: '--font-ibm-plex-serif'
//    });

//   //  function IBM_Plex_Serif(options: FontOptions) {
//   //   // Function implementation
//   //   return {
//   //     ...options,
//   //     variable: options.variable || ''
//   //   };
//   // }
  
// export const metadata: Metadata = {
//   title: "Horizon",
//   description: "Horizon is a modern banking platform for everyone.",
//   icons: {
//     icon: '/icons/logo.svg'
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'], // Changed 'fontWeight' to 'weight' for correct usage
  variable: '--font-ibm-plex-serif'
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}





