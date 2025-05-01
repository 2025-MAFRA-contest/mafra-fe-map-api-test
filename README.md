## 할 일

-  kakao map api 연동해보기

### 진행 방법

- 각자 해보는게 좋으니까 브랜치를 만들어서
- 작성해 본 결과를 올려주기

**PR/Merge 진행하지 않도록 합니다. 각자 결과물을 각자 브랜치에 저장해두도록 하죠.**

## ✅ 사전 개발 환경 구성

### **1. Node.js 설치**
- 프로젝트 관리를 위해 Node.js 설치 필요  
  👉 [https://nodejs.org](https://nodejs.org) 에서 LTS 버전 설치 권장

### **2. 패키지 매니저 설정**
- 기본적으로 `npm` 사용 가능 

### **3. 개발 편의를 위한 확장 프로그램 (VSCode 기준)**
- ESLint 

#### **4. 의존성 설치 (루트에 있는 프로젝트 복사해서 사용하는 기준)**
- `npm install`

#### **5. 개발 서버 실행**
- `npm run dev`

---

## ✅ Kakao Maps API 구성 – 전체 처리할 일 요약

---

### **1. Kakao Maps API 로드 구성**
- `autoload=false` 옵션으로 Kakao Maps SDK 로드 설정
- `<script>` 태그를 동적으로 삽입하여 SDK 로딩
- SDK 로드 후 `kakao.maps.load()` 로 초기화 콜백 실행

---

### **2. 지도 객체 생성**
- `ref`를 사용해 `<div>` 요소와 지도 객체를 관리
- `new kakao.maps.Map(container, options)`으로 지도 인스턴스 생성

---

### **3. 컨트롤러 등록**
- `new kakao.maps.MapTypeControl()` 및 `ZoomControl()` 생성
- `map.addControl(control, position)`으로 지도에 부착

---

### **4. 마커 등록**
- 위치 배열을 기반으로 `new kakao.maps.Marker()` 반복 생성
- 각 마커를 지도에 부착하고 클릭 이벤트 등록
- 클릭 시 `marker.getPosition()`으로 좌표 확인

---

### **5. InfoWindow 표시**
- 각 마커마다 `new kakao.maps.InfoWindow()` 생성
- 마커 클릭 시 `infowindow.open(map, marker)`로 정보창 표시

*마커 생성까진 타입을 미리 지정해 놓았습니다. InfoWindow 작업을 하면서 이게 왜 큰 선물인지 느껴봅시다.*
