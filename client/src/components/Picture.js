
const mainStyle = {
  display: 'block',
  textAlign: 'center',
  margin: '0 auto'
}

export const Picture = props => {
  
  const {img, dim} = props;

  function getImageWidth() {
    switch (dim) {
      case 'L' : 
        return 284;
      case 'M' :
        return 180;
      case 'S' :
        return 36;
    }
  }

  function getImageHeight() {
    switch (dim) {
      case 'L' :
        return 475;
      case 'M' :
        return 274;
      case 'S' :
        return 58;
    }
  }

  const handleError = ( e ) => {
    e.target.parentNode.children[0].srcset = e.target.parentNode.children[1].src;
  }
  const view = (
    <picture style={mainStyle}>
        <source srcSet={`${img}`} type="image/png" />
        <img src={`https://generative-placeholders.glitch.me/image?width=${getImageWidth()}&height=${getImageHeight()}&style=mondrian`}
              alt="my image" onError={handleError} />
    </picture>
  );

  return view;
}

export default Picture;