//Instantiate a map and platform object:
var platform = new H.service.Platform({
    'apikey': 'Enter key here'
});

//Provide hook to data
var useHook = (settings) => {
  if(settings.getFilePond){
    return({
      FilePond: FilePond,
      FilePondPluginFileEncode: FilePondPluginFileEncode
    });
  }
  else if(settings.getMap){
    return({
      platform: platform,
      H: H
    });
  }
}
window.useHook = useHook;