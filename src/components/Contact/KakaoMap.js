import React, { useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.4919541191175, 126.924968681319), // 랩코어 좌표
      level: 3
    };

    const map = new window.kakao.maps.Map(container, options);
    
    // 마커 추가
    const markerPosition = new window.kakao.maps.LatLng(37.4919541191175, 126.924968681319);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

    // 커스텀 오버레이 추가
    const content = `
      <div style="padding:10px;background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);">
        <strong style="display:block;margin-bottom:4px;color:#333;">랩코어(주)</strong>
        <span style="color:#666;font-size:13px;">우성캐릭터그린빌 1321호</span>
      </div>
    `;

    new window.kakao.maps.CustomOverlay({
      map: map,
      position: markerPosition,
      content: content,
      yAnchor: 2.2
    });
  }, []);

  return <MapContainer id="map" />;
};

export default KakaoMap;