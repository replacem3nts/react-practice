export const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Rape Me', duration: '3:36' },
    { title: 'All Star', duration: '2:30' },
    { title: 'Debaser', duration: '5:04' },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};
