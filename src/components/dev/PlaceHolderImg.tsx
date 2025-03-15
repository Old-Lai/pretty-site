import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}
export default function PlaceHolderImg(props: Props) {
  return (
    <Card className={cn(props.className, "w-full p-0")}>
      <CardContent className="flex aspect-square items-center justify-center p-6 md:aspect-[9/12]">
        <span className="text-4xl font-semibold">placeholder</span>
      </CardContent>
    </Card>
  );
}
