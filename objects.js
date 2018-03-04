var playlist = {
  Coldplay:'sparks'
}
function updatePlaylist(playlist, artistName, songTitle){
 return Object.assign({}, playlist, { [artistName]: songTitile })
  return playlist 
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.Coldplay; 
  return playlist 
}