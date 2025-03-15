import { Button } from "@/components/ui/button";
import PlaceHolderImg from "@/components/dev/PlaceHolderImg";
import { cn } from "@/lib/utils";

//workaround for intellesense
const className = {
  header: "text-2xl mb-2 text-[#c79681]",
  listItem: "flex justify-between h-7",
  cost: "font-bold",
  filler: "flex-1 border-b-1 h-1/2 border-dashed border-primary mx-2",
};
const styles = className;

export default function LashExtensions() {
  return (
    <div className="flex w-full justify-center bg-(--color-secondary) p-0 text-justify md:p-15">
      <div className="h-full w-full max-w-5xl rounded-md bg-white py-5 md:rounded-2xl md:px-10 md:py-15 lg:px-20">
        {/* Hero section */}
        <section className="bg-(--color-secondary) px-10 py-5 md:bg-white md:px-20">
          <h1 className="mb-5 text-3xl text-[#fab89d] md:text-5xl">Lashes</h1>
          <h2 className={cn(styles.header)}>header</h2>
          <ul className="mb-10 list-disc space-y-2 px-6 md:text-lg">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              velit orci, fermentum non ex quis, varius suscipit tellus. Proin
              laoreet posuere lectus eget elementum. Morbi ac nulla nec felis
              elementum convallis. Nunc eget justo rhoncus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              velit orci, fermentum non ex quis, varius suscipit tellus. Proin
              laoreet posuere lectus eget elementum.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <Button className="min-h-15 w-full text-lg">Book Now</Button>
        </section>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <section
              className={cn(
                "flex flex-col items-start justify-center md:flex-row-reverse md:items-center",
                i === 0 && "md:mt-10",
                i % 2 && "md:flex-row",
              )}
              key={_ + i}
            >
              <PlaceHolderImg className="rounded-none md:rounded-md" />
              <div className="p-6 md:max-w-1/2">
                <h2 className={cn(styles.header)}>Header</h2>
                <p className="pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean velit orci, fermentum non ex quis, varius suscipit
                  tellus. Proin laoreet posuere lectus eget elementum. Morbi ac
                  nulla nec felis elementum convallis. Nunc eget justo rhoncus.
                </p>
                <ul>
                  <li className={styles.listItem}>
                    <p>Menu item-1</p>
                    <div className={styles.filler} />
                    <p className={styles.cost}>$123</p>
                  </li>
                  <li className={styles.listItem}>
                    <p>Menu item-2 more text</p>
                    <div className={styles.filler} />
                    <p className={styles.cost}>$12</p>
                  </li>
                  <li className={styles.listItem}>
                    <p>Menu item-3 text</p>
                    <div className={styles.filler} />
                    <p className={styles.cost}>$123</p>
                  </li>
                  <li className={styles.listItem}>
                    <p>Menu item-4</p>
                    <div className={styles.filler} />
                    <p className={styles.cost}>$1234</p>
                  </li>
                  <li className={styles.listItem}>
                    <p>Menu item-5</p>
                    <div className={styles.filler} />
                    <p className={styles.cost}>$5</p>
                  </li>
                </ul>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
}
