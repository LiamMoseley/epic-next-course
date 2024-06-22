import Link from "next/link";
import { Logo } from "@/components/custom/Logo";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  data: {
    logoText: {
      id: number;
      text: string;
      url: string;
    };
  };
}

export async function Header({ data }: Readonly<HeaderProps>) {
  const { logoText } = data;
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-royalblue-300 from-10% via-pictonblue-200 via-30% to-mountainmeadow-200 to-90% shadow-md dark:bg-gray-800">
      <Logo text={logoText.text} />
    </div>
  );
}
