var playlist = {
  Coldplay:'sparks'
}
function updatePlaylist(playlist, artistName, songTitle){
   playlist.Beatles = 'yesterday';
   return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist 
}

//Object.assign({artistName: ['songTitle'] })
