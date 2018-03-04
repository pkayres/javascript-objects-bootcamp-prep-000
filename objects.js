var playlist = {
  Coldplay:'sparks'
}

function updatePlaylist(playlist, artistName, songTitle){
   playlist[artistName] = songTitle;
   return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete [artistName] 
  return playlist 
}

//Object.assign({artistName: ['songTitle'] })
