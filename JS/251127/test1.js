function createPasswordManager() {
  // 여기에 클로저를 활용하여 비밀번호를 관리하는 함수를 작성하세요.
  let password = "";

  return {
    setPassword(newPw) {
      _pw = newPw;
      console.log(`${newPw} 새로운 비밀번호가 설정되었습니다.`);
    },
    login(pw) {
      if (_pw === pw) console.log("로그인성공");
      else console.log("비밀번호가 틀렸습니다.");
    },
  };

  //   this.setPassword = function(){
  //     return password;
  //   }

  //   this.login = function(){
  //     if(password){
  //         console.log('로그인 성공')
  //     }else{
  //         console.log('비밀번호가 틀렸습니다')
  //     }
  //   }
}

const passwordManager = createPasswordManager();
passwordManager.setPassword("secure123"); // 새로운 비밀번호가 설정되었습니다.
passwordManager.login("wrongpassword"); // "비밀번호가 틀렸습니다!"
passwordManager.login("secure123"); // "로그인 성공!"
