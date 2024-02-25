import MainContent from "./_libs/components/MainContent";
import Header from "./_libs/components/Header";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="root">
      <Header />
      <MainContent />
    </div>
  );
}
