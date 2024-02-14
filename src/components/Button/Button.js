import classes from './button.module.css'



export default function Button({
    type,
    text,
    OnClick,
    color,
    backgroundColor,
    fontSize,
    width,
    height,
}) {
  return (
    <div className={classes.container}>
        <button
            style={{
                color,
                backgroundColor,
                fontSize,
                width,
                height,
            }}
            type={type}
            onClick={OnClick}
        >
            {text}
        </button>

    </div>
  );
  
}

Button.defaultProps = {
    type: 'button',
    text: 'Submit',
    color: 'white',
    backgroundColor: '#e72929',
    fontSize: '1.3rem',
    width: '12rem',
    height: '3.5rem',
}
