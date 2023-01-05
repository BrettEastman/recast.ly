const AutoplayButton = (props) => {
  return (
    <div>
      <input type="checkbox" checked = {props.autoplay} name="autoplay" id="autoplay" value="autoplay" onChange={() => {
        console.log(props.autoplay);
        if (props.autoplay) {
          props.setAutoplay(false);
        } else {
          props.setAutoplay(true);
        }
      }}/>
      <label for="autoplay"> Autoplay </label>
    </div>
  );
};

export default AutoplayButton;