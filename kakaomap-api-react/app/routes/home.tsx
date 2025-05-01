import type { Route } from "./+types/home";
import KakaoMap from "./map/map";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Using Kakao Map API with React Router App" },
    { name: "description", content: "Let't try it!" },
  ];
}

export default function Home() {
    return (
        <div>
            <h2>Home</h2>
            <KakaoMap />
        </div>
    );
}
