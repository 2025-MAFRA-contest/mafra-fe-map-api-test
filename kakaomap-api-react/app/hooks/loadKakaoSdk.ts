// app/hooks/loadKakaoSdk.ts
export function loadKakaoSdk(): Promise<void> {
    return new Promise((resolve) => {
        if ((window as any).kakao?.maps) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_API_KEY}&autoload=false`;
        script.async = true;

        script.onload = () => {
            (window as any).kakao.maps.load(() => {
                console.log("✅ Kakao SDK fully loaded");
                resolve();
            });
        };

        document.head.appendChild(script);
    });
}
