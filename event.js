const remote = require('electron').remote;
const dialog = remote.dialog;

// const {dialog} = require('electron')

function onClick_OpenFile(){
    const lable = document.getElementById('label');
    lable.innerText = dialog.showOpenDialog({properties:['openFile']})
}

function onClick_CustomOpenFile(){
    const lable = document.getElementById('label');
    var options = {};
    options.title = '打开文件';
    options.message = '打开我的文件';
    options.buttonLabel = '选择';
    //Mac OSX 默认目录是桌面
    options.defaultPath = '.';
    options.properties = ['openFile'];
    lable.innerText = dialog.showOpenDialog(options)
}

function onClick_FileType(){
    const label = document.getElementById('label');
    var options={};
    options.title = '打开文件';
    options.buttonLabel = '选择';
    //
    options.defaultPath = '.';
    options.properties = ['openFile'];
    options.filters = [
        {name: '图像文件', extentions: ['jpg', 'png', 'gif']},
        {name: '视频文件', extentions: ['mkv', 'avi', 'mp4']},
        {name: '所有文件', extentions: ['*']}
    ]
    label.innerText = dialog.showOpenDialog(options)
}

function onClick_OpenAndCreateDirectory(){
    const label = document.getElementById('label');
    var options = {};
    options.title = '打开目录';
    //
    options.properties = ['openDirectory', 'createDirectory'];
    label.innerText=dialog.showOpenDialog(options)
}

function onClick_MultiSelection(){
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';
    options.message = '选择多个文件和目录';
    options.properties = ['openFile', 'multiSelections'];
    if(ProcessingInstruction.platform === 'darwin'){
        options.properties.push('openDirectory');
    }
    label.innerText = dialog.showOpenDialog(options)
}

function onClick_Callback(){
    const label = document.getElementById('label');
    var options = {};
    options.title = '选择多个文件和目录';
    options.message = '选择多个文件和目录';
    options.properties = ['openFile', 'multiSelection'];
    if(ProcessingInstruction.platform === 'darwin'){
        options.properties.push('openDirectory');
    }
    dialog.showOpenDialog(options, (filePaths) => {
        for(var i = 0; i < filePaths.length; i++) {
            label.innerText += filePaths[i] + '\r\n';
        }
    });
}