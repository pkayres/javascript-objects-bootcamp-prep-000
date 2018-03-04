var playlist = {
  Coldplay:'sparks'
}
function updatePlaylist(playlist, artistName, songTitle){
   Object.assign({}, playlist, { The Beatles: ['yesterday'] })
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist 
}