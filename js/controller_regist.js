/**
 * Created by zhyf on 2017/3/21.
 */
myApp.controller('regist',["$scope","$state","myAjax",function($scope,$state,myAjax){

    //获取验证码
    $scope.getVcode=function(){
        $scope.sendMsgtogetVCode={
            "apiCode":"10001",
            "params":{
                "phone":$scope.phone,
                "type":"1"
            }
        }
        myAjax.send("http://112.74.45.194:8080/api",$scope.sendMsgtogetVCode,function(){
            console.log(arguments[0])
            $scope.verificationCode=arguments[0].content.verifyCode;
            $scope.$apply($scope.verificationCode)
        },function(){
            console.log(arguments[0])
        })
    }

    //注册
    $scope.regist=function(){
        $scope.registdata={
            "apiCode":"10002",
            "params":{
                "phone":$scope.phone,
                "password":$scope.password,
                "verifyCode":$scope.verificationCode,
                "inviteCode":$scope.inviteCode
            }
        }
        myAjax.send("http://112.74.45.194:8080/api",$scope.registdata,function(){
            console.log(arguments[0]);
        },function(){
            console.log(arguments[0])
        })
        console.log($scope.registdata)
    }
}])