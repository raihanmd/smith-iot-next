import { RootWrapper } from "@/contexts/RootContext";
import { ChildrenProps, TData } from "@/types";
import fetchGET from "@/utils/fetchGET";

let data: TData;

async function getData() {
  data = await fetchGET();
}

getData();

export default function RootProvider({ children }: ChildrenProps) {
  return <RootWrapper data={data}>{children}</RootWrapper>;
}
