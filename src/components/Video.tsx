import { VideoProps } from '../types/ListsProps';
import DateTime from './DateTime';
import WithTimePretty from './WithTimePretty';

function Video(props: VideoProps) {
    const DateTimePretty = WithTimePretty(DateTime);
    return (
        <div className="video">
            <iframe
                src={props.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            <DateTimePretty date={props.date} />
        </div>
    );
}

export default Video;
