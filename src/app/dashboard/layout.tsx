import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="hidden md:block h-screen bg-white fixed mt-[60px]">
        <Sidebar />
      </div>
      <div className="">
        <Header />
        <div className="md:ml-64">{children}</div>
      </div>
    </div>
  );
}
