import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTime date={props.date} />
            <DateTimePretty date={props.date} />
        </div>
    )
}
export default Video;