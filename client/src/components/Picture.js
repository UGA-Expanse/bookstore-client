
const mainStyle = {
  display: 'block',
  textAlign: 'center',
  margin: '0 auto'
}

export const Picture = props => {
  const handleError = ( e ) => {
    console.log("error loading image");
    // this.parentNode.children[0].srcSet = this.parentNode.children[1].srcSet = this.src
  }
  const view = (
    <picture style={mainStyle}>
        <source srcSet={`${props.img}`} type="image/png" />
        <img src="https://generative-placeholders.glitch.me/image?width=180&height=274&style=mondrian" 
            alt="my image" 
            onError={handleError} />
    </picture>
  );

  return view;
}

export default Picture;