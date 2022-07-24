import classes from './AnimationAcrossScreen.module.css'

function AnimationAcrossScreen(props) {
    function ashOrPika() {
        if (props.char === 'ash') {
            return classes.ash
        }
        if (props.char === 'pika') {
            return classes.pika

        }
    }
    return (
        <div className={ashOrPika()}></div>
    )
}

export default AnimationAcrossScreen;