import { GithubIcon, LinkedinIcon } from "../icons/Icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-2 bg-zinc-950">
      <div className="mt-4 text-center">
        <p className="text-slate-300 my-2">
          1155 103rd St, Miami Beach, Florida.
        </p>
        <p className="text-slate-300">&copy; 2024 Marque&apos;s burguer.</p>
      </div>
      <div className="flex items-center my-4 gap-4">
        <div className="cursor-pointer ease duration-300">
          <LinkedinIcon fill="white" />
        </div>
        <div className="cursor-pointer ease duration-300">
          <GithubIcon fill="white" />
        </div>
      </div>
    </footer>
  );
}
