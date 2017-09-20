// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//var UsersController = {
//  cropper: {
//    init: {
//      var options = {
//        imageBox: '.imageBox',
//        thumbBox: '.thumbBox',
//        spinner: '.spinner',
//        imgSrc: 'avatar.png'
//      }
//
//      var cropper = new cropbox(options);
//
//      document.querySelector('#file').addEventListener('change', function() {
//        var reader = new FileReader();
//        reader.onload = function(e) {
//            options.imgSrc = e.target.result;
//            cropper = new cropbox(options);
//        };
//
//        reader.readAsDataURL(this.files[0]);
//        this.files = [];
//      });
//
//    document.querySelector('#btnCrop').addEventListener('click', function(){
//        var img = cropper.getDataURL()
//        document.querySelector('.cropped').innerHTML += '<img src="'+img+'">';
//    });
//
//    document.querySelector('#btnZoomIn').addEventListener('click', function(){
//      cropper.zoomIn();
//    });
//
//    document.querySelector('#btnZoomOut').addEventListener('click', function(){
//      cropper.zoomOut();
//    });
//  }
//  }
//};
//
//$(document).on('users#create:loaded', function(){
//  UsersController.cropper.init();
//});
//
//$(document).on('users#edit:loaded', function(){
//  UsersController.cropper.init();
//});
//
