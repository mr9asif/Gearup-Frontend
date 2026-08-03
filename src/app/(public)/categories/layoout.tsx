import { Navbar } from "@/shared/layout/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full px-4 max-w-8xl ">{children}</main>
    </>
  );
}
