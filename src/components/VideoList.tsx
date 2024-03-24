import { VideoProps } from '../types/ListsProps';
import Video from './Video';
import { nanoid } from 'nanoid';

function VideoList(props: { list: VideoProps[] }) {
    return props.list.map((item) => (
        <Video key={nanoid()} url={item.url} date={item.date} />
    ));
}

export default VideoList;
