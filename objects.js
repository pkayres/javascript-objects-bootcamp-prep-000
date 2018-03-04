var playlist = {
  Coldplay:'sparks'
}
function updatePlaylist(playlist, artistName, songTitle){
   Object.assign({}, playlist, { [artistName]: songTitile })
  return playlist 
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist 
}