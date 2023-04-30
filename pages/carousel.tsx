import { useState } from 'react';

export default function Carousel() {
  const [imageInfo, setImageInfo] = useState({ visible: false, url: '' });

  const handleClick = (url:any) => {
    setImageInfo({ visible: true, url });
  };

  const closeImageInfo = () => {
    setImageInfo({ visible: false, url: '' });
  };

  return (
    <div className="relative">
      <div className="carousel rounded-box max-w-sm">
        {[
          'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
          'https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
          'https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
          'https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
          'https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
          'https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
          'https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
        ].map((url) => (
          <div key={url} className="carousel-item">
            <img
              src={url}
              alt="Burger"
              onClick={() => handleClick(url)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      {imageInfo.visible && (
        <div
          className="absolute top-0 left-0 max-w-sm h-full bg-white flex items-center justify-center rounded-box"
          onClick={closeImageInfo}
        >
          <p className="text-black">{imageInfo.url}</p>
          <h1>haha</h1>
        </div>
      )}
    </div>
  );
}