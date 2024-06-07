

// const fetchVimeoM3U8Url = async (videoId) => {
// console.log(videoId, "in function");
//     const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
//       headers: {
//         'Authorization': `Bearer ${process.env.REACT_APP_VIMEO_TOKEN}`
//       }
//     });
//     const data = await response.json();
//     // Assuming the .m3u8 URL is under 'files' in the API response
//     const m3u8File = data.files.find(file => file.quality === 'hls');
//     // console.log(m3u8File.link);
//     return m3u8File ? m3u8File.link : null;
//   };



export const fetchVideoUrl = async ({url}) => {
    try {
      // const url = await fetchVimeoM3U8Url(videoId);
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  };