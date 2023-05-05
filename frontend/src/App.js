import PhotoAlbum from "react-photo-album"
import { useCallback } from "react"
import './App.css'

function App() {

  const size1 = 400
  const size2 = 700

  const padding = 30
  const spacing = 30

  const photos = [
    {src: "IMG_8315.JPG", width: size1, height: size2},
    {src: "IMG_8320.JPG", width: size1, height: size2},
    {src: "IMG_8330.JPG", width: size1, height: size2},
    {src: "IMG_8351.JPG", width: size1, height: size2},
    {src: "IMG_8363.JPG", width: size1, height: size2},
    {src: "IMG_8373.JPG", width: size1, height: size2},
    {src: "IMG_8381.JPG", width: size1, height: size2},
    {src: "IMG_8384.JPG", width: size2, height: size1},
    {src: "IMG_8401.JPG", width: size1, height: size2},
    {src: "IMG_8419.JPG", width: size1, height: size2},
    {src: "IMG_8429.JPG", width: size1, height: size2},
    {src: "IMG_8431.JPG", width: size1, height: size2},
    {src: "IMG_8437.JPG", width: size1, height: size2},
    {src: "IMG_8443.JPG", width: size2, height: size1},
    {src: "IMG_8462.JPG", width: size2, height: size1},
    {src: "IMG_8464.JPG", width: size1, height: size2},
    {src: "IMG_8473.JPG", width: size1, height: size2},
    {src: "IMG_8476.JPG", width: size1, height: size2},
    {src: "IMG_8478.JPG", width: size1, height: size2},
    {src: "IMG_8479.JPG", width: size1, height: size2},
    {src: "IMG_8487.JPG", width: size1, height: size2},
    {src: "IMG_8496.JPG", width: size1, height: size2},
    {src: "IMG_8497.JPG", width: size1, height: size2},
    {src: "IMG_8507.JPG", width: size1, height: size2},
    {src: "IMG_8551.JPG", width: size1, height: size2},
    {src: "IMG_8581.JPG", width: size1, height: size2},
    {src: "IMG_8594.JPG", width: size1, height: size2}
  ]

  const renderPhoto = useCallback(
    ({ imageProps: { alt, style, ...rest } }) => (
        <img
            alt={alt}
            style={{
                ...style,
                borderRadius: "4px",
                boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                backgroundColor: 'white'
            }}
            {...rest}
        />
    )
);

  return (
    <div className="App">
      <header>
        <h1>BigBuddyInABox.com</h1>
      </header>
      <main>
        <PhotoAlbum 
          layout="masonry" 
          photos={photos}
          spacing={spacing}
          padding={padding}
          renderPhoto={renderPhoto}
        />
      </main>
    </div>
  );
}

export default App;
