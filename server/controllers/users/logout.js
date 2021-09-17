module.exports = {
  get: (req, res) => {
    // 세션 아이디를 통해 고유한 세션 객체에 접근할 수 있다.
    // 앞서 로그인 시 세션 객체에 저장했던 값이 존재할 경우, 이미 로그인한 상태로 판단할 수 있다.
    // 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현해보자.
    if( !req.session.userId ) {
      return res.status(400).json({ data: null, messgae: 'not authorized' });
    }
    req.session.destroy();
    res.status(200).json({ data: null, message: 'ok' });
  }
}
