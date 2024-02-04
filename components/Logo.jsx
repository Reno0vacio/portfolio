import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={128}
        height={128}
        priority
        alt="Illés Ákos (IllésInnovate)"
      />
    </Link>
  );
};

export default Logo;
