var playlist = {
  Coldplay:'sparks'
}

function updatePlaylist(cake, artistName, songTitle){
   cake[artistName] = songTitle;
   return cake
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist 
}

//Object.assign({artistName: ['songTitle'] })
