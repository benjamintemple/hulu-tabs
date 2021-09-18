import HuluTabs from "../components/HuluTabs";
import useSWR from "swr";
import axios from "axios";

export default function Home() {
  const fetcher = url => axios.get(url).then(res => res.data);
  const { data, error } = useSWR("/api/tabs", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <HuluTabs tabData={data} />;
}
