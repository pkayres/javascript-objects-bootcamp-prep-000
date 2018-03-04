var playlist = {
  Coldplay:'sparks'
}

function updatePlaylist(object, artistName, songTitle){
   object.artistName = songTitle;
   return object
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist 
}

//Object.assign({artistName: ['songTitle'] })
