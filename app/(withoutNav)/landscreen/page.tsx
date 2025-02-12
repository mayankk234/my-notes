import { title, subtitle } from "@/components/primitives";
import MyNotes from "@/public/img/MyNotes.png";
import LandScreenCard from "@/components/landscreencard";

export default function LandScreenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-default-100">
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <LandScreenCard />
      </div>
    </div>
  );
}
