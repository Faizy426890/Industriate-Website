import Link from 'next/link';
import Image from 'next/image';

const LOGO_SRC =
  'https://res.cloudinary.com/daxjhteb5/image/upload/v1778693338/Logo_Concept_1__1_-removebg-preview_lp54op.png';

type Props = {
  className?: string;
};

export function Logo({ className = '' }: Props) {
  return (
    <Link
      href="/"
      aria-label="INDUSTRITAS Staffing, LLC, home"
      className={`inline-block ${className}`}
    >
      <Image
        src={LOGO_SRC}
        alt=""
        width={120}
        height={115}
        priority
        className="block h-auto w-auto"
      />
    </Link>
  );
}