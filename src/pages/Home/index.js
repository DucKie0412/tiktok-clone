import Video from "~/layouts/Video";
import videos from "~/assets/videos";

function Home() {
    return (
        <>
            <Video
                src={videos.video}
                avatar="https://cdn.tgdd.vn/News/1560692/genshin-impact-chiori-card-1-1280x948.jpg"
                name="Chiori_neee"
                nickname="Dinh Duc"
                videoContent="Chỉ là dòng nội dung của video thôi"
                hashtags={
                    [
                        'hashtag1',
                        'hashtag2',
                        'hashtag3',
                        'hashtag4',
                        'hashtag5',
                        'hashtag6',
                    ]
                }
                musicName="Em Ellata - Ngày ấy (Yesterday)"
            />
            <Video
                src={videos.video}
                avatar="https://cdn.tgdd.vn/News/1560692/genshin-impact-chiori-card-1-1280x948.jpg"
                name="Chiori_neee0412"
                nickname="Dinh Tran Duc"
                videoContent="Vẫn chỉ là dòng nội dung của video thôi"
                hashtags={
                    [
                        'hashtag1',
                        'hashtag2',
                        'hashtag3',
                        'hashtag4',
                        'hashtag5',
                        'hashtag6',
                    ]
                }
                musicName="Em Ellata - Ngày ấy (Yesterday)"
            />
            <Video
                src={videos.video}
                avatar="https://cdn.tgdd.vn/News/1560692/genshin-impact-chiori-card-1-1280x948.jpg"
                name="Chiori_neee"
                nickname="Dinh Duc"
                videoContent="Chỉ là dòng nội dung của video thôi"
                hashtags={
                    [
                        'hashtag1',
                        'hashtag2',
                        'hashtag3',
                        'hashtag4',
                        'hashtag5',
                        'hashtag6',
                    ]
                }
                musicName="Em Ellata - Ngày ấy (Yesterday)"
            />
        </>
    );
}

export default Home;