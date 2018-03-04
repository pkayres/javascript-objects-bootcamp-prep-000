var playlist = {
  Coldplay:'sparks'
}

function updatePlaylist(playlist, artistName, songTitle){
   playlist[artistName] = songTitle;
   return cake
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist 
}

//Object.assign({artistName: ['songTitle'] })
