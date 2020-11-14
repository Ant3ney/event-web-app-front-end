import InitAppStates from './InitAppStates';
import initDataFile from './initDataFile';
import initialFetch from './fetching/initialFetch';

var init = {
    beginingOfApp: () => {
        InitAppStates();
        initDataFile();
    },
    appMounted: () => {
        initialFetch();
    },
    filePond: () => {
        var pondHolder = window.useHook({getFilePond: true});
        var FilePond = pondHolder.FilePond;
        var FilePondPluginFileEncode = pondHolder.FilePondPluginFileEncode

        FilePond.registerPlugin(FilePondPluginFileEncode);
        FilePond.parse(document.body);
        
        var ponEle = FilePond.create(document.querySelector('span > .filepond'), {
          maxFiles: 10,
          maxFileSize: '3MB',
          allowMultiple: true
        });
        window.ponEle = ponEle;
    }
}

export default init;