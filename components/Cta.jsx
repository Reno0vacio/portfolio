import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="conatiner mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Bármi kérdése vagy esetleg tanácsot szeretne? Akkor itt vagyok!
          </h2>
          <Link href="/contact">
            <Button>Kapcsolat</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
