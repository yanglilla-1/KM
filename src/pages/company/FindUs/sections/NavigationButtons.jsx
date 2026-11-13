import { useEffect, useState } from "react";
import kakaoNaviIcon from "assets/images/kakao-navi-icon.jpg";
import naverMapIcon from "assets/images/naver-map-icon.jpg";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

const destination = { name: "계명종합중기", lat: 35.1913581, lng: 128.1249121 };
const name = encodeURIComponent(destination.name);
const kakaoWeb = `https://map.kakao.com/link/to/${name},${destination.lat},${destination.lng}`;
const naverWeb = `https://map.naver.com/p/search/${encodeURIComponent("경남 진주시 도동천로 276")}`;
const naverApp = `nmap://navigation?dlat=${destination.lat}&dlng=${destination.lng}&dname=${name}&appname=${encodeURIComponent("https://www.kmheavy.kr")}`;
const key = import.meta.env.VITE_KAKAO_MAP_KEY;
const isMobile = () => /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent);

export default function NavigationButtons() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!key || !isMobile()) return undefined;
    let active = true;
    const initialize = () => {
      if (!active || !window.Kakao) return;
      if (!window.Kakao.isInitialized()) window.Kakao.init(key);
      setReady(true);
    };
    if (window.Kakao) {
      initialize();
      return () => { active = false; };
    }
    let script = document.getElementById("kakao-navigation-sdk");
    if (!script) {
      script = document.createElement("script");
      script.id = "kakao-navigation-sdk";
      script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.8.5/kakao.min.js";
      script.integrity = "sha384-v6JKY3z4FUkWq21oZDHZe74YvuPk/WUrVLrDHTBojHXClOSa3iXy7sCXPY1jkFbj";
      script.crossOrigin = "anonymous";
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", initialize);
    return () => {
      active = false;
      script.removeEventListener("load", initialize);
    };
  }, []);

  return (
    <MKBox sx={{ mt: 2.5 }}>
      <MKBox sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5 }}>
        <MKButton
          component="a"
          href={kakaoWeb}
          startIcon={<MKBox component="img" src={kakaoNaviIcon} alt="" sx={{ width: 28, height: 28, borderRadius: 1, objectFit: "contain" }} />}
          onClick={(event) => {
            if (!isMobile() || !ready) return;
            event.preventDefault();
            window.Kakao.Navi.start({ name: destination.name, x: destination.lng, y: destination.lat, coordType: "wgs84" });
          }}
          sx={{ minHeight: 48, bgcolor: "#fee500", color: "#191919", "&:hover": { bgcolor: "#f2d900", color: "#191919" } }}
        >
          {key ? "카카오내비 바로가기" : "카카오맵 길찾기"}
        </MKButton>
        <MKButton
          component="a"
          href={naverWeb}
          startIcon={<MKBox component="img" src={naverMapIcon} alt="" sx={{ width: 28, height: 28, borderRadius: 1, objectFit: "contain" }} />}
          onClick={(event) => {
            if (!isMobile()) return;
            event.preventDefault();
            window.location.href = naverApp;
          }}
          sx={{ minHeight: 48, bgcolor: "#03a94d", color: "#fff", "&:hover": { bgcolor: "#02883e", color: "#fff" } }}
        >
          네이버 내비 바로가기
        </MKButton>
      </MKBox>
      <MKTypography variant="body2" color="text" sx={{ mt: 1, wordBreak: "keep-all" }}>
        휴대폰에서는 내비 앱으로, 컴퓨터에서는 웹 지도로 연결됩니다. 네이버 내비는 네이버 지도 앱 설치가 필요합니다.
      </MKTypography>
    </MKBox>
  );
}
